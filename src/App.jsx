import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login, Dashboard } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
