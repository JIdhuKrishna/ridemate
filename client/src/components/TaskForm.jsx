import { useState } from "react";
import api from "../services/api";

export default function TaskForm({
  onCreate,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Low");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        description,
        priority,
      });

      setTitle("");
      setDescription("");
      setPriority("Low");

      onCreate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Create Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br />
      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <br />
      <br />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br />
      <br />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}