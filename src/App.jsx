import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Contact, Error, Pricing, ProductDetails } from './pages'
import Product from './pages/Product'
import About from './pages/About'
import { ScrollContext } from './context/ScrollContext'
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // You can use 'auto' instead of 'smooth' for instant scrolling
    });
  };
  return (
    <ScrollContext.Provider value={{scrollToTop}}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:proId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ScrollContext.Provider>
  )
}

export default App
