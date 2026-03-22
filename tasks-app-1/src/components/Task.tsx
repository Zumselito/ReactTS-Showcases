import type { TaskType } from "../types/task"
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TaskProps {
  t: TaskType;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function Task({t, onCompleteChange, onDelete}: TaskProps) {
  return (
    <div className="flex items-center">
      <label className="flex grow items-center gap-2 border-[.5px] border-r-0 rounded-l-md py-2 px-3 border-slate-800 dark:border-slate-400 bg-slate-200 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
        <input type="checkbox" checked={t.completed} onChange={(e) => onCompleteChange(t.id, e.target.checked)} className="scale-125" />
        <span className={t.completed ? "line-through text-slate-400" : ""}>{t.title}</span>
      </label>
      <button
      onClick={() => onDelete(t.id)}
      className="border-[.5px] rounded-r-md p-2 border-slate-800 dark:border-slate-400 bg-slate-200 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
        <XMarkIcon className="h-6 w-5 text-red-500" />   
      </button>
    </div>
  )
}
