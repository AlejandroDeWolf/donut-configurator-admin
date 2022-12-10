import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login, Dashboard, Profile } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
