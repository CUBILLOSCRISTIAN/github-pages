import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
import { Code } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function LinealModelValues() {
  const code_string =
    "# Imprimir los valores reales junto con sus valores predichos\nprint('Valor Real\tValor Predicho (Lineal)')\nfor real, pred in zip(y_test, y_pred):\n    print(f'{real}\t\t{pred}')";

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
                  1. Prints a header indicating the columns of the output. It consists of two parts separated by a tab character
                     ('\t'): "Valor Real" and "Valor Predicho (Lineal)". This header will help to interpret the printed values.
                </li>
                <li>
                  2. iterates through pairs of real and predicted values using "the zip()" function. The "zip()" function combines 
                     elements from two or more iterables (in this case, "y_test" and "y_pred") into tuples. Then prints each pair 
                     of real and predicted values. It uses f-strings to format the output. Each line printed contains the real 
                     value followed by the predicted value, separated by a tab ('\t'). 
                </li>
              </ol>
              <p>
                The purpose of this code is to prints the real and predicted values side by side in tabular format, making it easy 
                to compare them. It provides a straightforward way to examine how well the model's predictions align with the actual 
                values.
              </p>
            </div>
          </div>
        </div>
  );
}