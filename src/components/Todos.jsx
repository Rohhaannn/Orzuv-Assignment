import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, removeTodo } from '../feature/todo/todoSlice';


const Todos = () => {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleUpdatedText = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveUpdatedText = (id) => {
    if(editText.trim() === '') return;
    dispatch(updateTodo({id, newText: editText}));
    setEditId(null);
    setEditText(''); 
  }

  return (
    <>
    <br />
      
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <hr />
            
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-black px-2 py-1 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => saveUpdatedText(todo.id)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  ✔
                </button>
              ) : (
                <button
                  onClick={() => handleUpdatedText(todo.id, todo.text)}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  ✏
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
