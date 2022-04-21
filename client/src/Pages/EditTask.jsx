import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUpdateTodo } from '../features/todo/todoSlice'
import { selectOneTodo, fetchOneTodo, selectedId } from './todoSlice'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function EditTask() {
    const dispatch = useDispatch()
    const oneTodo = useSelector(selectOneTodo)
    const id = useSelector(selectedId)

    const handleOnClick = () => {
        const newBody = {
            title: oneTodo.title,
            description: oneTodo.description,
            priority: oneTodo.priority,
            isComplete: oneTodo.isComplete
        }
        dispatch(fetchUpdateTodo(newBody))
    }

    useEffect(() => {
        dispatch(fetchOneTodo(id))
    }, [dispatch, id])

    return (
        <div className='App'>

            <h1>Update a Task:</h1>

            <div className="form">
                <div className="form-group">
                    <label>Title</label>
                    <input value={ oneTodo.title } className='form-control' type="text" />
                </div><br/>

                <div className="form-group">
                    <label>Description</label>
                    <input value={ oneTodo.description } className='form-control' type="text" />
                </div><br/>

                <div className="form-group">
                    <label>Priority</label>
                    <select>
                        <option value=""></option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div><br/>

                <div className="form-group">
                    <label>Complete?</label>
                    <input type="checkbox" name=""/>
                </div><br/>

                <button onClick={ handleOnClick } className='btn btn-primary'>Update</button>
            </div>

        </div>
    )
}

export default EditTask