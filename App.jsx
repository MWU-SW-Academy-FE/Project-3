import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home.jsx"
import Header from "./components/Header.jsx"
import MovieList from "./page/Movielist.jsx"
import Moviedetail from "./page/Moviedetail.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="movie/:id" element={<Moviedetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App