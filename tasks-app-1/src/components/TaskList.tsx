import { useMemo } from "react";
import Task from "./Task";
import type { TaskType } from "../types/task";

interface TaskListProps {
  t: TaskType[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({
  t,
  onCompleteChange,
  onDelete
}: TaskListProps) {
  
  const tasksSorted = useMemo(() => {
    return [...t].sort((a, b) => {
      if (a.completed === b.completed) {
        return b.id - a.id;
      }
      return a.completed ? 1 : -1;
    });
  }, [t]);

  return (
    <>
      <div className="space-y-2">
        {tasksSorted.map(t => (
          <Task 
            key={t.id} 
            t={t} 
            onCompleteChange={onCompleteChange} 
            onDelete={onDelete} 
          />
        ))}
      </div>
      {t.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          Feierabend, keine Aufgaben vorhanden.
        </p>
      )}
    </>
  );
}
