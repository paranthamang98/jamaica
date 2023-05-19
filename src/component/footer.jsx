import React from "react";
import { 
    Logo,
    Visa,
    Patm ,
    Phonepe} from "../utlits/images";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer_top_section">
        <div className="container">
          <div className="footer_inner_wrap">
            <div className="footer_contact_us">
              <h3>Contact us</h3>
              <ul>
                <li>
                  <span>
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </span>
                  <p>601-586-3257</p>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  <p>hello@quantamplus.com.au</p>
                </li>
                <li>
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <p>2320 Walnut Street, Jackson, United States - 39201</p>
                </li>
              </ul>
            </div>
            <div className="footer_quantam_plus">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis.
              </p>
              <ul>
                <li>
                  <a className="facebook" href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter " href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a className="youtube" href="">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_quick_links footer_contact_us">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                  <Link to="/limitedOffers">Limited Offer</Link>
                </li>
                <li>
                  <Link to="/limitedOffers">Latest Offer</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact us</Link>
                </li>
                <li>
                  <a href="./contactus.html">Responsibility</a>
                </li>
                <li>
                  <Link to="/privacyStatement">Privacy statement</Link>
                </li>
                <li>
                  <Link to="./termOfUse">Terms of use</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <a href="./terms&policies.html">Help Centre</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_section">
        <div className="container footer_bottom_section_inner">
          <p>Copyright © 2023 Quantan Plus | All Rights Reserved</p>
          <div className="footer_payment">
            <p>Payment Partner</p>
            <span>
              <img src={Patm} alt="" />
            </span>
            <span>
              <img src={Visa} alt="" />
            </span>
            <span>
              <img src={Phonepe} alt="" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
