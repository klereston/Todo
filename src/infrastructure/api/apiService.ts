import Task from "../../core/domain/entities/task.js";
import TaskList from "../../core/domain/entities/taskList.js";
import TaskService from "../../infrastructure/repository/taskService.js";

export default class ApiService implements TaskService {


    arrTasks = [
        new Task(Math.random(), "JavaScript", true),
        new Task(Math.random(), "Java", true),
        new Task(Math.random(), "HTML", false),
        new Task(Math.random(), "CSS", false),
        new Task(Math.random(), "C#", true),
        new Task(Math.random(), "C++", false),
        new Task(Math.random(), "PHP", false)   
    ]

    taskList: TaskList = new TaskList(this.arrTasks); 

    getTasks(): TaskList  {
        return this.taskList
    }
    
}
