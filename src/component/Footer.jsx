import React from 'react';
import Fashionmartlogo from '../originalfashionlogo.png';
import Contact from './Contact';


const Footer = () => {
  return (
    <div className='footer'>
      <Contact/>
      <div className="footbox1">Back To Top</div>
      <div className="footbox2">
        <div className="footboxline1">
        <ul>
          <p>Get to Know Us</p>
          <a href='/about us'>About Us</a>
          <a href='careers'>Careers</a>
           <a href='/releases'> Press Releases</a>
          <a href='/science'>Fashionmart Science</a>
        </ul>
        </div>
        <div className="footboxline2"> 
          <ul>
          <p>Connect with Us</p>
          <a href='facebook'>Facebook</a>
          <a href='/twitter'>Twitter</a>
          <a href='/instagram'>Instagram</a>
        </ul>
        </div>
        <div className="footboxline3">
       
        <ul> 
            <p>Make Money with Us</p>
              <a href='/seller'>Sell products on Fashionmart</a>
              <a href='/business'>Sell on Fashionmart Business</a>
              <a href='/sell'>Sell apps on Fashionmart</a>
              <a href='/affiliate'>Become an Affiliate</a>
              <a href='/advertise'>Advertise your products</a>
              <a href='/self-publish'>Self-Publish with Us</a>
              <a href='/hosthub'>Host an Fashionmart Hub</a>
              <a href='/makemoney'>See More Make Money with Us</a>
        </ul>
        </div>
        <div className="footboxline4">
        <ul> 
            <p>Fashionmart Payment Products</p>
              <a href='/card'>Fashionmart Business Card</a>
              <a href='/points'>Shop with Points</a>
              <a href='/balance'>Reload Your Balance</a>
              <a href='/currency'>Fashionmart Currency Converter</a>
        </ul>
        </div> 
        <div className="footboxline5">
        <ul> 
            <p>Let Us Help You</p>
                <a href='/covid'>Fashionmart and COVID-19</a>
                <a href='/account'>Your Account</a>
                <a href='/orders'>Your Orders</a>
                <a href='/shipping'>Shipping Rates 
                   & Policies</a>
                <a href='Return'>Returns & Replacements</a>
                <a href='/manage'>Manage Your 
                   Content and Devices</a>
                <a href='/assistance'>Fashionmart Assistant</a>
                <a href='/Help'>Help</a>
        </ul>
        </div>
      </div>
      <div className="footbox3"><img src={Fashionmartlogo} className='footboxlogo' alt='img'></img></div>
      <div className="footbox4">
       <div className="pages">
        <ul>
        <a href='/conditions'>Conditions of Use & Sale</a>
        <a href='/privacy'>Privacy Notice</a>
        <a href='/ads'>Interest-Based Ads</a>
        </ul>
        </div> 
       <div className="copyright">
       © 1996-2024, Fashionmart.com, Inc. or its affiliates
       </div>
       </div>
    </div>
  );
}

export default Footer;
