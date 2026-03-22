import { useEffect, useState } from "react";
import type { TaskType } from "../types/task";
import { dummyTasks } from "../data/tasks";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks:TaskType[] = JSON.parse(localStorage.getItem("tasks") || "[]") as TaskType[]
    return savedTasks.length > 0 ? savedTasks : dummyTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function setTaskCompleted(id: number, completed: boolean) {
    setTasks((prevTask) =>
      prevTask.map((t) => (t.id === id ? { ...t, completed } : t))
    )
  }
  
  function addTask(title: string) {
    setTasks(prevTasks => [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTasks
    ])
  }

  function deleteTask(id: number) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  function deleteAllCompletedTasks() {
    setTasks(prevTasks => prevTasks.filter(t => !t.completed))
  }

  return {
    tasks,
    setTaskCompleted,
    addTask,
    deleteTask,
    deleteAllCompletedTasks
  }
}