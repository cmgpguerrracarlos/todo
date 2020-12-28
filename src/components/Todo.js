import React, {useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../App.css'

function Todo({todos,removeTodo,completeTodo}) {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    });

    if(!todos[0]){
        return <h1>Vacio</h1>
    }else{
        return todos.map(
            (e,i)=>{
                return (
                <div className={e.isComplete?'todo-row complete' : 'todo-row'}>
                    <div onClick={()=>{completeTodo(e.id)}}>
                        {e.text}
                    </div>
                    <div className='icons'>
                        <RiCloseCircleLine onClick={()=>{removeTodo(e.id)}} className='delete-icon'/>
                        <TiEdit onClick={() => setEdit({ id: e.id, value: e.text })} className='edit-icon' />
                    </div>
                </div>)
            }
        );
    }

    
}

export default Todo
