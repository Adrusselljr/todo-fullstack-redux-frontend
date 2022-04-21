import React from 'react'
import TodoList from '../features/todo/TodoList'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <div className='App'>

            <h1>Your list of tasks:</h1><br/>

            <div className="todos">
                <TodoList />
            </div>
        
        </div>
    )
}

export default Home