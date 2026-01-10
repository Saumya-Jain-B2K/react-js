import './todo.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }
    return (
        <div className='Todo'>
            <input placeholder="Add any task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTodo}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}