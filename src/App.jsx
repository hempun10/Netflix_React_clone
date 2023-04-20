import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Header/Header";
import Movie from "./Components/Pages/Movies/Movie";
import Show from "./Components/Pages/Shows/show";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/shows" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
