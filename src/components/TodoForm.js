import React, {useState} from 'react'

function TodoForm(props) {
    const [input,setInput] = useState('');
    
    const handlerChange = e =>{
        setInput(e.target.value);
    };

    const handlerSubmit = (e)=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:input
        });
        
        setInput('');
    };

    return (
        <form onSubmit={handlerSubmit} className="">
            <input type="text" placeholder="ingrese tarea" className="" value={input} name="text" onChange={handlerChange}/>
            <button  className="" >Agregar</button>
        </form>
    )
}

export default TodoForm
