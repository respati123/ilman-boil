import TodoList from './todolist/todolist';
import './App.scss';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact component={Login} path="/login"/>
            <PrivateRoute exact component={TodoList} path="/todolist"/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
