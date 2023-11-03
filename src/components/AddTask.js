import React, { useState } from "react";
import Button from "./Button";

const AddTask = ({onSaveHandler}) => {
    const [taskName,setTaskName]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const saveTask = (e) => {
        // e.preventDefault();
        if(!taskName || !day) {
            alert('please fill all the details')
        }
        console.log( taskName + " " + day + " " + reminder)
        onSaveHandler(taskName, day, reminder)

        setTaskName('')
        setDay('')
        setReminder(false)

    }


  return (
    <form  action='#' className="add_Task">
      <div className="add">
        <label>Task</label>
        <input type="text" placeholder="Add Task"  value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      </div>
      <div className="add">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="setReminder">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange= {(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <Button className="save" value="Save" onClick={saveTask}></Button>
    </form>
  );
};

export default AddTask;
