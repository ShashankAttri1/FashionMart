import React from 'react';
import Fashionmartlogo from '../originalfashionlogo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IndianFlag from "../Indian-Flag-PNG.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Dl1 from '../Assets/dl1.webp';
import Dl2 from '../Assets/dl2.webp';
import Dl3 from '../Assets/dl3.webp';
import Dl4 from '../Assets/dl4.webp';
import Dl5 from '../Assets/dl5.webp';
import Dl6 from '../Assets/dl6.webp';
import Dl7 from '../Assets/dl7.webp';
import Dl8 from '../Assets/dl8.webp';
import Dl9 from '../Assets/dl9.webp';
import Dl10 from '../Assets/dl10.webp';

const Header = () => {


  return (
    <>
      <nav className='navbar'>
        <div className='fashionmartlogo'>
          <img src={Fashionmartlogo} className='fashionlogo' alt='logo'></img>
        </div>
        <div className='nav'>
          <div>
            <a href='/Home'>Home</a>
          </div>
          <div className='delivery'>
            <div className='locationlogo'>
              <LocationOnOutlinedIcon className='locationLogoicon' sx={{ fontSize: "24px" }} /></div>
            <div className='locationoption'>
              <div className='locationtop'><a href='/Delivery'>Delivery</a></div>
              <div className='locationbottom'><a href='/Delivery'>to india</a></div>

            </div>

          </div>
          <div>
            <a href='/Return'>Return & Order</a>
          </div>
          <div className='carts'>
            <div className="cartlogo">
              <ShoppingCartIcon className='cartimg' sx={{ fontSize: "22px" }} />
            </div>
            <div className="carttop">
              <a href='/Cart'> Cart</a>
            </div>
          </div>
          <div className="language">
            <div className="languagelogos">
              <img src={IndianFlag} alt="imgflag" className='languagelogo'></img>
            </div>
            <div className="languageoption">

              <select className='langoption'>
                <option>EN</option>
                <option>हिन्दी</option>
                <option>বাংলা</option>
                <option>ಕನ್ನಡ</option>
                <option>తెలుగు</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>मराठी</option>
              </select>

            </div>
          </div>
          <div className="loginbox">
            <div className="loginicon"><AccountCircleOutlinedIcon className="loginlogo" sx={{ fontSize: "18px" }} /></div>
            <div className="login"><a href='/login'>Login</a></div>
          </div>
        </div>
        <div className='searchbar'>
          <select className='options'>
            <option>All</option>
            <option>Footwear</option>
            <option>Top wear</option>
            <option>Bottom wear</option>
            <option>Ethnic wear</option>
            <option>Winter wear</option>
            <option>Summer wear</option>
            <option>Accessories</option>
            <option>Sports & Fitness Store</option>
          </select>
          <input className='search-input' placeholder='Search for fashion'></input>
          <div className='searchIcon'><SearchIcon className='searchicon1' /></div>
        </div>
      </nav>
      <div className='nav-box2'>
        <div className="box2a">
          <div><img src={Dl1} className='imgbox2' alt="img"></img></div>
          <div><a href='/Delivery'>Top Offer</a></div>
        </div>
        <div className="box2b">
          <div><img src={Dl2} className='imgbox3' alt="img"></img></div>
          <div><a href='/Delivery'>Mobiles & Tables</a></div>
        </div>
        <div className="box2c">
          <div><img src={Dl3} className='imgbox4' alt="img"></img></div>
          <div><a href='/Delivery'>TVs & Appliances</a></div>
        </div>
        <div className="box2d">
          <div><img src={Dl4} className='imgbox5' alt="img"></img></div>
          <div><a href='/Delivery'>Electronics</a></div>  
        </div>
        <div className="box2e">
          <div><img src={Dl5} className='imgbox6' alt="img"></img></div>
          <div><a href='/Delivery'>Fashion</a></div>
        </div>
        <div className="box2f">
          <div><img src={Dl6} className='imgbox7' alt="img"></img></div>
          <div><a href='/Delivery'>Beauty</a></div>
        </div>
        <div className="box2g">
          <div><img src={Dl7} className='imgbox8' alt="img"></img></div>
          <div><a href='/Delivery'>Home & Kitchen</a></div>
        </div>
        <div className="box2h">
          <div><img src={Dl8} className='imgbox9' alt="img"></img></div>
          <div><a href='/Delivery'>Furniture</a></div>
        </div>
        <div className="box2i">
          <div><img src={Dl9} className='imgbox10' alt="img"></img></div>
          <div><a href='/Delivery'>Travel</a></div>
        </div>
        <div className="box2j">
          <div><img src={Dl10} className='imgbox11' alt="img"></img></div>
          <div><a href='/Delivery'>Grocery</a></div>
        </div>

      </div>

    </>
  );
}

export default Header;
