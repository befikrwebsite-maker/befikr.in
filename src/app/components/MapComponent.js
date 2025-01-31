import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [28.4937, 77.1458];

export default function MapComponent() {
  useEffect(() => {
    // Ensure leaflet icon URLs are set after component mounts
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    });
  }, []);

  const handleMarkerClick = () => {
    const destination = `${position[0]},${position[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  return (
    <MapContainer
  className="rounded-xl"
  center={position}
  zoom={15}
  style={{
    height: "30vh", // Default for mobile
    width: "100%", // Full width
  }}
>
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
    <Popup>Befikr HQ</Popup>
  </Marker>
</MapContainer>

  );
}
