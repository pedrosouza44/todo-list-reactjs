import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { TaskProps } from '../TodoContainer';

interface Props {
  taskData: TaskProps;
  deleteTask: (id: number) => void;
  checkTask: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Task({ taskData, deleteTask, checkTask }: Props) {

  function handleCheckTask() {
    checkTask({ id: taskData.id, value: !taskData.isChecked });
  }

  function handleRemoveTask() {
    deleteTask(taskData.id);
  }

  const checkboxCheckedClassname = taskData.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

  const paragraphCheckedClassname = taskData.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.content}>
      <div className={styles.taskInfo}>
        <label htmlFor="chackbox" onClick={handleCheckTask}>
          <input readOnly type="checkbox" checked={taskData.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {taskData.isChecked && <Check size={12} color='#f2f2f2' />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {taskData.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemoveTask}>
        <Trash className={styles.trashIcon} size={16} />
      </button>
    </div>
  )
}