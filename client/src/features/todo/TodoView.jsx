import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectOneTodo, fetchOneTodo, selectedId } from './todoSlice'
import { Link } from "react-router-dom";
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function TodoList() {
    const dispatch = useDispatch()
    const oneTodo = useSelector(selectOneTodo)
    const id = useSelector(selectedId)

    useEffect(() => {
        dispatch(fetchOneTodo(id))
    }, [dispatch, id])

    return (
        <div className='App'>
            <h1>{ oneTodo.title }</h1><br/>
            <p>{ oneTodo.description }</p>
            <p>{ oneTodo.priority }</p>

            {oneTodo.isComplete === true
            ? <p>Yes</p>
            : <p>No</p>
            }

            <p>{ oneTodo.dateComplete }</p>

            <Link onClick={ () => dispatch(fetchOneTodo(id)) } to='/edit' className='btn btn-primary'>Edit</Link>
        </div>
    )
}

export default TodoList