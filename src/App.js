import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainContextProvider } from "./context/MainContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
