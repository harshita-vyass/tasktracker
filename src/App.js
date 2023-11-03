import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const saveTask = (taskName, day, reminder) => {
    console.log(taskName + " " + day + " " + reminder);
    const newTask = {
      id: getId(),
      text: taskName,
      day: day,
      reminder: reminder,
    };
    setTasks([...tasks, newTask]);
  };


  const getId = () => {
    return Math.floor(Math.random()*10000) + 1;
  }

  return (
    <div className="App">
      <Header addTask={saveTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={setReminder} />
      ) : (
        <p
          style={{
            fontWeight: "bolder",
            backgroundColor: "black",
            color: "white",
          }}
        >
          No Task to show
        </p>
      )}
    </div>
  );
};

export default App;
