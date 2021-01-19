import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App mx-5 my-4">
      <div className="row mx-2">
        <h3>Simple Todolist</h3>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
