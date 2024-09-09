import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import  Home from "./home.js";
import  About from "./about.js"
import  Product from "./product.js"


export default function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home text="Home" />} />
          <Route path="product" element={<Product  text = "Product" />} />
          <Route path="about" element={<About  text = "About" />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
