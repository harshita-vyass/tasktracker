import React, { useState } from "react";
import Button from "./Button";
import AddTask from "./AddTask";

const Header = ({addTask,title}) => {

  const [isToggle, setToggle] = useState(false)
  
   const toggleAddTask = () => {
      setToggle(!isToggle)
   }

  return (
    <header>
      <h1>{title}</h1>
      <div className="addTask">
        <div>
        <h4>Add Task</h4>
        <Button  className={isToggle ? 'btn-red' : ''} onClick={toggleAddTask} value={isToggle?'Close':'Add'} /></div>
        {isToggle && <AddTask onSaveHandler={addTask} />}
      </div>
    
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;


// color="black" value="Add" textColor="white"