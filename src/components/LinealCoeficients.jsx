import React from "react";
import { NavBar } from "../components/NavBar";
import { SectionModel } from "../components/SectionModel";
import { Code } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function LinealCoeficients() {
  const code_string =
    '#Obtener los coeficientes y el término de \n#intercepción del modelo\ncoeficientes = model.coef_\nintercepto = model.intercept_\nprint("Coeficientes:", coeficientes)\nprint("Intercepto:", intercepto)\n#OUTPUT\n#Coeficientes: [ 0.70704446 -2.64271734]\n#Intercepto: -186.92337498207115';

  return (
    <div className="flex flex-wrap justify-between pt-20 sm:pl-20 sm:-m-6 pb-5">
      <div className="circlePosition w-[200px] h-[200px] left-[10%] absolute bg-[#8326fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
      <div className="relative z-10 hidden w-full lg:w-7/12 xl:w-1/2 sm:block">
        <div className="pr-2 mx-auto -mt-16 max-w-max">
          <div className="flex items-center justify-around">
            <div className="mt-10">
              <SyntaxHighlighter language="python" style={oneDark}>
                {code_string}
              </SyntaxHighlighter>
              <p className="inline px-3 py-1   mb-10 text-xs font-medium text-gray-50F border-2 rounded-lg font-heading sm:text-sm opacity-40 border-white/10">
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
        <div className="max-w-lg text-gray-100 mb-9 sm:text-lg opacity-60">
          <ol>
            <li>1. Obtains the coefficients of the model:</li>
            <li>2. Obtains the intercept term of the model:</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
