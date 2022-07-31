import React from "react";
import styled from "styled-components";
function TodoList ({todo, setTodo}) {

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id)
    console.log(newTodo)
    setTodo(newTodo)
  }
  // function statusTodo (id) {
  //   let newTodo = [...todo].filter(item => {
  //     if(item.id == id){
  //       item.status = !item.status
  //     }
  //     return item
  //   })
  //   setTodo(newTodo)
  // }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>
            <Title>{item.title} {item.data}</Title>
          </div>
          <div>
            <Button onClick={() => deleteTodo(item.id)}>Удалить</Button>
          </div>

          {/* <button onClick={ () => statusTodo(item.id) }>Закрыть / Открыть</button> */}
        </div>
      ))}
    </div>
  );
}
export default TodoList
const Title = styled.div`
  width: 320px;
  height: 40px;
  background: green;
  margin: 0 auto;
  color: white;
  font-size: 20px;
  border-radius: 13px;
  padding-top: 10px;
  box-shadow: #0f5e0f 2px 6px 5px;
  position: relative;
  right: 30px;
  
  


  
`

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: gray;
  margin-left: 400px;
  position: relative;
  bottom: 40px;
`