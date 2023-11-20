import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import MovieList from "./page/MoiveList"
import Header from "./components/Header"
import MovieDetail from "./page/MovieDetail"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App