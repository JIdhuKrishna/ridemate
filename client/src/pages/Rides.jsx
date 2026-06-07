import { useEffect, useState } from "react";
import api from "../services/api";

export default function Rides() {
  const [rides, setRides] = useState([]);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [rideDate, setRideDate] = useState("");

  const fetchRides = async () => {
    try {
      const { data } = await api.get("/rides");
      setRides(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createRide = async (e) => {
    e.preventDefault();

    try {
      await api.post("/rides", {
        title,
        destination,
        distance,
        rideDate,
      });

      setTitle("");
      setDestination("");
      setDistance("");
      setRideDate("");

      fetchRides();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div className="min-h-screen p-8 text-white">

      <div className="glass p-8 mb-8">

        <h1 className="text-4xl font-bold mb-6">
          🏍 Ride Planner
        </h1>

        <form
          onSubmit={createRide}
          className="space-y-4"
        >

          <input
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            outline-none
            "
            placeholder="Ride Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            outline-none
            "
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />

          <input
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            outline-none
            "
            type="number"
            placeholder="Distance (KM)"
            value={distance}
            onChange={(e) =>
              setDistance(e.target.value)
            }
          />

          <input
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            outline-none
            "
            type="date"
            value={rideDate}
            onChange={(e) =>
              setRideDate(e.target.value)
            }
          />

          <button
            className="
            px-6
            py-3
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition
            "
          >
            Add Ride
          </button>

        </form>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {rides.length === 0 ? (
          <div className="glass p-6">
            No rides added yet
          </div>
        ) : (
          rides.map((ride) => (
            <div
              key={ride._id}
              className="
              glass
              p-6
              hover:-translate-y-1
              transition
              "
            >
              <h2 className="text-2xl font-bold mb-2">
                {ride.title}
              </h2>

              <p className="text-gray-400">
                📍 {ride.destination}
              </p>

              <p className="text-cyan-400 mt-2">
                🚀 {ride.distance || 0} KM
              </p>

              <p className="text-orange-400 mt-2">
                📅{" "}
                {ride.rideDate
                  ? new Date(
                      ride.rideDate
                    ).toLocaleDateString()
                  : "Not Set"}
              </p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}