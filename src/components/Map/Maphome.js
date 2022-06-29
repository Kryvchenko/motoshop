import React from "react";
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Map.css";

export default function Maphome() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDVpTj0S8U2WRNf_wmdz3vyMRTfmCY4R0A",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: 32.2958929284, lng: -64.7876920201 }),
    []
  );
  return (
    <GoogleMap zoom={19} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

// process.env.REACT_APP_GOOGLE_MAPS_API_KEY
