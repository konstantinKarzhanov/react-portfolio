import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { MainContextProvider } from "./context/MainContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

// pages
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

// styles
import "./App.css";

function App() {
  return (
    <div className="container container--px">
      <Header children={<Navbar />} />
      <MainContextProvider>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="home" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainContextProvider>
    </div>
  );
}

export default App;
