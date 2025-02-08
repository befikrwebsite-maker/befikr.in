import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [28.4937, 77.1458];

export default function Aaldnasikfbhasjkf() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Prevent duplicate map container error
    const mapContainer = document.querySelector(".leaflet-container");
    if (mapContainer) {
      mapContainer._leaflet_id = null;
    }

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    });

    setIsMounted(true);
  }, []);

  const handleMarkerClick = () => {
    const destination = `${position[0]},${position[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  return isMounted ? (
    <MapContainer
      key={isMounted ? "map-rendered" : "map-pending"}
      className="rounded-xl"
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>Befikr HQ</Popup>
      </Marker>
    </MapContainer>
  ) : null;
}
