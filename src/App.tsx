import { Header } from './components/Header';
import { TodoContainer } from './components/TodoContainer';
import styles from './styles/App.module.css';
import './styles/global.css';

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TodoContainer />
      </div>
    </>
  )
}

export default App
