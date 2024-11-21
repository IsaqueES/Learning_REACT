import { useState } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';
import './index.css';

function App() {
  // State(Estado) para as tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tarefa: 'Jogar Lixo Fora',
      feito: false,
    },
    {
      id: 2,
      tarefa: 'Passear com o cachorro',
      feito: false,
    },
    {
      id: 3,
      tarefa: 'Lavar Louça',
      feito: false,
    },
  ]);

  // Função para alternar o estado de "feito" de uma tarefa
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === task) {
        return { ...task, feito: !task.feito }; // Alterna entre 'feito' e 'não feito'
      }

      return task;
    });
    setTasks(newTasks); // Atualiza o estado das tasks
  }

  return (
    <section className="w-screen h-screen bg-gray-700 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas!
        </h1>
        <Task tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </section>
  );
}

export default App;
