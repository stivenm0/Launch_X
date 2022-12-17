import React from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";


import "./App.css";

function App() {

  return (
    <main className=" ">
      <div className="container mx-auto p-10">
      <TaskForm />
      <Task/>
      </div>
    </main>
  );
}

export default App;
