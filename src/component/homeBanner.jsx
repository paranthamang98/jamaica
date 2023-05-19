import React from 'react'

const HomeBanner = () => {
  return (
    <>
                    <section className="home_banner">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="home_banner_slider_top">
                <div className="container h-100">
                  <div className="home_banner_slider">
                    <button className="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 className="home_banner_slider_header">
                      Start your day with a <br />
                      Black coffee
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home_banner_slider_top">
                <div className="container h-100">
                  <div className="home_banner_slider">
                    <button className="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 className="home_banner_slider_header">
                      Start your day with a <br />
                      Black coffee
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home_banner_slider_top">
                <div className="container h-100">
                  <div className="home_banner_slider">
                    <button className="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 className="home_banner_slider_header">
                      Start your day with a <br />
                      Black coffee
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeBanner
