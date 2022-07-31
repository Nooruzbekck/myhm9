import React, { useState } from 'react';
import './App.css'; 
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/Todolist/Todolist';




function App() {
  
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "second todo",
      status: true,
      data: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: "third todo",
      status: false,
      data: new Date().toLocaleDateString(),
    },
  ]);
  console.log(todo);
  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
