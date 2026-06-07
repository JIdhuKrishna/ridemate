import { useState } from "react";

export default function FuelCalculator() {
  const [distance, setDistance] =
    useState("");

  const [mileage, setMileage] =
    useState("");

  const fuelPrice = 103;

  const fuelNeeded =
    distance && mileage
      ? distance / mileage
      : 0;

  const cost =
    fuelNeeded * fuelPrice;

  return (
    <div className="glass p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        ⛽ Fuel Calculator
      </h2>

      <input
        className="
        w-full
        p-3
        rounded-xl
        bg-white/10
        mb-4
        outline-none
        "
        placeholder="Distance KM"
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
        mb-4
        outline-none
        "
        placeholder="Mileage KM/L"
        value={mileage}
        onChange={(e) =>
          setMileage(e.target.value)
        }
      />

      <div className="grid grid-cols-2 gap-4">

        <div className="glass p-4">
          <p className="text-gray-400">
            Fuel Needed
          </p>

          <h3 className="text-2xl font-bold">
            {fuelNeeded.toFixed(2)} L
          </h3>
        </div>

        <div className="glass p-4">
          <p className="text-gray-400">
            Estimated Cost
          </p>

          <h3 className="text-2xl font-bold text-orange-400">
            ₹{cost.toFixed(0)}
          </h3>
        </div>

      </div>

    </div>
  );
}