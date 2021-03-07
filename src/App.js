import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import GamePage from './pages/GamePage';
import Toolbar from './components/Toolbar';
import s from './App.module.scss';

function App() {
  return (
    <Router>
      <Toolbar />

      <div className={s.container}>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/todo'>
            <TodoPage/>
          </Route>

          <Route path='/game'>
            <GamePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
