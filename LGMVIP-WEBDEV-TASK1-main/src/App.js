import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <>
      <h1 className='heading'>Todo List</h1>
      <div className="todo-list-container">
        <TodoList />
      </div>
    </>
  );
}

export default App;
