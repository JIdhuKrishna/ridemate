import { useState } from "react";
import api from "../services/api";

export default function RideForm({
  onCreate,
}) {
  const [title, setTitle] =
    useState("");

  const [destination,
    setDestination] =
    useState("");

  const submitHandler = async (
    e
  ) => {
    e.preventDefault();

    await api.post("/rides", {
      title,
      destination,
    });

    setTitle("");
    setDestination("");

    onCreate();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="
      glass
      p-6
      mb-6
    "
    >
      <input
        placeholder="Ride Name"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) =>
          setDestination(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button>
        Add Ride
      </button>
    </form>
  );
}