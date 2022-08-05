import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {add, remove, clear} from './features/todoSlice'

function Todo() {
    const todoList = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    return(
        <div>
            <form onSubmit={(e) => {e.preventDefault(); dispatch(add(String(input)));}}>
                <input type="text" onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Submit new item to To Do</button>
            </form>
            <list>
                
            </list>
        </div>
    )
}

export default Todo