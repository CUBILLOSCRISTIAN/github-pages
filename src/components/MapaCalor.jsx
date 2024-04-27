import React from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import colombiaGeojson from "../charts/colombia.json"; // Importa el GeoJSON de los límites de los departamentos

export function MapaCalor({ temperaturas }) {
  // Define una función para obtener el color basado en la temperatura
  const getColor = (temp) => {
    // Define aquí una lógica para asignar un color basado en la temperatura
    // Por ejemplo, puedes usar una escala de color de azul a rojo
    return temp > 30
      ? "#ff0000"
      : temp > 25
      ? "#ff8000"
      : temp > 20
      ? "#ffff00"
      : "#00ff00";
  };

  // Define el estilo del GeoJSON basado en la temperatura
  const style = (feature) => {
    const tempData = temperaturas.find(
      (temp) => temp.Departamento === feature.properties.NOMBRE_DPT
    );
    const temp = tempData ? parseFloat(tempData.TemperaturaPromedio) : 0; // Obtén la temperatura promedio del departamento
    return {
      fillColor: getColor(temp),
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  // Función para mostrar la temperatura en el tooltip
  const onEachDepartamento = (departamento, layer) => {
    const tempData = temperaturas.find(
      (temp) => temp.Departamento === departamento.properties.NOMBRE_DPT
    );
    const temp = tempData ? `${tempData.TemperaturaPromedio} °C` : "SIN DATOS"; // Obtén la temperatura promedio del departamento
    layer.bindTooltip(`<strong>${departamento.properties.NOMBRE_DPT}</strong><br>Temperatura: ${temp}`);
  };

  return (
    <MapContainer
      center={[4.5709, -74.2973]}
      zoom={6}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={colombiaGeojson} style={style} onEachFeature={onEachDepartamento} />
      
    </MapContainer>
  );
}
