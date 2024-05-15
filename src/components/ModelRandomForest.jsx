import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function LenealSectionModel2() {
  const code_string =
    "# Crear y entrenar el modelo de Random Forest\nrf_model = RandomForestRegressor(random_state=42)\nrf_model.fit(X_train, y_train)\n# Realizar predicciones en los datos de prueba\ny_pred_rf = rf_model.predict(X_test)\n# Score del modelo Random Forest en los datos de prueba\nscore_rf = rf_model.score(X_test, y_test)";

  return (
    <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6">
      <div className="circlePosition w-[200px] h-[200px] left-[55%] absolute bg-[#8326fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
      <div className="z-10 w-full p-6 sm:-mt-10 lg:w-5/12 xl:w-1/2">
        <p className="inline px-3 py-1 mb-5 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
          Explanation
        </p>
        <h1 className="mt-4 mb-5 text-4xl font-medium text-white font-heading  xl:text-11xl">
          This code snippet performs the following tasks:{" "}
        </h1>
        <div className="max-w-lg text-gray-100 mb-9 sm:text-lg opacity-60">
          <ol>
            <li>1. Initializes a Random Forest Regressor model object named rf_model with a random state set to 42. "RandomForestRegressor" is a class from the scikit-learn library used for regression tasks.</li>
            <li>2. Trains the Random Forest model ("rf_model") using the training data "X_train" and the corresponding target values "y_train".</li>
            <li>3. Predicts the target values for the test data "X_test" using the trained Random Forest model. The predicted values are stored in the variable "y_pred_rf".</li>
            <li>4. Calculates the score of the Random Forest model on the test data. The "score" method in scikit-learn calculates the coefficient of determination R^2 of the prediction. R^2 is a measure of how well the predictions match the actual values. The calculated score is stored in the variable "score_rf".</li>
          </ol>
          <p>
            The purpose of this code is to initialize, train, and evaluate a Random Forest Regressor model. It then uses the trained model to make predictions on unseen test data and calculates the model's performance score on that test data.
          </p>
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
