import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login, Dashboard, Settings } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
