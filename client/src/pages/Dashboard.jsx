import { useEffect, useState } from "react";
import api from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  });

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStats = async () => {
    try {
      const { data } = await api.get("/tasks/stats");
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshDashboard = () => {
    fetchTasks();
    fetchStats();
  };

  useEffect(() => {
    refreshDashboard();
  }, []);

  return (
    <div>
      <h1>🏍️ RideMate Dashboard</h1>

      <h2>📊 Task Statistics</h2>

      <p>Total Tasks: {stats.total}</p>
      <p>Pending: {stats.pending}</p>
      <p>In Progress: {stats.inProgress}</p>
      <p>Completed: {stats.completed}</p>

      <hr />

      <TaskForm onCreate={refreshDashboard} />

      <hr />

      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onChange={refreshDashboard}
          />
        ))
      )}
    </div>
  );
}