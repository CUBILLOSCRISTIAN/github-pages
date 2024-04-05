import React from "react";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div>
      <div className="relative z-10 h-screen overflow-y-scroll">
        <Home />
      </div>
    </div>
  );
}
