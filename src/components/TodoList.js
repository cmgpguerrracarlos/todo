import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo =>{
    
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    const removeTodo = (id)=>{
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
            
        </div>
    )
}

export default TodoList
