import React from 'react'
import {     
  Logo,
  Location,
  Scicon,
  Language_list,
  Shopping_cart,
  User } from '../utlits/images'
import {Login ,Verification , Successfully,Registration} from './popup'
 
  


function Header() {
  return (
    <>
    <header>
      <div class="sub_header_top">
        <div class="sub_header container">
          <div class="location">
            <div class="location_icon">
              <img src={Location} alt="location" />
            </div>
            <div class="location_text">
              <h6>Shop Location</h6>
              <p>261 Shadowmar Drive, Newyork</p>
            </div>
          </div>
          <div class="headerInput">
            <input
              type="text"
              name=""
              id="looking"
              placeholder="Looking for something special "
            />
            <label for="#looking">
              <img src={Scicon} alt="icon" />
            </label>
          </div>
          <div class="headerRating">
            <h6 class="rating_text">Loyalty Points</h6>
            <button>400</button>
            <div class="lan_section d-flex">
              <img src={Language_list} alt="icon" />
              <select>
                <option>English</option>
                <option>Tamil</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      </header>
      <div class="navbar container">
          <div class="logo">
            <a href="./home.html"
              ><img src={Logo} alt=""
            /></a>
          </div>
          <ul class="navlist">
            <a href="./home.html">
              <li class="navitem active">Home</li>
            </a>

            <a href="./limitedoffers.html">
              <li class="navitem">Limited Offer</li>
            </a>
            <a href="./latestoffers.html">
              <li class="navitem">Latest Offer</li>
            </a>
            <a href="./aboutus.html">
              <li class="navitem">About us</li>
            </a>
            <a href="./contactus.html">
              <li class="navitem">Contact Us</li>
            </a>
          </ul>
          <div class="userList">
            <span aria-label="5" class="shopping_icon">
              <a href="./addtocart.html">
                <img src={Shopping_cart} alt="shopping" />
              </a>
            </span>
            <span
              class="user_icon"
              data-bs-toggle="modal"
              data-bs-target="#login"
              ><img src={User} alt="user" />
              <span class="prfileName">Login</span></span >
            <div class="menu_icon" aria-label="Main Menu">
              <svg width="30" height="30" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </div>
          </div>
          <div class="user_icon_popup">
            <div class="user_icon_content">
              <a href="./Profile.html">
                <p>Profile</p>
              </a>
              <a href="./myOrders.html">
                <p>My Orders</p>
              </a>
              <a href="./login.html">
                <p>Log Out</p>
              </a>
            </div>
          </div>
        </div>
        <Login/>
        <Verification/>
        <Successfully/>
        <Registration/>
    </>
  )
}

export default Header
