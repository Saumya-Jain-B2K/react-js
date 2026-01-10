import "./todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    ));
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        if(todo.id == id){
            return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
        } else {
            return todo;
        }
      })
    ));
  }

  let markAllAsDone = () => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    ));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        if(todo.id == id){
            return {
          ...todo,
          isDone: true,
        };
        } else {
            return todo;
        }
      })
    ));
  }

  return (
    <div className="Todo">
      <input
        placeholder="Add any task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button> &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button> &nbsp;
      <button onClick={markAllAsDone}>Mark All as Done</button>
      
    </div>
  );
}
