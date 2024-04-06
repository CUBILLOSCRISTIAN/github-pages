import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
import { LinealModelCharts } from "../components/LinealModelCharts";
import { LinealModelValues } from "../components/LinealModelValues";
import { Code } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Model() {
  const codeString =
    "# Seleccionar características y variable objetivo \nX = df_data[['latitud', 'longitud']] \ny = df_data['valorobservado']";
  const code_string2 =
    "# Realizar la solicitud GET a la API\nresponse = requests.get(url)\n\n# Verificar si la solicitud fue exitosa (código 200)\nif response.status_code == 200:\n    # Convertir la respuesta JSON a un DataFrame de Pandas\n    data = response.json()\n    df_data = pd.DataFrame(data)\n    # Imprimir las primeras filas del DataFrame\n    display(df_data.head())\nelse:\n    print('Error al obtener los datos de la API')\n\n# Seleccionar características y variable objetivo\nX = df_data[['latitud', 'longitud']]\ny = df_data['valorobservado']";

  return (
    <section>
      <SectionModel />
      <div className="container px-4 mx-auto max-w-8xl">
      <LinealModelCharts />
      <LinealModelValues />  
      </div>
    </section>
  );
}
