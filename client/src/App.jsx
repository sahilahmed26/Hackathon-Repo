import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Search } from "./components/Search";
import { DashBoard } from "./pages/DashBoard";
import TicketList from "./components/Tables/TicketsList";
import { FinalData } from "./data/dummyData";

function App() {

  

  return (
    <div className="App">
      {/* <Search/> */}
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About/>}  />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/tickets" element={<TicketList data={FinalData}/>} />
      </Routes>
    </div>
  );
}

export default App;
