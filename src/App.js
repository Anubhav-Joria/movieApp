import React from "react";
import Shows from "./components/Shows/Shows";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import Preview from "./components/Preview";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Completed from "./components/Completed";


function App() {

  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState({});
  const [movieName, setmovieName] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [moviePremiered, setMoviePremierd] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [movieRating, setMovieRating] = useState("");

 

  const fetchData = async () => {
    let res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    let parseRes = await res.json();
    setData(parseRes);
  
  };

  const handlePreview = (obj) => {
  
    setMovieData(obj);
    setmovieName(obj.name);
    setMoviePremierd(obj.premiered)
    setMovieSummary(obj.summary)
    setMovieImage(obj.image.original);
    setMovieRating(obj.rating.average)
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <BrowserRouter>
      <div>
        <Navbar />
       
        <Routes>
          <Route path="/" element={ <Shows data={data} handlePreview= {handlePreview} /> } />
          <Route path="/preview" element={ <Preview rating= {movieRating} name = {movieName} summary = { movieSummary} image={movieImage} premiered = {moviePremiered} />} /> 
          <Route path="/booking" element={ <Booking name = {movieName}/>} /> 
          <Route path="/completed" element={ <Completed name = {movieName}/>} /> 
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
