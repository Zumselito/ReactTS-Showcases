import AddTaskForm from "./components/AddTaskForm"
import TaskList from "./components/TaskList"
import TaskSummary from "./components/TaskSummary"
import { ThemeToggle } from "./components/ThemeToggle"
import useTasks from "./hooks/useTasks"

function App() {
  const {
    tasks,
    setTaskCompleted,
    addTask,
    deleteTask,
    deleteAllCompletedTasks
  } = useTasks()

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
      <h1 className="font-bold text-3xl text-center">Deine Aufgaben</h1>
      <div className="max-w-lg mx-auto bg-slate-300 dark:bg-slate-700 p-5 space-y-6 border-[.5px] rounded-md border-slate-800 dark:border-slate-400">
        <div className="flex justify-between">
          <TaskSummary tasks={tasks} deleteAllCompleted={deleteAllCompletedTasks} />
          <ThemeToggle />
        </div>
        <AddTaskForm onSubmit={addTask} />
        <TaskList t={tasks} onCompleteChange={setTaskCompleted} onDelete={deleteTask} />
      </div>
    </main>
  )
}

export default App
