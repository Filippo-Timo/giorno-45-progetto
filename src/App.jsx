import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter';
import UnderNavbar from './components/UnderNavbar';
import MyGallery from './components/MyGalley';


function App() {

  return (
    <>
      <MyNavbar />
      <UnderNavbar />
      <MyGallery movieTitle="Star Wars" sectionTitle="Trending Now" />
      <MyGallery movieTitle="Lord of the rings" sectionTitle="Watch it Again" />
      <MyGallery movieTitle="Pokemon" sectionTitle="New Releases" />
      <MyFooter />
    </>
  )
}

export default App
