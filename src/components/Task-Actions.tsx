import Task from "./Task";

type TaskActions = 
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'EDIT_TASK'; payload: { id: number, updates: Partial<Task> } }
    | { type: 'REMOVE_TASK'; payload: number };

export default TaskActions;