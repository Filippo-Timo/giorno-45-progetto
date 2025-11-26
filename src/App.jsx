import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter';
import UnderNavbar from './components/UnderNavbar';
import MyGallery from './components/MyGalley';
import TVshows from './components/TVshows'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/movieDetails';



function App() {

  return (
    <BrowserRouter>
      <MyNavbar />
      <UnderNavbar />
      <Routes>
        <Route element={<TVshows />} path="/TVshows" />
        <Route element={<MovieDetails />} path="/MovieDetails/:MovieId" />
        <Route element={
          <>
            <MyGallery movieTitle="Star Wars" sectionTitle="Trending Now" />
            <MyGallery movieTitle="Pokemon" sectionTitle="Watch it Again" />
            <MyGallery movieTitle="Lord of the rings" sectionTitle="New Releases" />
          </>} path="/" />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
