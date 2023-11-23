import inquirer from 'inquirer';
import App from './application/app';
import Task from './core/domain/entities/task';


const app = new App();

const menu = () => {
    const menuTask = inquirer.prompt([
        {
            type: 'list',
            name: 'todo',
            message: 'TODO:',
            choices: ['create_task', 'update_task', 'delete_task', 'show_tasks', 'Exit']
        }

    ]).then((message)=>{

        if(message.todo === 'create_task'){ createTaskTodo(app) }
        if(message.todo === 'update_task'){ updateTaskTodo(app) }
        if(message.todo === 'delete_task'){ deleteTaskTodo(app) }
        if(message.todo === 'show_tasks'){ showDatabase() }


    }).catch((error)=>{
        console.log(error.name);
    });
}


const createTaskTodo = (app: App) => {
    const createTask = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Write the new task to do?'
        },
        {
            type: 'list',
            name: 'completed',
            message: 'Is this task completed?',
            choices: ['true', 'false']
        }
    ]).then((message)=>{
        const id: number = Math.random(); //generate id, prevent create a task with the same id.
        const name: string = message.name;
        let completed: boolean;
    
        if(message.completed === 'true'){
            completed = true;
        }else {
            completed = false;
        }
    
        const task = new Task(id, name, completed);
        
        //Create the task with data if the title(name) doesn't exist.  
        const exT = app.existTask(task);
        if(exT === true){
            console.log("Can Not save this task, This Title Task already exist!")
            
            //recursive OJO!!
            createTaskTodo(app);
        }
        endMenu();
        
    }).catch((error)=>{
        console.log(error.name);
    });    
}



const updateTaskTodo = (app: App) => {
    const listOfTasks = app.getAllTasks();
    const tasksTitles: Array<String> = listOfTasks.map(task => "Task: " + task.name + ", id:" + task.id + ", completed: " + task.completed);


    const updateTask = inquirer.prompt([
        {
            type: 'list',
            name: 'taskToUpdate',
            message: 'Choose a task to update?',
            choices: tasksTitles
        }
    ]).then((message)=>{

        //find the task object in db by name
        listOfTasks.forEach((task) => {
            if(message.taskToUpdate.includes(task.id.toString())){
                updateTaskInput(task);               
            }
        });
        
    }).catch((error)=>{
        console.log(error.name);
    });    
}



const updateTaskInput = (task: Task) => {
    const createTask = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Update this task with new title'
        },
        {
            type: 'list',
            name: 'completed',
            message: 'Is this task completed?',
            choices: ['true', 'false']
        }
    ]).then((message)=>{

        const name: string = message.name;
        let completed: boolean;
    
        if(message.completed === 'true'){
            completed = true;
        }else {
            completed = false;
        }
    
        //Update the task with new data
        task.name = name, 
        task.completed = completed;
        
        //app.updateTask(task);
        endMenu();

    }).catch((error)=>{
        console.log(error.name);
    });    
}


const deleteTaskTodo = (app: App) => {
    const listOfTasks = app.getAllTasks();
    const tasksTitles: Array<String> = listOfTasks.map(task => "Task: " + task.name + ", id:" + task.id + ", completed: " + task.completed);

    const updateTask = inquirer.prompt([
        {
            type: 'list',
            name: 'taskToDelete',
            message: 'Choose a task to delete?',
            choices: tasksTitles
        }
    ]).then((message)=>{

        //find the task object in db by name
        listOfTasks.forEach((task) => {
            if(message.taskToDelete.includes(task.id.toString())){
                //app.deleteTask(task);
                endMenu();            
            }
        });
        
    }).catch((error)=>{
        console.log(error.name);
    });    
}

const endMenu = () => {
    const menuTask = inquirer.prompt([
        {
            type: 'list',
            name: 'todo',
            message: 'TODO:',
            choices: ['Go_to_menu', 'Show_Tasks_DB', 'Exit']
        }

    ]).then((message)=>{

        if(message.todo === 'Go_to_menu'){ menu() }
        if(message.todo === 'Show_Tasks_DB'){ 
            showDatabase();
        }
        //Exit nothing

    }).catch((error)=>{
        console.log(error.name);
    });
}


const showDatabase = () => {
    console.log("DATA_BASE: ")
    console.log(app.getAllTasks())
    endMenu();
}

//START CLI
menu();