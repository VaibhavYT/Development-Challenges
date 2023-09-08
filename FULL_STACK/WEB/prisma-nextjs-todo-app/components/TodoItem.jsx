import React from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleUpdate}
            className="form-checkbox text-indigo-600 h-6 w-6"
          />
          <span
            className={`text-lg ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {todo.task}
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
