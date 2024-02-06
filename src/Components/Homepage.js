import React from 'react';
import './Homepage.css';
import bg2 from '../bg2.jpg';
import bg4 from '../bg4.webp';
import pastry from '../pastry.jpg';
import logotop from '../logotop.PNG';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/usertable");
  }
  const handleAdmin = () => {
    navigate("/login")
  }
  return ( <>

    <title>Home Page</title>
    <section id="hero">
      <div className="hero-content">
        <h1><img src={logotop} className="logo"></img><u>Welcome to the Elite Wholesale Pastry Shop!</u><img src={logotop} className="logo"></img></h1>
        <h2>Delicious Treats Made with Love</h2>
        <p>Discover a wide selection of freshly baked goods.</p>
        <a className="btn1" onClick={handleClick}>
          View Our Products!</a>
          <a className="btn1" onClick={handleAdmin}>
          Admin Login</a>
      </div>
    </section>
    <section id="featured-products">
      <h2><u>Featured Products</u></h2>
      <br />
      
      <div className="product">
        <img src={bg2} alt="Product 1" className="img1" />       
        <br />
        <br />
        <h3 className="texts1">Flavours</h3>
        
        <p className="abc1">
          Baking the world a happier place, one order at a time!
        </p>
      </div><br /><br />
      <div className="product">
        <img src={pastry} alt="Product 2" className="img2" />
        <br />
        <br />
        <h3 className="texts2">Pastry</h3>
        
        <p className="abc2">In a world of chaos, find solace in pastries!</p>
      </div><br /><br />
      <div className="product">
        <img src={bg4} alt="Product 3" className="img3" />
        <br />
        <br />
        <h3 className="texts">Cookies</h3>
        
        <p className="abc3">Spreading sweetness, one cookie at a time!</p>
      </div>
    </section>
    <footer>
      <p>© 2023 Bakery Website. All rights reserved.<br />Contact : 9876556789</p>
    </footer>
  </>
);
}
 
export default Home;
    