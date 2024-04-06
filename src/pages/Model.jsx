import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
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
        <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6">
          <div className="circlePosition w-[200px] h-[200px] left-[10%] absolute bg-[#8326fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
          <div className="relative z-10 hidden w-full lg:w-7/12 xl:w-1/2 sm:block">
            <div className="pr-2 mx-auto -mt-16 max-w-max">
              <div className="flex items-center justify-around">
                <div className="mt-10">
                  <SyntaxHighlighter language="python" style={oneDark}>
                    {code_string2}
                  </SyntaxHighlighter>
                  <p className="inline px-3 py-1   mb-5 text-xs font-medium text-gray-50F border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
                    Python
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 w-full p-6 sm:-mt-10 lg:w-5/12 xl:w-1/2">
            <p className="inline px-3 py-1 mb-5 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
              Explanation
            </p>
            <h1 className="mt-4 mb-5 text-4xl font-medium text-white font-heading  xl:text-11xl">
              This code snippet performs the following tasks:{" "}
            </h1>
            <div className="max-w-lg text-gray-100 mb-9 sm:text-lg opacity-60">
              <ol>
                <li>
                  1. Constructs a URL pointing to a specific API endpoint (url
                  variable).
                </li>
                <li>
                  2. Sends a GET request to the API using the constructed URL.
                </li>
                <li>
                  3. Checks if the request was successful (status code 200).
                </li>
                <li>
                  4. If successful, converts the JSON response into a Pandas
                  DataFrame (df_data).
                </li>
              </ol>
              <p>
                The purpose of this code is to fetch data from a web API, parse
                it into a DataFrame, and display a preview of the retrieved
                data. It utilizes the requests library to make HTTP requests and
                pandas to handle and manipulate the data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
