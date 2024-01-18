import L from "leaflet";
import React, { Fragment, useEffect, useState } from "react";
import { GeoJSON, MapContainer, Marker, useMap, Tooltip } from "react-leaflet";
import MarkerIcon from "../../assets/markerIcon.png";
import myanmarGeoJSON from "./../../assets/state_region.json"; // Replace with your actual path

const TownshipLayer = ({ townshipData, selectTown, style, zoomNumber }) => {
  const map = useMap();

  useEffect(() => {
    let layer;
    if (townshipData) {
      layer = new L.GeoJSON(townshipData, { style });
      map.addLayer(layer);
      // const bounds = layer.getBounds();
      // map.fitBounds(bounds);
      // map.setZoom(zoomNumber);
    }

    return () => map.removeLayer(layer);
  }, [townshipData, selectTown]);

  return null;
};

// Custom component to set map bounds
const SetBounds = ({ geoJsonData }) => {
  const map = useMap();

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.ST) {
      if (feature.properties.ST === "Tanintharyi") {
        L.tooltip({
          permanent: true,
          direction: "center",
          className: "map-label",
        })
          .setLatLng([12.0825, 98.6586])
          .setContent("Tanintharyi")
          .addTo(map);
      } else if (feature.properties.ST === "Yangon") {
        L.tooltip({
          permanent: true,
          direction: "center",
          className: "map-label",
        })
          .setLatLng([16.8661, 96.1951])
          .setContent("Yangon")
          .addTo(map);
      } else {
        layer
          .bindTooltip(feature.properties.ST, {
            permanent: true,
            direction: "center",
            className: "map-label",
          })
          .openTooltip();
      }
    }
  };

  useEffect(() => {
    const layer = new L.GeoJSON(geoJsonData, { onEachFeature });
    const bounds = layer.getBounds();
    map.fitBounds(bounds);
    map.setMaxZoom(16);
    map.setMinZoom(4);
  }, [map, geoJsonData]);

  return (
    <GeoJSON
      data={geoJsonData}
      onEachFeature={onEachFeature}
      style={{
        color: "#2A6AA4",
        weight: "-2",
      }}
    />
  );
};

const SetTownCenter = ({ townCenter }) => {
  const map = useMap();

  useEffect(() => {
    if (townCenter) {
      map.setView(townCenter, 8);
    }
  }, [townCenter, map]);

  return null;
};

const SetStateCenter = ({ stateCenter }) => {
  const map = useMap();

  useEffect(() => {
    if (stateCenter) {
      map.setView(stateCenter, 6);
    }
  }, [stateCenter, map]);

  return null;
};

const Map = ({ state, selectTown, townshipGeoJSON }) => {
  const [regionsCenter, setRegionsCenter] = useState(null);
  const centerArray = [
    { name: "Ayeyarwady", latlng: [16.7754, 95.375] },
    { name: "Bago", latlng: [17.3368, 96.4796] },
    { name: "Chin", latlng: [22.6506, 93.6167] },
    { name: "Kachin", latlng: [25.6121, 96.2796] },
    { name: "Kayah", latlng: [19.315, 97.2559] },
    { name: "Kayin", latlng: [16.9167, 97.3667] },
    { name: "Magway", latlng: [20.1445, 94.9196] },
    { name: "Mandalay", latlng: [21.9588, 96.0891] },
    { name: "Mon", latlng: [16.2852, 97.7245] },
    { name: "Rakhine", latlng: [20.1462, 92.8987] },
    { name: "Sagaing", latlng: [22.8762, 95.6429] },
    { name: "Shan", latlng: [21.5704, 97.2382] },
    { name: "Tanintharyi", latlng: [12.0825, 98.6586] },
    { name: "Yangon", latlng: [16.8661, 96.1951] },
  ];
  useEffect(() => {
    centerArray.map((center) =>
      center.name === state.name ? setRegionsCenter(center.latlng) : null
    );
  }, [state]);

  const customIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [18, 18],
  });

  const styleFeature = (feature) => {
    if (feature.properties.ST.includes(state.name)) {
      return { color: "#ff0000", weight: 2 };
    }
    return { color: "#2A6AA4", weight: 1 };
  };

  const townStyleFeature = (feature) => {
    if (feature.properties.TS === selectTown?.township) {
      return { color: "#ff0000", weight: 2 };
    }
    if (feature.properties.ST.includes(state.name)) {
      return { color: "#2A6AA4", weight: 1 };
    }
    return { color: "#00000000", weight: 1 };
  };

  const townCenter = selectTown?.latlng
    .split(",")
    .map((coor) => parseFloat(coor));

  const zoomNumber = 10;

  const zoomPropperties = {
    doubleClickZoom: true,
    closePopupOnClick: true,
    dragging: false,
    zoomSnap: true,
    zoomDelta: true,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false,
  };

  return (
    <div className="flex">
      <MapContainer
        zoom={zoomNumber}
        {...zoomPropperties}
        style={{ background: "transparent" }}
        className="h-[60vh] sm:h-[80vh] w-full flex justify-center"
      >
        <GeoJSON data={myanmarGeoJSON} style={styleFeature} />
        {selectTown && (
          <Fragment>
            <Marker position={townCenter} icon={customIcon} id="selectMarker">
              <Tooltip id="selectTooltip" permanent>
                {selectTown?.township}
              </Tooltip>
            </Marker>
            <SetTownCenter townCenter={townCenter} />
          </Fragment>
        )}
        {!selectTown && <SetBounds geoJsonData={myanmarGeoJSON} />}
        {state && <SetStateCenter stateCenter={regionsCenter} />}
        {townshipGeoJSON && (
          <TownshipLayer
            townshipData={townshipGeoJSON}
            selectTown={selectTown}
            style={townStyleFeature}
            zoomNumber={zoomNumber}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
