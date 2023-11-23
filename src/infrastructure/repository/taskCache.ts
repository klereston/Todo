import Task from "../../core/domain/entities/task";

//Implemented in ../db/TasksDataBase
export default interface Cache {

    existTaskInCache: (task: Task) => boolean;

    saveTaskInCache: (task: Task) => void;

    deleteTaskInCache: (task: Task) => void;

    getTasksFromCache: (arr: Array<Task>) => Array<Task>;
}