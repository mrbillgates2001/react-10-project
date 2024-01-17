import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Product from "./pages/singleproduct/SingleProduct"

const App = () => {
	return (
		<React.Fragment>
			<Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="product" element={<Product/>}/>
        </Routes>
        <Footer/>
      </Router>
		</React.Fragment>
	);
};

export default App;
