import { useState } from 'react';
import styles from './TodoContainer.module.css';
import { PlusCircle } from 'phosphor-react';
import Clipboard from '../../assets/Clipboard.svg';
import { Task } from '../Task';
import { Input } from '../Input';

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function TodoContainer() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskValue, setTaskValue] = useState('');

  function handleCreateTask() {
    if (!taskValue) {
      return;
    }

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: taskValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask]);
    setTaskValue('');
  }

  function handleCheckTask({ id, value }: { id: number; value: boolean }) {
    const updateCheckTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updateCheckTask);
  }

  function handleRemoveTask(id: number) {
    const filteredTask = tasks.filter((task) => task.id !== id);

    if (!confirm('Deseja mesmo excluir esta tarefa?')) {
      return
    }

    setTasks(filteredTask);
  }

  const checkedCounterTasks = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue
  }, 0)

  return (
    <div className={styles.container}>
      <div className={styles.todoForm}>
        <Input
          value={taskValue}
          onChange={e => setTaskValue(e.target.value)}
        />

        <button onClick={handleCreateTask}>
          Criar
          <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </button>
      </div>

      <div className={styles.bodyTodo}>
        <div className={styles.countTasks}>
          <label htmlFor="create" className={styles.createTask}>
            Tarefas criadas
            <span className={styles.counter}>
              {tasks.length}
            </span>
          </label>
          <label htmlFor="complete" className={styles.doneTasks}>
            Concluídas
            <span className={styles.counter}>
              {tasks.length === 0
                ? tasks.length
                : `${checkedCounterTasks} de ${tasks.length}`
              }
            </span>
          </label>
        </div>



        {tasks.length > 0 ? (
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                taskData={task}
                deleteTask={handleRemoveTask}
                checkTask={handleCheckTask}
              />
            ))}
          </div>
        ) : (
          <div className={styles.infoTask}>
            <img src={Clipboard} alt="clipboard" />
            <p className={styles.textInfo}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}

      </div>
    </div >
  )
}