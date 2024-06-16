import styles from './Input.module.css';

export function Input({ ...rest }: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  >) {
  return (
    <input
      className={styles.inputContent}
      placeholder='Adicione uma nova tarefa'
      {...rest}
    />
  )
}