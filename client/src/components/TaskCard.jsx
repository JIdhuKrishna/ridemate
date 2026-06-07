import api from "../services/api";

export default function TaskCard({
  task,
  onChange,
}) {
  const completeTask = async () => {
    try {
      await api.put(`/tasks/${task._id}`, {
        status: "Completed",
      });

      onChange();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);

      onChange();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        Priority: {task.priority}
      </p>

      <p>
        Status: {task.status}
      </p>

      <button onClick={completeTask}>
        Complete
      </button>

      <button
        onClick={deleteTask}
        style={{
          marginLeft: "10px",
        }}
      >
        Delete
      </button>
    </div>
  );
}