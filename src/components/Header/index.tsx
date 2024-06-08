import styles from './Header.module.css';

import rocketIcon from '../../assets/rocket.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={rocketIcon} />
      <strong>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </strong>
    </header>
  )
}