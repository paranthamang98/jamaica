import React from "react";
import LayOut from "../utlits/layOut";
import PageHeader from "../component/pageHeader";

const Shopping = () => {
  return (
    <>
      <LayOut>
        <PageHeader />
        <div class="container">
          <div class="sections">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="order_item">
                  <div class="order_item_header">
                    <h3>Order Items</h3>
                    <p>(3 Items)</p>
                  </div>
                  <div class="order_item_list_table">
                    <div class="table-responsive">
                      <table class="table order_table">
                        <tbody>
                          <tr>
                            <td class="order_item_img">
                              <img
                                src="./assets/images/addtocart_image1.png"
                                alt=""
                              />
                            </td>
                            <td class="order_item_name">
                              <h3>Cappuccino</h3>
                              <ul class="order_items_type">
                                <li>Small</li>
                                <li>Skimmed</li>
                                <li>Soy Milk</li>
                              </ul>
                            </td>
                            <td>
                              <div class="item_increase">
                                <p class="icon" data-decrease>
                                  -
                                </p>
                                <input
                                  data-value
                                  type="text"
                                  value="1"
                                  disabled
                                />
                                <p class="icon" data-increase>
                                  +
                                </p>
                              </div>
                            </td>
                            <td class="order_item_price">
                              <h4>$30.00</h4>
                            </td>
                            <td>
                              <div class="oder_pencil">
                                <img src="./assets/images/pencil.svg" alt="" />
                              </div>
                            </td>
                            <td>
                              <img src="./assets/images/close.svg" alt="" />
                            </td>
                          </tr>
                          <tr>
                            <td class="order_item_img">
                              <img
                                src="./assets/images/addtocart_image2.png"
                                alt=""
                              />
                            </td>
                            <td class="order_item_name">
                              <h3>Cheeseburger</h3>
                              <ul class="order_items_type">
                                <li>Small</li>
                                <li>Skimmed</li>
                              </ul>
                            </td>
                            <td>
                              <div class="item_increase">
                                <p class="icon" data-decrease>
                                  -
                                </p>
                                <input
                                  data-value
                                  type="text"
                                  value="1"
                                  disabled
                                />
                                <p class="icon" data-increase>
                                  +
                                </p>
                              </div>
                            </td>
                            <td class="order_item_price">
                              <h4>$50.00</h4>
                            </td>
                            <td>
                              <div class="oder_pencil">
                                <img src="./assets/images/pencil.svg" alt="" />
                              </div>
                            </td>
                            <td>
                              <img src="./assets/images/close.svg" alt="" />
                            </td>
                          </tr>
                          <tr>
                            <td class="order_item_img">
                              <img
                                src="./assets/images/addtocart_image3.png"
                                alt=""
                              />
                            </td>
                            <td class="order_item_name">
                              <h3>Cobb salad</h3>
                              <ul class="order_items_type">
                                <li>Small</li>
                                <li>Skimmed</li>
                              </ul>
                            </td>
                            <td>
                              <div class="item_increase">
                                <p class="icon" data-decrease>
                                  -
                                </p>
                                <input
                                  data-value
                                  type="text"
                                  value="1"
                                  disabled
                                />
                                <p class="icon" data-increase>
                                  +
                                </p>
                              </div>
                            </td>
                            <td class="order_item_price">
                              <h4>$30.00</h4>
                            </td>
                            <td>
                              <div class="oder_pencil">
                                <img src="./assets/images/pencil.svg" alt="" />
                              </div>
                            </td>
                            <td>
                              <img src="./assets/images/close.svg" alt="" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="order_sub_title ">
                    <p class="order_sub_title_header">Select Pick Up Details</p>
                    <div class="select_picks">
                      <input type="radio" name="honey" id="honey1" />{" "}
                      <label for="honey1">Take away</label>
                      <input type="radio" name="honey" id="honey2" />{" "}
                      <label for="honey2">Dine in</label>
                    </div>
                  </div>
                  <div class="order_sub_title">
                    <p class="order_sub_title_header">Add Messages</p>
                    <textarea
                      class="addMessages_text"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="">
                  <div class="order_item_header">
                    <h3>Payment Summary</h3>
                  </div>
                  <div class="coupon_section">
                    <div class="coupon_text">
                      <p class="order_sub_title_header">Coupon Code</p>
                      <p>View All Coupon</p>
                    </div>
                    <div class="coupon_section_input">
                      <input type="text" placeholder="Enter promo code here" />
                      <p class="order_sub_price_total">Apply</p>
                    </div>
                  </div>
                  <div class="coupon_section loyalty_Points">
                    <p class="order_sub_title_header">Loyalty Points</p>

                    <div class="">
                      <input type="checkbox" name="size" id="cream2" />{" "}
                      <label for="cream2">
                        12 Loyalty points applicable for this Coffee.
                      </label>
                    </div>
                  </div>
                  <div class="coupon_section mt-4">
                    <div class="coupon_section_price">
                      <p class="order_sub_price_name">Sub Total</p>
                      <p class="order_sub_price">₹700.00</p>
                    </div>
                    <div class="coupon_section_price">
                      <p class="order_sub_price_name">
                        Discount <span>(Coupon)</span>
                      </p>
                      <p class="order_sub_price">-₹0.00</p>
                    </div>
                    <div class="coupon_section_price">
                      <p class="order_sub_price_name">Loyalty Points</p>
                      <p class="order_sub_price">-$0.26</p>
                    </div>
                    <div class="coupon_section_price">
                      <p class="order_sub_price_name">Gross Amount</p>
                      <p class="order_sub_price">₹182.00</p>
                    </div>
                    <div class="coupon_section_price">
                      <p class="order_sub_price_name">GST (18%)</p>
                      <p class="order_sub_price">₹18.00</p>
                    </div>
                    <div class="coupon_section_price total m-0">
                      <p class="order_sub_price_totalname">
                        Amount Payable <span>(inc.GST)</span>
                      </p>
                      <p class="order_sub_price_total">₹900.00</p>
                    </div>
                  </div>
                  <div class="button_group">
                    <button class="yellow_btn out_line">
                      Continue Shopping
                    </button>
                    <button
                      class="yellow_btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#payment2"
                    >
                      Checkout
                    </button>
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

export default Shopping;
