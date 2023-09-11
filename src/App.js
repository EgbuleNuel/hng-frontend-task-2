import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import "./index.css"; // Import your styles here

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/error" component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
