import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react"

interface AddTaskFormProps {
  onSubmit: (title: string) => void
}

export default function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const [input, setInput] = useState("")

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Was muss erledigt werden?" className="flex grow items-center gap-2 border-[.5px] border-r-0 rounded-l-md p-2 border-slate-800 dark:border-slate-400 bg-slate-200 dark:bg-slate-800 focus:outline-1 focus:outline-offset-0 focus:outline-slate-950 dark:focus:outline-slate-50 z-1" />
      <button type="submit" className="border-[.5px] rounded-r-md p-2 border-slate-800 dark:border-slate-400 bg-slate-200 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
        <PlusIcon className="size-5 text-green-500" /> 
      </button>
    </form>
  )
}