import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Products from "./pages/Products"
import Pricing from "./pages/Pricing"
import Support from "./pages/Support"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

      </Routes>

      {/* <Landing />
      <Signup />
      <About />
      <Products />
      <Support />
      <Pricing /> */}

    </>
  )
}

export default App
