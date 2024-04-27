import { Card, CardHeader } from "@nextui-org/react";
import ReactECharts from "echarts-for-react";
import React from "react";

// Import the options for the charts
import { optionsGauge } from "../charts/OptionsGauge.jsx";
import { optionTemeperature } from "../charts/OptionsTemperature.jsx";

import temperaturas from "../charts/DatosDepartamentos.json";
import { MapaCalor } from "../components/MapaCalor";

export function CardCharts() {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-1 px-8">
      {/* Card */}
      <Card
        isFooterBlurred
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-12 h-[50px]"
        shadow="sm"
      >
        <div className="p-3 center flex items-center justify-center">
          {" "}
          {/* Añade clases para flexbox */}
          <h3 className="text-white font-medium text-large">
            Temperature graphs in Colombia
          </h3>
        </div>
      </Card>

      {/* other card */}
      <Card
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-5 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Average temperature in Colombia
          </p>
        </CardHeader>
        <div className="p-7">
          <ReactECharts option={optionsGauge} />
        </div>
      </Card>
      {/* other card */}

      <Card
        isFooterBlurred
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-12 h-[500px]" // Ajuste de la clase para altura relativa
        shadow="sm"
      >
        <div className="w-full h-full p-5">
          <ReactECharts
            option={optionTemeperature}
            style={{ width: "100%", height: "100%" }} // Establecer anchura y altura al 100%
          />
        </div>
      </Card>

      <Card
        isFooterBlurred
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-12 h-[500px]"
        shadow="sm"
      >
        <div className="pb-7">
          <MapaCalor temperaturas={temperaturas} />
        </div>
      </Card>
    </div>
  );
}
