import Task from "./task";
export default class TaskList {
    tasks: Array<Task>;

    constructor(tasks: Array<Task>){
        this.tasks = tasks
    }
}