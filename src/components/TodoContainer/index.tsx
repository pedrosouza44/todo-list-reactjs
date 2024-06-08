import styles from './TodoContainer.module.css';
import { PlusCircle } from 'phosphor-react';

export function TodoContainer() {
  return (
    <div className={styles.container}>
      <form className={styles.todoForm}>
        <input type="text" placeholder='Adicione uma nova tarefa' />

        <button type='submit'>
          Criar <PlusCircle size={24} />
        </button>
      </form>
    </div>
  )
}