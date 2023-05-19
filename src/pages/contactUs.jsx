import React from 'react'
import LayOut from '../utlits/layOut'
import PageHeader from '../component/pageHeader'

const ContactUs = () => {
  return (
    <>
    <LayOut>
        <PageHeader/>
        <div className="container">
        <div className="contactUs contactUs_icon_white">
              <div className="footer_contact_us">
                <h3 className="contactUs_header contactUs_header_white">
                  Contact us
                </h3>
                <ul>
                  <li>
                    <span><i className="fa fa-mobile" aria-hidden="true"></i></span>
                    <p>601-586-3257</p>
                  </li>
                  <li>
                    <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <p>hello@quantamplus.com.au</p>
                  </li>
                  <li>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <p>2320 Walnut Street, Jackson, United States - 39201</p>
                  </li>
                </ul>
                <div className="footer_quantam_plus">
                  <ul>
                    <li>
                      <a className="facebook" href=""><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a className="twitter " href=""><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a className="linkedin" href=""><i className="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a className="youtube" href=""><i className="fa fa-youtube-play"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contactUs_get">
                <h3 className="contactUs_header">Get into Touch</h3>
                <div className="form_group">
                  <div className="input_form">
                    <label>Last Name</label>
                    <input type="text" required="" value="Ruban"/>
                  </div>
                  <div className="input_form">
                    <label>Last Name</label>
                    <input type="text" required="" value="Raj"/>
                  </div>
 
                  <div className="input_form flag_section">
                    <label>Telephone</label>
                    <input className="form-control" type="tel" id="phone" value=""/>
                  </div>
                  <div className="input_form">
                    <label>Email Address</label>
                    <input type="text" required=""/>
                  </div>
                </div>
                <div className="input_form mt-3">
                  <textarea id="" cols="100" rows="4" placeholder="Enter your Message"></textarea>
                </div>
                <div className="btn_section">
                  <button className="yellow_btn">Send Message</button>
                </div>
              </div>
            </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15591.74332922615!2d79.05320545!3d12.3201059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676823722851!5m2!1sen!2sin"
          width="100%"
          height="450"

          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

    </LayOut>
    </>
  )
}

export default ContactUs