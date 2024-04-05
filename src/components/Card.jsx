import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { Selected } from "./selected";
import ReactECharts from "echarts-for-react";

// Import the options for the charts
import { optionsGauge } from "../charts/OptionsGauge.jsx";
import { optionMapCalendar } from "../charts/OptionsMapCalendar.jsx";

export function CardCharts() {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {/* Card */}
      <Card
        isBlurred
        className="border-none bg-background/80 dark:bg-default-100/25 col-span-12 sm:col-span-7 h-[300px]"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start" >
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
      ></Card>

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
