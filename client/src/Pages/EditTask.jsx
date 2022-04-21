import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function EditTask() {
    return (
        <div className='App'>

            <h1>Create a new Task:</h1>

            <div className="form">
                <div className="form-group">
                    <label>Title</label>
                    <input className='form-control' type="text" />
                </div><br/>

                <div className="form-group">
                    <label>Description</label>
                    <input className='form-control' type="text" />
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

                <button className='btn btn-primary'>Submit</button>
            </div>

        </div>
    )
}

export default EditTask