import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { Selected } from "./selected";
import ReactECharts from "echarts-for-react";

// Import the options for the charts
import { optionsGauge } from "../charts/OptionsGauge.jsx";
import { optionMapCalendar } from "../charts/OptionsMapCalendar.jsx";

import { MapaCalor } from "../components/MapaCalor";
import temperaturas from "../charts/DatosDepartamentos.json";

export function CardCharts() {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-12 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl font-bold mb-4">
              Disculpa, Esta Página Está en Desarrollo
            </h1>
            <p className="text-sm mb-4">¡Gracias por visitarnos!</p>
            <p className="text-sm mb-4">
              Nos encontramos en pleno proceso de desarrollo para mejorar tu
              experiencia en nuestro sitio web. Estamos trabajando arduamente
              para completar todas las características y funcionalidades que te
              ofreceremos pronto.
            </p>
            <p className="text-sm mb-4">
              Te pedimos disculpas por cualquier inconveniente que esto pueda
              causarte. Nuestro equipo está dedicado a brindarte la mejor
              experiencia posible, y esperamos que disfrutes del resultado
              final.
            </p>
            <p className="text-sm mb-4">
              ¡Vuelve pronto para ver la versión completa y mejorada de nuestro
              sitio web!
            </p>
            <p className="text-sm mb-4">
              ¡Gracias por tu paciencia y comprensión!
            </p>
          </div>
        </CardHeader>
      </Card>
      {/* Card */}
      <Card
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-7 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Select all the options to generate the graphs.
          </p>
        </CardHeader>
        <div className="p-10">
          <Selected />
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
            Average temperature
          </p>
        </CardHeader>
        <div className="p-7">
          <ReactECharts option={optionsGauge} />
        </div>
      </Card>
      {/* other card */}

      <Card
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-12 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Heatmap</p>
          <h4 className="text-white font-medium text-large">
            Calendar Heatmap
          </h4>
        </CardHeader>
        <div className="p-7">
          <ReactECharts option={optionMapCalendar} />
        </div>
      </Card>
      {/* other card */}
      <Card
        isFooterBlurred
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-5 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Heatmap</p>
          <h4 className="text-white font-medium text-large">
            Calendar Heatmap
          </h4>
        </CardHeader>
        <div className="p-7">
        <MapaCalor temperaturas={temperaturas} />
        </div>
      </Card>

      {/* other card */}
      <Card
        isFooterBlurred
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-7 h-[300px]"
        shadow="sm"
      ></Card>
    </div>
  );
}
