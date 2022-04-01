import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Trending from "./pages/trending/Trending.js";
import Search from "./pages/search/Search";
import { Container } from "@mui/material";
import SimpleBottomNavigation from "./components/mainNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container >
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
