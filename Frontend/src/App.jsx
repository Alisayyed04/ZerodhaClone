
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Products from "./pages/Products"
import Pricing from "./pages/Pricing"
import Support from "./pages/Support"
import OTP from "./pages/OTP"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/otp" element={<OTP />} />

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
