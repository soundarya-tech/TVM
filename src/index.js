import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Cities from './components/Cities';
import Explore from './components/Explore';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Post from './components/Post';
import Posts from './components/Posts';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/blog" element={<Blog />}>
        
        
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
reportWebVitals();