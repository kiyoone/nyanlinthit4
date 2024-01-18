import { MapContainer, GeoJSON, useMap, Marker } from "react-leaflet";
import React, { useEffect } from "react";
import myanmarGeoJSON from "./../../assets/state_region.json"; // Replace with your actual path
import MarkerIcon from "../../assets/markerIcon.png";
import L from "leaflet";

const SelectMap = ({ state, selectTown }) => {
  const customIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const styleFeature = (feature) => {
    if (feature.properties.ST.includes(state.name)) {
      return { color: "#ff0000" }; // Red for Yangon
    }
    return { color: "#0000ff" }; // Blue for other states
  };

  const townCenter = selectTown?.latlng
    .split(",")
    .map((coor) => parseFloat(coor));
  console.log(townCenter);

  return (
    <div className="flex ">
      <MapContainer
        zoom={selectTown ? 12 : 6}
        style={{ background: "transparent" }}
        className=" h-[80vh] w-full flex justify-center "
        center={townCenter}
        zoomControl={true}
      >
        <GeoJSON data={myanmarGeoJSON} style={styleFeature} />

        <Marker position={townCenter} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default SelectMap;
