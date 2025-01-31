import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  
  return (
    <>
      <div>
        <h1 className='text-3xl text-white font-bold mt-10'>
          Task Manager
        </h1>
      </div>
      <div>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
