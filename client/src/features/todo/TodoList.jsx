import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodosList, fetchTodosList, fetchOneTodo } from './todoSlice'
import { Link } from "react-router-dom";
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function TodoList() {
    const dispatch = useDispatch()
    const todosList = useSelector(selectTodosList)

    useEffect(() => {
        dispatch(fetchTodosList())
    }, [dispatch])

    console.log(todosList)

    return (
        <div className='App'>
            {todosList.map(todo => {
                return (
                    <div className='eachTodo'>
                        <p key={ todo._id }>{ todo.title }</p>
                        <Link onClick={ () => dispatch(fetchOneTodo(todo._id)) } to='/view' className='btn btn-primary'>View</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList