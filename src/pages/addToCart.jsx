import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import PageHeader from '../component/pageHeader'

const AddToCart = () => {
  return (
    <>
    <Header/>
    <PageHeader/>
    <div className="container">
        <div className="sections">
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <div className="order_item">
                    <div className="order_item_header">
                        <h3>Order Items</h3>
                        <p>(3 Items)</p>
                    </div>
                    <div className="order_item_list_table">
                        <div className="table-responsive">
                            <table className="table order_table">
                                <tbody>
                                    <tr>
                                        <td className="order_item_img"><img src="./assets/images/addtocart_image1.png" alt=""/></td>
                                        <td className="order_item_name"><h3>Cappuccino</h3>
                                            <ul className="order_items_type">
                                              <li>Small</li>
                                              <li>Skimmed</li>
                                              <li>Soy Milk</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <div className="item_increase">
                                              <p className="icon" data-decrease>-</p>
                                              <input data-value type="text" value="1" disabled />
                                              <p className="icon" data-increase>+</p>
                                              </div>
                                        </td>
                                        <td className="order_item_price">
                                            <h4>$30.00</h4>
                                        </td>
                                        <td>
                                            <div className="oder_pencil">
                                                <img src="./assets/images/pencil.svg" alt=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <img src="./assets/images/close.svg" alt=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_item_img"><img src="./assets/images/addtocart_image2.png" alt=""/></td>
                                        <td className="order_item_name"><h3>Cheeseburger</h3>
                                          <ul className="order_items_type">
                                            <li>Small</li>
                                            <li>Skimmed</li>
                                          </ul>
                                        </td>
                                        <td>
                                            <div className="item_increase">
                                              <p className="icon" data-decrease>-</p>
                                              <input data-value type="text" value="1" disabled />
                                              <p className="icon" data-increase>+</p>
                                              </div>
                                        </td>
                                        <td className="order_item_price">
                                            <h4>$50.00</h4>
                                        </td>
                                        <td>
                                            <div className="oder_pencil">
                                                <img src="./assets/images/pencil.svg" alt=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <img src="./assets/images/close.svg" alt=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="order_item_img"><img src="./assets/images/addtocart_image3.png" alt=""/></td>
                                        <td className="order_item_name"><h3>Cobb salad</h3>
                                          <ul className="order_items_type">
                                            <li>Small</li>
                                            <li>Skimmed</li>                                          
                                          </ul>
                                        </td>
                                        <td>
                                            <div className="item_increase">
                                                <p className="icon" data-decrease>-</p>
                                                <input data-value type="text" value="1" disabled />
                                                <p className="icon" data-increase>+</p>
                                              </div>
                                        </td>
                                        <td className="order_item_price">
                                            <h4>$30.00</h4>
                                        </td>
                                        <td>
                                            <div className="oder_pencil">
                                                <img src="./assets/images/pencil.svg" alt=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <img src="./assets/images/close.svg" alt=""/>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="order_sub_title ">
                      <p className="order_sub_title_header">Select Pick Up Details
                      </p>
                      <div className="select_picks">
                      <input type="radio" name="honey" id="honey1"/> <label htmlFor="honey1">Take away</label>
                      <input type="radio" name="honey" id="honey2"/> <label htmlFor="honey2">Dine in</label>
                  </div>
                </div>
                    <div className="order_sub_title">
                        <p className="order_sub_title_header">Add Messages</p>
                        <textarea className="addMessages_text" placeholder="Enter Message"></textarea>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="">
                    <div className="order_item_header">
                        <h3>Payment Summary</h3>
                    </div>
                    <div className="coupon_section">
                       <div className="coupon_text">
                        <p className="order_sub_title_header">Coupon Code</p>
                        <p>View All Coupon</p>
                       </div>
                        <div className="coupon_section_input">
                            <input type="text" placeholder="Enter promo code here"/> 
                            <p className="order_sub_price_total">Apply</p>
                        </div>
                    </div>
                    <div className="coupon_section loyalty_Points">
                      <p className="order_sub_title_header">Loyalty Points</p>
                      
                      <div className="">
                        <input type="checkbox" name="size" id="cream2"/> <label htmlFor="cream2">12 Loyalty points applicable for this Coffee.</label>
                      </div>
                    
                  </div>
                    <div className="coupon_section mt-4">
                        <div className="coupon_section_price">
                            <p className="order_sub_price_name">Sub Total</p>
                            <p className="order_sub_price">₹700.00</p>
                        </div>
                        <div className="coupon_section_price">
                          <p className="order_sub_price_name">Discount <span>(Coupon)</span></p>
                          <p className="order_sub_price">-₹0.00</p>
                      </div>
                      <div className="coupon_section_price">
                        <p className="order_sub_price_name">Loyalty Points</p>
                        <p className="order_sub_price">-$0.26</p>
                    </div>
                    <div className="coupon_section_price">
                      <p className="order_sub_price_name">Gross Amount</p>
                      <p className="order_sub_price">₹182.00</p>
                  </div>
                    <div className="coupon_section_price">
                      <p className="order_sub_price_name">GST (18%)</p>
                      <p className="order_sub_price">₹18.00</p>
                  </div>
                  <div className="coupon_section_price total m-0">
                    <p className="order_sub_price_totalname">Amount Payable <span>(inc.GST)</span></p>
                    <p className="order_sub_price_total">₹900.00</p>
                </div>
                    </div>
                    <div className="button_group">
                      <button className="yellow_btn out_line">Continue Shopping</button>
                      <button className="yellow_btn"  type="button"data-bs-toggle="modal" data-bs-target="#payment2">Checkout</button>

                    </div>

                </div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AddToCart