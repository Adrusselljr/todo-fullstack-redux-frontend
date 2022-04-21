import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Task from './Pages/Task'
import View from './Pages/View'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <NavBar /> }>
                    <Route index element={ <Home /> } />
                    <Route path='task' element={ <Task /> } />
                    <Route path='view' element={ <View /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App