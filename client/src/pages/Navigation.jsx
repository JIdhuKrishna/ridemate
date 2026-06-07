import RideMap from "../components/RideMap";

export default function Navigation() {
  return (
    <div className="p-8">
      <h1
        className="
        text-5xl
        font-bold
        text-white
        mb-8
      "
      >
        🗺 Navigation
      </h1>

      <RideMap />
    </div>
  );
}