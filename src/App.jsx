import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Home from "./pages/Home"


export const containerVariant = {
  onscreen: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const itemVariant = {
  offscreen: {
    opacity:0,
    translateY:20
  },
  onscreen: {
    opacity:1,
    translateY:0
  }
}


function App() {


  return (
    <div className="font-roboto flex flex-col gap-[20px]">
    <Header />
    <Home />
    <Footer />
    </div>
  )
}

export default App
