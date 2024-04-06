import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
import { Code } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function LinealModelCharts() {
  const code_string =
    "# Hacer una gráfica de dispersión entre los valores estimados y los valores reales de prueba\nplt.scatter(y_test, y_pred)\nplt.xlabel('Valor Real')\nplt.ylabel('Valor Estimado (Linear Model)')\nplt.title('Valores Estimados vs. Valores Reales')\nplt.show()";

  return (
        <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6">
          <div className="circlePosition w-[200px] h-[200px] left-[10%] absolute bg-[#8326fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
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
                  1. Creates a scatter plot. It plots the true target values ("y_test") against the predicted target values ("y_pred").
                     Each point on the plot represents a single data point from the test dataset.
                </li>
                <li>
                  2. Sets the label for the x-axis of the plot. It labels the x-axis as "Valor Real", indicating the true target values.
                     Also sets the label for the y-axis of the plot. It labels the y-axis as "Valor Estimado (Linear Model)", indicating
                     the predicted target values generated by a linear model. 
                </li>
                <li>
                  3. Sets the title of the plot as "Valores Estimados vs. Valores Reales", providing a clear indication of what the plot 
                     represents.
                </li>
                <li>
                  4. Displays the plot on the screen. It shows the scatter plot with the true target values on the x-axis and the 
                     predicted target values on the y-axis, along with axis labels and a title.
                </li>
              </ol>
              <p>
                The purpose of this code is to create a scatter plot to visualize the relationship between the true target 
                values and the predicted target values generated by a linear model. It provides a visual representation of 
                how well the model's predictions match the actual values.
              </p>
            </div>
          </div>
        </div>
  );
}