import TaskRepositoryImpl from "./controllers/taskRepositoryImpl.js";
import CreateTaskDTO from "./dtos/createTaskDTO.js";
import DeleteTaskDTO from "./dtos/deleteTaskDTO.js";
import UpdateTaskDTO from "./dtos/updateTaskDTO.js";
import TaskRepository from "../core/repository/taskRepository.js"
import ApiService from "../infrastructure/api/apiService.js";
import TaskDataBase from "../infrastructure/db/taskDataBase.js";
import Task from "../core/domain/entities/task.js";
import DTOSImpl from "../infrastructure/controllers/dtosImpl.js";


//Init the array arrTasks from Api
export default class App {

    //----init infrastructre data----/
    //Init ApiService
    apiService = new ApiService()

    //get an obj with list of tasks by default with data
    taskList = this.apiService.getTasks()

    //Init db
    taskDataBase = new TaskDataBase(this.taskList)

    //Instance controller DtosImpl DTO's repository
    dtosImpl = new DTOSImpl(this.taskDataBase);
    //---finish infrastructre data--/

    //----init core domain ----/
    //create data classes Task and TaskList as model for App
    //instances: TaskRepository and implements the methods in TaskRepositoryImpl
    //---finish core domain --/

    //---init application---/
    //instance: taskRepositoryImpl passing by param the db and the crudDTO
    taskRepositoryImpl: TaskRepository = new TaskRepositoryImpl(this.dtosImpl);
    //---finish application---/
    

    //---This new tasks come from index.ts by CLI or DOM UI/UX Exemple---/
    createTask(newTask: Task){
        const createTaskDTO = new CreateTaskDTO(newTask);
        this.taskRepositoryImpl.createTask(createTaskDTO.getTask());
    }
    
    deleteTask(taskToDelete: Task){
        const deleteTaskDTO = new DeleteTaskDTO(taskToDelete);
        this.taskRepositoryImpl.deleteTask(deleteTaskDTO.getTask());
    }
     
    updateTask(taskToUpdate: Task){
        const taskToUpdateDTO = new UpdateTaskDTO(taskToUpdate);
        this.taskRepositoryImpl.updateTask(taskToUpdateDTO.getTask());
    }

    getAllTasks(): Array<Task>{
        return this.taskDataBase.getTasks();
    }

}

