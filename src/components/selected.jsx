import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { users } from "../assets/user.json";

export function Selected() {
  const [departamentosConMunicipios, setDepartamentosConMunicipios] = useState(
    []
  );
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.datos.gov.co/resource/sbwg-7ju4.json?$query=SELECT%0A%20%20%60codigoestacion%60%2C%0A%20%20%60codigosensor%60%2C%0A%20%20%60fechaobservacion%60%2C%0A%20%20%60valorobservado%60%2C%0A%20%20%60nombreestacion%60%2C%0A%20%20%60departamento%60%2C%0A%20%20%60municipio%60%2C%0A%20%20%60zonahidrografica%60%2C%0A%20%20%60latitud%60%2C%0A%20%20%60longitud%60%2C%0A%20%20%60descripcionsensor%60%2C%0A%20%20%60unidadmedida%60%0AWHERE%0A%20%20%60fechaobservacion%60%0A%20%20%20%20BETWEEN%20%222023-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20AND%20%222023-12-31T23%3A45%3A00%22%20%3A%3A%20floating_timestamp"
        );
        const data = await response.json();
        const departamentosConMunicipios =
          obtenerDepartamentosConMunicipios(data);
        setDepartamentosConMunicipios(departamentosConMunicipios);
        const departamentos = Object.keys(departamentosConMunicipios);
        setDepartamentos(departamentos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchData();
  }, []);

  // Función para manejar el cambio en el select de departamentos
  const handleDepartamentoChange = (event) => {
    const selectedDept = event.target.value;
    setSelectedDepartamento(selectedDept);
    if (!selectedDept) {
      return;
    }
    const municipios = departamentosConMunicipios[selectedDept.toUpperCase()];
    setMunicipios(municipios);
  };

  function obtenerMunicipiosPorDepartamento(data, departamento) {
    const municipios = [];
    data.forEach((objeto) => {
      if (objeto.departamento === departamento) {
        municipios.push(objeto.municipio);
      }
    });
    return municipios;
  }

  function obtenerDepartamentosConMunicipios(data) {
    const departamentos = {};
    data.forEach((objeto) => {
      const departamento = objeto.departamento;
      const municipio = objeto.municipio;
      if (!(departamento in departamentos)) {
        departamentos[departamento] = []; // Inicializamos el arreglo de municipios si el departamento no existe aún
      }
      if (!departamentos[departamento].includes(municipio)) {
        departamentos[departamento].push(municipio); // Agregamos el municipio al arreglo si no está presente
      }
    });
    return departamentos;
  }

  return (
    <div className="p-2 flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Select departamento"
        className="h-full"
        value={selectedDepartamento}
        onChange={handleDepartamentoChange}
      >
        {departamentos.map((departamento) => (
          <SelectItem key={departamento} value={departamento}>
            {departamento}
          </SelectItem>
        ))}
      </Select>

      <Select
        isDisabled={!selectedDepartamento}
        label="Select municipio"
        className="h-full"
        value={selectedMunicipio}
        onChange={(e) => setSelectedMunicipio(e.target.value)}
      >
        {municipios.map((municipio) => (
          <SelectItem key={municipio} value={municipio}>
            {municipio}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
