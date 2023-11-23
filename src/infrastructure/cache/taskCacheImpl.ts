import Task from "../../core/domain/entities/task";
import Cache from "../repository/taskCache";


export default class TaskCacheImpl implements Cache {
    
    arrayListDB: Task[] = new Array<Task>();
    tasksCache: Task[] = new Array<Task>();
    

    constructor(arrayListDB: Task[]){ 
        this.arrayListDB = arrayListDB 

        //populating the cache with the database in the instance
        this.tasksCache = arrayListDB
    }
    
    
    
    private includeTask(task: Task){        
        this.tasksCache.forEach((element) => {
            if(element.name === task.name){
                return true
            }
        })
        return false
    }

    private createTask(task: Task) {
        this.tasksCache.push(task)
            return true
    }
   

    existTaskInCache(task: Task){
        if(this.includeTask(task)){
            //if includeTask is false 
            //"the user has new tasks or updates in the app to save to database"
            return true
            //console.log("the user has new task or update in the app to save to database")
        } else {
            //"the user didn't save any data in cache because there is No new tasks or updates in the app"
            //console.log("the user didn't save any data in cache because there is No new tasks or updates in the app")
            return false
        }
    }

    saveTaskInCache(task: Task){
        this.createTask(task)
    }

    deleteTaskInCache(){
        return true
    };

    getTasksFromCache(arr: Task[]){
        return arr
    };

    
}