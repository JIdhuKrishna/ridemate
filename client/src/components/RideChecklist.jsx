import { useState } from "react";

export default function RideChecklist() {
  const [items, setItems] = useState({
    helmet: false,
    gloves: false,
    documents: false,
    raincoat: false,
    powerbank: false,
    firstaid: false,
  });

  const toggleItem = (key) => {
    setItems({
      ...items,
      [key]: !items[key],
    });
  };

  return (
    <div className="glass p-6">

      <h2 className="text-2xl font-bold mb-6">
        🎒 Ride Checklist
      </h2>

      {Object.keys(items).map((key) => (
        <label
          key={key}
          className="
          flex
          items-center
          gap-3
          mb-4
          cursor-pointer
          "
        >
          <input
            type="checkbox"
            checked={items[key]}
            onChange={() =>
              toggleItem(key)
            }
          />

          <span className="capitalize">
            {key}
          </span>
        </label>
      ))}
    </div>
  );
}