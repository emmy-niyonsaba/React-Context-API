import React, { useContext } from 'react'
import { TodoContext } from '../App'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useContext(TodoContext)

  if (todos.length === 0) {
    return (
      <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-md shadow-glass animate-slideInRight">
        <div className="text-center py-10">
          <div className="text-5xl mb-4">📪</div>
          <h3 className="text-2xl font-bold text-slate-100 mb-2">No tasks yet!</h3>
          <p className="text-slate-400">Create your first task to get started</p>
        </div>
      </div>
    )
  }

  const completedTodos = todos.filter(t => t.completed)
  const pendingTodos = todos.filter(t => !t.completed)

  return (
    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-md shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300 animate-slideInRight">
      {pendingTodos.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 pb-3 border-b border-slate-700">
            📋 Pending Tasks ({pendingTodos.length})
          </h3>
          <div className="space-y-3">
            {pendingTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-emerald-400 mb-4 pb-3 border-b border-slate-700">
            ✅ Completed ({completedTodos.length})
          </h3>
          <div className="space-y-3">
            {completedTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoList


