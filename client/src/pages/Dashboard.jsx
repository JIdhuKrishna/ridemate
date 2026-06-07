import { useEffect, useState } from "react";
import api from "../services/api";
import FuelCalculator from "../components/FuelCalculator";
import RideChecklist from "../components/RideChecklist";
import RideAnalytics from "../components/RideAnalytics";
import WeatherWidget from "../components/WeatherWidget";
import MapPreview from "../components/MapPreview";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const pendingTasks = tasks.filter((t) => t.status === "Pending").length;

  const completedTasks = tasks.filter((t) => t.status === "Completed").length;

  return (
    <div className="min-h-screen bg-[#05070A] p-8 text-white">
      {/* Hero Section */}
      <div className="glass p-10 mb-8 relative overflow-hidden">
        <div
          className="
          absolute
          w-96 h-96
          bg-orange-500/20
          rounded-full
          blur-3xl
          -top-24
          -right-24
        "
        />

        <div
          className="
          absolute
          w-80 h-80
          bg-cyan-500/10
          rounded-full
          blur-3xl
          bottom-0
          left-0
        "
        />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3">🏍 RideMate</h1>

          <p className="text-xl text-gray-300">
            Plan rides. Track tasks. Explore destinations.
          </p>

          <button
            className="
            mt-6
            px-6
            py-3
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition
          "
          >
            Start Next Ride
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="glass p-6">
          <p className="text-gray-400">Total Tasks</p>

          <h2 className="text-4xl font-bold mt-2">{tasks.length}</h2>
        </div>

        <div className="glass p-6">
          <p className="text-gray-400">Pending</p>

          <h2 className="text-4xl font-bold text-orange-400 mt-2">
            {pendingTasks}
          </h2>
        </div>

        <div className="glass p-6">
          <p className="text-gray-400">Completed</p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {completedTasks}
          </h2>
        </div>

        <div className="glass p-6">
          <p className="text-gray-400">Upcoming Rides</p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">3</h2>
        </div>
      </div>

      {/* Weather + Fuel + Checklist */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <WeatherWidget />
        <FuelCalculator />
        <RideChecklist />
      </div>

      {/* Next Ride */}
      <div className="glass p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">🗺 Next Ride</h2>

        <h3 className="text-2xl font-semibold">Munnar Adventure</h3>

        <p className="text-gray-400 mt-2">Distance: 126 KM</p>

        <p className="text-gray-400">Weather: 22°C Cloudy</p>

        <button
          className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-cyan-500
          hover:bg-cyan-600
          transition
        "
        >
          Open Navigation
        </button>
      </div>
      {/* Analytics */}
      <div className="mb-8">
        <RideAnalytics />
      </div>

      {/* Tasks */}
      <div className="glass p-8">
        <h2 className="text-2xl font-semibold mb-6">📋 My Tasks</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-400">No Tasks Found</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="
              glass
              p-5
              mb-4
              flex
              justify-between
              items-center
              hover:-translate-y-1
              transition
            "
            >
              <div>
                <h3 className="font-semibold text-lg">{task.title}</h3>

                <p className="text-gray-400">{task.description}</p>
              </div>

              <span
                className="
                px-4
                py-2
                rounded-full
                bg-purple-500/20
                text-purple-300
              "
              >
                {task.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
