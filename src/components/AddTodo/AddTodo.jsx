import React, {useState} from 'react'
import TodoList from '../Todolist/Todolist'
import styled from 'styled-components'

function AddTodo ({todo, setTodo}) {
  const [value, setValue] = useState('')
   
  function saveTodo () {
   setTodo(
     [...todo, {
       id:Math.random(), 
       title: value,
       status: true,
       data: new Date().toLocaleDateString()
  }]
   )
   setValue('')
  }
  return (
    <div>
      <Input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={saveTodo}>Сохранить</Button>
    </div>
  );
}
export default AddTodo   

const Input = styled.input`
  width: 320px;
  height: 30px;
  border-radius: 10px;
  font-size: 18px;
  color: grey;
  margin-left: 60px;
  padding-left: 20px;
  margin-bottom: 20px;
  
`;

const Button = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: green;
  color: red;
  font-size: 15px;
  
`;