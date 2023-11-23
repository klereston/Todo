import ApiService from "../infrastructure/api/apiService";
import TaskDataBase from "../infrastructure/db/taskDataBase";
import TaskCacheImpl from "../infrastructure/cache/taskCacheImpl";
import Task from "../core/domain/entities/task";

describe('Testing file TaskCacheImpl', () => {
    //Create
    test('this test will create a new task if the title is unique',() => {
         //task obj for test
         const newTask = new Task(Math.random(), "Java", false);

         //Init ApiService
         const apiService = new ApiService();
 
         //get an obj with list of tasks by default with data
         const taskList = apiService.getTasks();
 
         //Init db
         const taskDataBase = new TaskDataBase(taskList);
        
         const taskCacheImpl = new TaskCacheImpl(taskDataBase.getTasks())

         //Testing if the exist Task In Cache
         expect(taskCacheImpl.existTaskInCache(newTask)).toBe(true);
    })
})