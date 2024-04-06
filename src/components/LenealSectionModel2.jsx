import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function LenealSectionModel2() {
  const code_string =
    "# Seleccionar características y variable objetivo\nX = df_data[['latitud', 'longitud']]\ny = df_data['valorobservado']\n# Dividir los datos en conjuntos de entrenamiento\n #y prueba (70% para entrenamiento, 30% para prueba)\nX_train, X_test, y_train, y_test =\n train_test_split(X, y, test_size=0.3, random_state=42)\n# Crear y entrenar el modelo de regresión lineal\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n# Realizar predicciones en los datos de prueba\ny_pred = model.predict(X_test)\n# Obtener el puntaje (score) del modelo en los datos \n#de prueba\nscore = model.score(X_testy_test)\nprint(Puntaje del modelo (R^2): score)\n";

  return (
    <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6">
      <div className="circlePosition w-[200px] h-[200px] left-[55%] absolute bg-[#8326fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
      <div className="z-10 w-full p-6 sm:-mt-10 lg:w-5/12 xl:w-1/2">
        <p className="inline px-3 py-1 mb-5 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
          Explanation
        </p>
        <div className="max-w-lg text-gray-100 mb-9 sm:text-lg opacity-60">
          <ol>
            <li>1. Selects features and target variable.</li>
            <li>2. Divides the data into training and testing sets.</li>
            <li>3. Creates and trains a linear regression model.</li>
            <li>4. Makes predictions on the test data.</li>
            <li>5. Obtains the model score (R^2) on the test data.</li>
          </ol>
        </div>
      </div>
      <div className="relative z-10 hidden w-full lg:w-7/12 xl:w-1/2 sm:block">
        <div className="pr-2 mx-auto -mt-16 max-w-max">
          <div className="flex items-center justify-around">
            <div className="mt-10">
              <SyntaxHighlighter language="python" style={oneDark}>
                {code_string}
              </SyntaxHighlighter>
              <p className="inline px-3 py-1   mb-5 text-xs font-medium text-gray-50F border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
                Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
