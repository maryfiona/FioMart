import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import Explore from '../src/Components/Explore'
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeadSection"


const App = () => {
  return (
    <div>
     
      <Header/>
      <Navbar/>
       <HeroSection/>
      <Product/>
      <Explore />
      <Footer/>
    </div>
  )
}

export default App