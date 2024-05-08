import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import TrendingMovies from "./components/TrendingMovies"
import RecommendedMovies from "./components/RecommendedMovies"
import RecentMovies from "./components/RecentMovies";
import UpcommingMovies from "./components/UpcommingMovies";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/trending" element={<TrendingMovies />} />
          <Route path="/recommended" element={<RecommendedMovies />} />
          <Route path="/recents" element={<RecentMovies />} />
          <Route path="/upcomming" element={<UpcommingMovies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
