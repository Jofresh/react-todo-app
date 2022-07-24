import React from 'react';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';

const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F8F8F8',
  justifyContent: 'space-between',
};

const mainStyle = {
  padding: '2em',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const formStyle = {};

const todosStyle = {
  display: 'flex',
  'flex-direction': 'column',
  gap: '15px',
};

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    setTodos(['first-todo', 'second-todo', 'third-todo']);
  }, []);

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return;

    setInput(e.target.value);
    handleSubmit();
  }

  function handleSubmit() {
    if (input === '') return;

    addInput(input);
    setInput('');
  }

  function addInput(str) {
    setTodos((todos) => [input, ...todos]);
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo, i) => i !== id));
  }

  return (
    <div style={appStyle}>
      <Header />
      <div style={mainStyle}>
        <div style={formStyle}>
          <input
            type="text"
            value={input}
            placeholder="Add a new todo..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <div style={todosStyle}>
          {todos?.length > 0 &&
            todos.map((todo, i) => (
              <Todo key={i} id={i} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
