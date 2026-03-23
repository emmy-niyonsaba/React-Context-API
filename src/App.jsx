import { createContext, useState } from 'react'
import Profile from './components/Profile'
import UpdateProfile from './components/updateProfile'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export const AppContext = createContext()
export const TodoContext = createContext()

function App() {
  const [user, setUser] = useState({
    name: 'Please set your name',
    age: 0,
    gendar: 'Not set'
  })

  const [className, setClassName] = useState('')

  const contextValue = {
    user,
    setUser,
    className,
    setClassName
  }

  // Todo state management
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null)

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleDateString(),
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id, updatedData) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedData } : todo))
    setEditingId(null)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const todoContextValue = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    editingId,
    setEditingId
  }

  return (
    <div className="min-h-screen px-5 py-5 animate-fadeIn bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <AppContext.Provider value={contextValue}>
        <TodoContext.Provider value={todoContextValue}>
          <div className="max-w-6xl mx-auto">
            {/* Profile Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 align-start">
              <div className="text-center col-span-full mb-10">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-3">
                  Profile Manager & Todo App
                </h1>
                <p className="text-slate-400 text-lg">Manage your profile & tasks with Context API</p>
              </div>
              <Profile />
              <UpdateProfile />
            </div>

            <div className="mt-20">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-3">
                  📝 My Todo List
                </h2>
                <p className="text-slate-400 text-base">
                  Total Tasks: {todos.length} | Completed: {todos.filter(t => t.completed).length}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CreateTodo />
                <TodoList />
              </div>
            </div>
          </div>
        </TodoContext.Provider>
      </AppContext.Provider>
    </div>
  )
}

export default App
