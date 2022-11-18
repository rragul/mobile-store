import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMobile from "./containers/add mobile/AddMobile";
import ViewMobile from "./containers/viewmobiles/ViewMobile";
import Navbar from "./containers/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ViewMobile />} />
          <Route path="addMobile" element={<AddMobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
