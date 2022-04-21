import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import CreateTask from './Pages/CreateTask'
import ViewTask from './Pages/ViewTask'
import EditTask from './Pages/EditTask'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <NavBar /> }>
                    <Route index element={ <Home /> } />
                    <Route path='task' element={ <CreateTask /> } />
                    <Route path='view' element={ <ViewTask /> } />
                    <Route path='edit' element={ <EditTask /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App