import Task from "../domain/entities/task";

export default interface TaskRepository {
    createTask:(task: Task) => Task;
    deleteTask: (task: Task) => Task;
    updateTask: (task: Task) => Task;
}