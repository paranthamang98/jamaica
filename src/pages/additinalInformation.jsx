import React from "react";
import LayOut from "../utlits/layOut";
import PageHeader from "../component/pageHeader";
import Recommendations from "../component/recommendations";

const AdditinalInformation = () => {
  return (
    <>
      <LayOut>
        <PageHeader></PageHeader>

        <div className="container">
          <div className="sections">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="img_section">
                  {/* <img src="./assets/images/product_bg.png" alt="" /> */}
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="content_section">
                  <div className="productDetail_section">
                    <div className="prodectName">
                      <h4 className="prodectName_inner">Cappuccino Coffee</h4>
                      <h5>$30.00</h5>
                    </div>
                    <div className="rating_star">
                      <p className="rating_section">
                        4.2
                        {/* <img src="./assets/images/star_icon.svg" alt="" /> */}
                      </p>
                      <p className="rating_section_text">Ratings</p>
                    </div>
                    <p className="rating_section_text text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="customizes">
                      <div className="customizes_inner">
                        <h6 className="customize_section">Customize:</h6>
                        <div className="recomm_card_price pb-3">
                          <div className="item_increase">
                            <p className="icon" data-decrease="">
                              -
                            </p>
                            <input
                              data-value=""
                              type="text"
                              value="1"
                              disabled=""
                            />
                            <p className="icon" data-increase="">
                              +
                            </p>
                          </div>
                        </div>

                        <div className="recomm_card_price">
                          <button
                            className="yellow_btn out_line"
                            data-bs-toggle="modal"
                            data-bs-target="#customize"
                          >
                            Customize
                          </button>
                          <div className="recomm_card_button">
                            <button className="yellow_btn">Add to cart</button>
                          </div>
                        </div>
                      </div>
                      <div className="add_section_part">
                        <div className="squar_ad">
                          {/* <img src="./assets/images/home-add-image4.png" alt="" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="nav nav-pills rating_Feedback"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Additional Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Rating & Feedback
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <p className="product_description_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridicu lus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <p className="product_description_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridicu lus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <p className="product_description_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridicu lus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <p className="product_description_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridicu lus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <h3 className="sub_header_inner">Ratings</h3>
                    <div className="progress_section">
                      <div className="percent">
                        <svg>
                          <circle cx="80" cy="80" r="67"></circle>
                          <circle
                            cx="80"
                            cy="80"
                            r="67"
                            style={{strokeDashoffset: `calc(625px - (625px * ${"60"}) / 100)`}}
                          ></circle>
                        </svg>
                        <div className="number">
                          <h3>
                            3.0
                            <span>
                              {/* <img src="./assets/images/star_big.svg" alt="" /> */}
                            </span>
                            <p>Ratings</p>
                          </h3>
                        </div>
                      </div>

                      <div className="progress_single_line">
                        <div className="progress_single_line_section">
                          <label>
                            1{" "}
                            {/* <img src="./assets/images/star_yllow.svg" alt="" /> */}
                          </label>
                          <progress value="5000" max="10000">
                            50%
                          </progress>
                        </div>
                        <div className="progress_single_line_section">
                          <label>
                            2{" "}
                            {/* <img src="./assets/images/star_yllow.svg" alt="" /> */}
                          </label>
                          <progress value="5000" max="10000">
                            50%
                          </progress>
                        </div>
                        <div className="progress_single_line_section">
                          <label>
                            3{" "}
                            {/* <img src="./assets/images/star_yllow.svg" alt="" /> */}
                          </label>
                          <progress value="5000" max="10000">
                            50%
                          </progress>
                        </div>
                        <div className="progress_single_line_section">
                          <label>
                            4{" "}
                            {/* <img src="./assets/images/star_yllow.svg" alt="" /> */}
                          </label>
                          <progress value="5000" max="10000">
                            50%
                          </progress>
                        </div>
                        <div className="progress_single_line_section">
                          <label>
                            5{" "}
                            {/* <img src="./assets/images/star_yllow.svg" alt="" /> */}
                          </label>
                          <progress value="5000" max="10000">
                            50%
                          </progress>
                        </div>
                      </div>
                    </div>
                    <div className="add_section_part mt-2">
                      <div className="squar_ad">
                        {/* <img src="./assets/images/home-add-image4.png" alt="" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="header_feedbacks_section">
                      <h3 className="sub_header_inner">Feedbacks</h3>
                      <p className="view_more_opction">View More</p>
                    </div>
                    <div className="feedbacks_section">
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              {/* <img src="./assets/images/Feedbacks.png" alt="" /> */}
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              <img src="./assets/images/Feedbacks.png" alt="" />
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              <img src="./assets/images/Feedbacks.png" alt="" />
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              {/* <img src="./assets/images/Feedbacks.png" alt="" /> */}
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              {/* <img src="./assets/images/Feedbacks.png" alt="" /> */}
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                      <div className="feedbacks_section_chart">
                        <div className="feedbacks_section_header">
                          <div className="feedbacks_section_profile">
                            <div className="feedbacks_section_profile_img">
                              {/* <img src="./assets/images/Feedbacks.png" alt="" /> */}
                            </div>
                            <div className="feedbacks_section_profile_name">
                              <h3 className="name_part">Richard</h3>
                              <p className="rating_section">
                                4.2
                                {/* <img
                                  src="./assets/images/star_icon.svg"
                                  alt=""
                                /> */}
                              </p>
                            </div>
                          </div>
                          <p className="update_date">3 days ago</p>
                        </div>
                        <p className="feedback">
                          I really like this product , delicious and cheap, 🤤
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="combo_section">
              <h3 className="prodectName_inner">Combo Offer</h3>
              <div className="recomm additinal_info">
<Recommendations/>
<Recommendations/>
<Recommendations/>
<Recommendations/>
<Recommendations/>
              </div>
              <div className="combo_offer_price section">
                <h4 className="combo_total">
                  <span>Total Price: </span> $30.00
                </h4>
                <div className="recomm_card_price">
                  <div className="recomm_card_button">
                    <button className="yellow_btn">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayOut>
    </>
  );
};

export default AdditinalInformation;
