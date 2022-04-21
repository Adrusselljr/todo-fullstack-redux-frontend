import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCreateTodo } from '../features/todo/todoSlice'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function CreateTask() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")

    const handleOnClick = () => {
        const newBody = {
            title: title,
            description: description,
            priority: priority
        }
        dispatch(fetchCreateTodo(newBody))
    }

    return (
        <div className='App'>

            <h1>Create a new Task:</h1>

            <div className="form">
                <div className="form-group">
                    <label>Title</label>
                    <input value={ title } onChange={ e => setTitle(e.target.value) } className='form-control' type="text" />
                </div><br/>

                <div className="form-group">
                    <label>Description</label>
                    <input value={ description } onChange={ e => setDescription(e.target.value) } className='form-control' type="text" />
                </div><br/>

                <div className="form-group">
                    <label>Priority</label>
                    <select onChange={ e => setPriority(e.target.value) }>
                        <option value=""></option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div><br/>

                <button onClick={ handleOnClick } className='btn btn-primary'>Submit</button>
            </div>
        
        </div>
    )
}

export default CreateTask