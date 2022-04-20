import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Task() {
    return (
        <div className='App'>

            <h1>Create a new Task:</h1>

            <div className="form">
                <div className="form-group">
                    <label>Title</label>
                    <input className='form-control' type="text" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input className='form-control' type="text" />
                </div>

                <div className="form-group">
                    <label>Priority</label>
                    <select>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Complete</label>
                    <input type="checkbox" name="" />
                </div><br/>

                <button className='btn btn-primary'>Submit</button>
            </div>
        
        </div>
    )
}

export default Task
