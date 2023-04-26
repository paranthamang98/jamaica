import React from 'react'

const HomeBanner = () => {
  return (
    <>
                    <section class="home_banner">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="home_banner_slider_top">
                <div class="container h-100">
                  <div class="home_banner_slider">
                    <button class="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 class="home_banner_slider_header">
                      Start your day with a <br />
                      Black coffee
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home_banner_slider_top">
                <div class="container h-100">
                  <div class="home_banner_slider">
                    <button class="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 class="home_banner_slider_header">
                      Start your day with a <br />
                      Black coffee
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home_banner_slider_top">
                <div class="container h-100">
                  <div class="home_banner_slider">
                    <button class="yellow_btn">
                      Now You Can Feel The ENERGY
                    </button>
                    <h1 class="home_banner_slider_header">
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
