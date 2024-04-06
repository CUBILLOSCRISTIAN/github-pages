import React from "react";
import { SectionModel } from "../components/SectionModel";
import { LinealModelCharts } from "../components/LinealModelCharts";
import { LinealModelValues } from "../components/LinelModelValues";
import { LenealSectionModel2 } from "../components/LenealSectionModel2";
import { SectionModelBody1 } from "../components/SectionModelBody1";
import { LinealCoeficients } from "../components/LinealCoeficients";

export function Model() {
  return (
    <section>
      <SectionModel />
      <div className="container px-4 mx-auto max-w-8xl">
        <SectionModelBody1 />
        <LenealSectionModel2 />
        <LinealModelCharts />
        <br />
        <LinealCoeficients />
      </div>
    </section>
  );
}
