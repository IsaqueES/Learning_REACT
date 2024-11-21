import { ChevronRightIcon } from "lucide-react"; // Corrigi o nome do ícone importado
import { useState } from "react";

function Task(props) {
  return (
    <ul className="space-y-2 bg-orange-500 rounded-md shadow p-6">
      {props.tasks.map(task => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-gray-700 rounded-md p-2 w-full text-white ${
              task.feito && "line-through animate-pulse"
            }`}
          >
            {task.tarefa}
          </button>

          <button className="p-2 bg-gray-700 rounded-md hover:translate-x-2 text-white hover:text-black hover:bg-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
