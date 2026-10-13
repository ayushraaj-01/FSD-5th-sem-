import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  function addTask(event) {
    event.preventDefault();
    const text = taskText.trim();
    if (!text) return;

    setTasks((currentTasks) => [...currentTasks, { id: Date.now(), text, completed: false }]);
    setTaskText('');
  }

  function toggleTask(id) {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  }

  function startEditing(task) {
    setEditingId(task.id);
    setEditingText(task.text);
  }

  function updateTask(event, id) {
    event.preventDefault();
    const text = editingText.trim();
    if (!text) return;

    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, text } : task
    )));
    setEditingId(null);
    setEditingText('');
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app-shell">
      <section className="todo-card" aria-labelledby="page-title">
        <header className="todo-header">
          <div>
            <p className="eyebrow">Daily focus</p>
            <h1 id="page-title">My tasks</h1>
          </div>
          <div className="progress" aria-label={`${completedTasks} of ${tasks.length} tasks completed`}>
            <strong>{completedTasks}</strong>
            <span>/{tasks.length} done</span>
          </div>
        </header>

        <form className="add-form" onSubmit={addTask}>
          <label className="sr-only" htmlFor="new-task">Add a task</label>
          <input
            id="new-task"
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="What needs to be done?"
          />
          <button type="submit">Add task</button>
        </form>

        <div className="task-list" aria-live="polite">
          {tasks.length === 0 ? (
            <p className="empty-state">Your task list is clear. Add your first task above.</p>
          ) : (
            tasks.map((task, index) => (
              <article className={`task-item ${task.completed ? 'is-complete' : ''}`} key={task.id}>
                <button
                  className="check-button"
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-label={task.completed ? `Mark task ${index + 1} incomplete` : `Complete task ${index + 1}`}
                >
                  {task.completed ? '✓' : ''}
                </button>

                {editingId === task.id ? (
                  <form className="edit-form" onSubmit={(event) => updateTask(event, task.id)}>
                    <label className="sr-only" htmlFor={`edit-task-${task.id}`}>Update task</label>
                    <input
                      id={`edit-task-${task.id}`}
                      type="text"
                      value={editingText}
                      onChange={(event) => setEditingText(event.target.value)}
                      autoFocus
                    />
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <span className="task-text"><b>Task {index + 1}</b>{task.text}</span>
                )}

                {editingId !== task.id && (
                  <div className="task-actions">
                    <button type="button" onClick={() => startEditing(task)}>Update</button>
                    <button className="delete-button" type="button" onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
