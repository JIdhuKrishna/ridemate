import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

export default function MapPreview() {
  const position = [10.155, 76.2]; // Kodungallur

  return (
    <div className="glass p-4">
      <h2 className="text-2xl font-bold mb-4">
        🗺 Route Map
      </h2>

      <div
        style={{
          height: "400px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={position}
          zoom={10}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              📍 Kodungallur
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </div>
  );
}