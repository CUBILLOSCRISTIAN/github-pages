import React from "react";
import { NavBar } from "../components/NavBar";

import { CardCharts } from "../components/Card";
import { Card } from "@nextui-org/react";


export function Charts() {
  return (
    <div className="relative">
      <NavBar />
      <div className="absolute inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="circlePosition w-[200px] h-[200px] left-[60%] absolute bg-[#eb26fd] rounded-[100%] z-1 blur-[80px] overflow-x-hidden"></div>
      <div className="circlePosition w-[200px] h-[200px] top-[60%] left-[10%] absolute bg-[#eb26fd] rounded-[100%] z-1 blur-[100px] overflow-x-hidden"></div>
      {/* Contenido que se desplaza */}
      <div className="p-4">
        <div className="flex flex-wrap justify-center mx-auto">
          <CardCharts />
        </div>
      </div>
    </div>
  );
}
