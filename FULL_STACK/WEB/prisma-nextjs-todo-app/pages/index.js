import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from '../components/TodoItem';
import Try from '../components/Try';
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching Todos:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('api/createTodo', {
        task: newTodo,
        completed: false,
      });
      setNewTodo('');
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error creating Todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3000/api/deleteTodo', {
        data: { id },
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const handleUpdate = async (id, updatedTodo) => {
    try {
      const response = await axios.put('http://localhost:3000/api/updateTodo', updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? response.data : todo
        )
      );
    } catch (error) {
      console.error('Error updating Todo:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Add a new Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 flex-grow"
        />
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
        <Try/>
      </div>
    </div>
  );
};

export default Home;
