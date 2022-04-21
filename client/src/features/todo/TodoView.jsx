import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectOneTodo, fetchOneTodo } from './todoSlice'
import { Link } from "react-router-dom";
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function TodoList() {
    const dispatch = useDispatch()
    const oneTodo = useSelector(selectOneTodo)

    useEffect(() => {
        dispatch(fetchOneTodo())
    }, [dispatch])

    console.log(oneTodo)

    return (
        <div className='App'>
            {oneTodo.map(todo => {
                return (
                    <div className='oneTodo'>
                        <h1 key={ todo._id }>{ todo.title }</h1>
                        <p>{ todo.description }</p>
                        <p>{ todo.priority }</p>
                        <p>{ todo.isComplete }</p>
                        <p>{ todo.dateComplete }</p>
                        <Link to='/edit' className='btn btn-primary'>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList