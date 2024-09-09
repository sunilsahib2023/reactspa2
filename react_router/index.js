import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js"
import Home from "./home..js"
import Blogs from "./blogs.js";
import Contact from "./contact.js";
import NoPage from "./noPage.js";

 function App() 
 {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path ="blogs" element={<Blogs />} />
          <Route path ="contact" element={<Contact />} />
          <Route path ="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

        

