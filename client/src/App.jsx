import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Search } from "./components/Search";
import { DashBoard } from "./pages/DashBoard";

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <Search/> */}
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About/>}  />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
