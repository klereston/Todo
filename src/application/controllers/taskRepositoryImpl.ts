import Task from "../../core/domain/entities/task";
import TaskRepository from "../../core/repository/taskRepository";
import DTOSImpl from "../../infrastructure/controllers/dtosImpl";


export default class TaskRepositoryImpl implements TaskRepository{
  
    dtosImpl: DTOSImpl

    constructor(dtosImpl: DTOSImpl){
        this.dtosImpl = dtosImpl
    }

    createTask(newTask: Task) {
        this.dtosImpl.createTask(newTask);
        return newTask;
    };

    
    deleteTask(taskToDelete: Task)  {
        this.dtosImpl.deleteTask(taskToDelete);
        return taskToDelete;
    };
    

    updateTask(taskToUpdate: Task)  {
        this.dtosImpl.updateTask(taskToUpdate);
        return taskToUpdate;
    };
}