import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function RideMap() {
  const position = [10.5276, 76.2144]; // Kodungallur

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <MapContainer
        center={position}
        zoom={10}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            🏍 RideMate Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}