import React, { useReducer, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import PageLayout from './Page-layout';
import Task from './Task';
import taskReducer from './Task-Reducer';








const TaskList: React.FC = () => {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [] });
    const [taskTitle, setTaskTitle] = useState('');
    const [taskBody, setTaskBody] = useState('');
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskTitle.trim() === '' || taskBody.trim() === '') return; // Prevent adding empty tasks
        const newTask: Task = { id: Date.now(), title: taskTitle, body: taskBody };
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTaskTitle('');
        setTaskBody('');
    };

    const startEditTask = (task: Task) => {
        setEditingTask(task);
        setTaskTitle(task.title);
        setTaskBody(task.body);
    };

    const editTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingTask) {
            dispatch({
                type: 'EDIT_TASK', 
                payload: { id: editingTask.id, updates: { title: taskTitle, body: taskBody } } 
            });
            setEditingTask(null);
            setTaskTitle('');
            setTaskBody('');
        }
    };

    const removeTask = (taskId: number) => {
        dispatch({ type: 'REMOVE_TASK', payload: taskId });
    };

    return (
        <PageLayout>
            <h1>Welcome To the Task Management System</h1>
            <form onSubmit={editingTask ? editTask : addTask}>
                <h2>Add Task</h2>
                <Form.Group controlId="taskTitle">
                    <Form.Control
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Task Title"
                    />
                </Form.Group>
                <Form.Group controlId="taskBody">
                    <Form.Label></Form.Label>
                    <Form.Control
                        as="textarea"
                        value={taskBody}
                        onChange={(e) => setTaskBody(e.target.value)}
                        placeholder="Task Body"
                    />
                </Form.Group>
                <Button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</Button>
                {editingTask && (
                    <Button variant="secondary" onClick={() => setEditingTask(null)} style={{ marginLeft: '0.5rem' }}>
                        Cancel
                    </Button>
                )}
            </form>
            <h2>Current Task</h2>
            {state.tasks.map(task => (
                <Card className='Card' key={task.id} style={{ margin: '1rem 0' }}>
                    <Card.Body>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.body}</Card.Text>
                        <Button variant="warning" onClick={() => startEditTask(task)} style={{ marginRight: '0.5rem' }}>
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => removeTask(task.id)}>Remove</Button>
                    </Card.Body>
                </Card>
            ))}
        </PageLayout>
    );
};

export default TaskList;