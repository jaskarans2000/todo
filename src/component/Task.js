import React, { useState } from 'react'
import { connect } from "react-redux"

function Task(props) {
    console.log(props.tasks)
    const [value, setValue] = useState("");
    return (
        <>
        <div>
            <input value={value}
                onChange={(e) => {
                    // console.log(e.target.value)
                    setValue(e.target.value)
                }}
            ></input>
            <button onClick={() => {
                props.addTask(value);
                setValue("");
            }}>Add Task</button>
        </div>
        <ul>
            {props.tasks.map((task,idx)=>{
                return (<span>
                    <li>{task}</li>
                    <button onClick={()=>{props.deleteTask(idx)}}>delete</button>
                </span>)
            })
        }
        </ul>
        </>
    )
}
// 5 -> provide state variables from store
const mapStateToProps = store => {
    // state variables change  
    return store;
}
// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        addTask: (val) => {
            dispatch({
                type: "add_task",
                // data send to reducer function 
                payload: val
            })
        },
        deleteTask: (val)=>{
            dispatch({
                type: "delete_task",
                payload:val
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Task)