import logo from './logo.svg';
import TodoList from './todolist/todolist';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
