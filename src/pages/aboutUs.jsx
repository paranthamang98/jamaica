import React from 'react'
import LayOut from '../utlits/layOut'
import PageHeader from '../component/pageHeader'
import InnerSectionHeader from '../component/innerSectionHeader'

const AboutUs = () => {
  return (
    <>
    <LayOut>
        <PageHeader/>
        <InnerSectionHeader>
        <div className="aboutus_main">
            <p className="aboutus_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.
            </p>
            <div className="aboutus_vedio_content">
              <img src="./assets/images/aboutus_vedio_img.png" alt=""/>
            </div>
          </div>
        </InnerSectionHeader>
        <div className="container-fluid about_mid_sec_bg">
        <div className="container">
          <div className="about_mid_sec">
            <div className="about_mid_sec_content">
              <img src="./assets/images/aboutus-coff.svg" alt=""/>
              <div className="about_content_text">
                <span>220</span>
                <p>Varieties of Coffee</p>
              </div>
            </div>
            <div className="about_mid_sec_content">
              <img src="./assets/images/aboutus-shop.svg" alt=""/>
              <div className="about_content_text">
                <span>305</span>
                <p>Brand of Coffee Shops</p>
              </div>
            </div>
            <div className="about_mid_sec_content">
              <img src="./assets/images/aboutus-calnder.svg" alt=""/>
              <div className="about_content_text">
                <span>12</span>
                <p>Years of Jamaica Craft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <InnerSectionHeader>
        <div className="aboutus_image_content">
          <img src="./assets/images/aboutus_image_content.png" alt=""/>
        </div>
            </InnerSectionHeader>
    </LayOut>
    </>
  )
}

export default AboutUs