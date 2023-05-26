import React from 'react'
import LayOut from '../utlits/layOut'
import PageHeader from '../component/pageHeader'

function MyOrders() {
  return (
    <>
      <LayOut>
        <PageHeader/>
     
            <div className="container">
        <div className="sections">
            <div className="profile_tab_section">
                <div className="nav  profile_tab_section_left   " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="tab_left_section active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true"> <span>    <img
                                src="./assets/images/addtocart_image1.png"
                                alt=""
                              /></span> Profile</button>
                  <button className="tab_left_section " id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab" aria-controls="v-pills-orders" aria-selected="false"><span><img src="./assets/images/MyOrders_icon.svg" alt=""/></span> My Orders</button>
                  <button className="tab_left_section" id="v-pills-coupons-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coupons" type="button" role="tab" aria-controls="v-pills-coupons" aria-selected="false"> <span><img src="./assets/images/Coupons_icon.svg" alt=""/></span> Coupons</button>
                  <button className="tab_left_section" id="v-pills-loyalty-tab" data-bs-toggle="pill" data-bs-target="#v-pills-loyalty" type="button" role="tab" aria-controls="v-pills-loyalty" aria-selected="false"> <span><img src="./assets/images/loyalty_icon.svg" alt=""/></span> Loyalty Points</button>
                  <button className="tab_left_section" id="v-pills-notification-tab" data-bs-toggle="pill" data-bs-target="#v-pills-notification" type="button" role="tab" aria-controls="v-pills-notification" aria-selected="false"> <span><img src="./assets/images/notification_icon.svg" alt=""/></span> Notification</button>
                  <button className="tab_left_section" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <span><img src="./assets/images/setting_icon.svg" alt=""/></span> Settings</button>
                  <button className="tab_left_section" ><a href="home.html"> <span><img src="./assets/images/logout_icon.svg" alt=""/></span> Log Out</a></button>
                </div>
                <div className="tab-content  profile_tab_section_right" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="profile_section">
    
                      <form className="profile_input_section">
                        <div className="profile_uploader">
                          <div className="sectionHeader">
                            <div className="img-section">
                              <img className="img"/>
                            </div>
                            <label className="icon_section_profile" htmlFor="buttonSection"
                              ><img src="./assets/images/img_uploader.svg" alt=""
                            /></label>
                            <input
                              id="buttonSection"
                              className="input"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="input_form">

                          <label><img src="./assets/images/profile_fname.svg" alt=""/>  First Name</label>
                          <input
                            type="text"
                    
                            value="Balaji" required
                          />
                        </div>
                        <div className="input_form">
                          <label> <img src="./assets/images/profile-lname.svg" alt=""/>Last Name</label>
                          <input
                            type="text"
                      
                            value="Balaji"required
                          />
                        </div>
                        <div className="input_form">
                          <label htmlFor="datesection"> <img src="./assets/images/profile-date.svg" alt=""/>Date of Birth</label>
                          <input
                            type="text"
                            id="datesection"
                            required
                            
                          />
                        </div>
                        <div className="input_form flag_section">
                          <label htmlFor=""><img src="./assets/images/profile-phone.svg" alt=""/>Mobile Number</label>
                          <input
                            className="form-control"
                            type="number"
                            id="phone"
                        
                            value="918012175854"
                            required
                            onKeyDown="return event.keyCode !== 69"
                          />
                        </div>
                        <div className="input_form">
                          <label><img src="./assets/images/profile-mail.svg" alt=""/>Email</label>
                          <input
                            type="text"
                           
                            value="balaji@gmail.com"
                            required
                          />
                        </div>
                      </form>
                      <div className="profile_button_section edit">
                        <button className="yellow_btn edit_button">
                          Edit Profile
                        </button>
                      </div>
                      <div className="profile_button_section update">
                        <button className="yellow_btn out_line update_cancal">Cancel</button>
                        <button className="yellow_btn update_data">Update Profile</button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade " id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
                    <div className="orders_section">
                      <div className="select_section">
                        <select className="yellow_btn out_line">
                          <option value="all orders">all orders</option>
                        </select>
                      </div>
                      <div className="order_list">
                        <div className="order_card " data-bs-toggle="modal" data-bs-target="#order-details">
                          <div className="order_img">
                            <img src="./assets/images/myOrders_1.png" alt="" />
                          </div>
                          <div className="order_items_name">
                            <h4 className="order_items_headers">
                              Cappuccino
                            </h4>
                            <ul className="order_items_type">
                              <li>Small</li>
                              <li>Skimmed</li>
                              <li>Soy Milk</li>
                            </ul>
                            <ul className="order_items_type">
                              <li>Quantity : 02</li>
                            </ul>
                            <h4 className="order_items_headers">
                              $141.00
                            </h4>
                          </div>
                          <div className="order_card_booking_status">
                          <div className="">
                            <button className="status_order pending" >Pending</button>
                            <p className="order_invoice">17 Feb, 2023 - 10:50 AM</p>
                          </div>
                            <div className="order_group">
                              <button className="yellow_btn out_line" data-bs-toggle="modal" data-bs-target="#feedback">Rate Order</button>
                              <button className="yellow_btn">Repeat Order</button>
                            </div>
                            </div>
                          </div>
                            

                        </div>
    
                      </div>
                    </div>
                  
                  <div className="tab-pane fade" id="v-pills-coupons" role="tabpanel" aria-labelledby="v-pills-coupons-tab">

                    <div className="coupons_section">
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn ">Redeem</button>
                          </div>
                        </div>
                      </div>
                      <div className="coupons_section_list">
                        <div className="coupons_section_img"><img src="./assets/images/Coupons-1.png" alt=""/></div>
                        <div className="coupons_section_text">
                          <h4>Flat 50% Off valued at Jamaica Craft</h4>
                          <h3>50% Off</h3>
                          <p>Terms & Conditions Apply</p>
                        </div>
                        <div className="coupons_section_text_right">
<div className="">
  <p>Expire</p>
  <p> 17 Feb, 2023 </p>
</div>
                          <div className="orders_section ">
                            <button className="yellow_btn out_line">Redeem</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="tab-pane fade" id="v-pills-loyalty" role="tabpanel" aria-labelledby="v-pills-loyalty-tab">
                    <div className="loyalty_section">
                      <div className="loyalty_banner">
                        <h2 className="loyalty_header" >Available Loyalty Points</h2>
                        <h1 className="loyalty_sub_header"> <img src="./assets/images/coin.svg" alt=""/> 169</h1>
                        <p className="loyaity_content"  >Use Jamaica Craft to earn more points, redeem exciting deals and enjoy exclusive benefits</p>
                      </div>
                      <div className="loyalty_history">
                        <h2 className="loyalty_header" >history</h2>
                        <div className="loyalty_history_content">
                          <div className="loyalty_history_content_left">
                            <p className="loyaity_content"  >First Order from Jamaica Craft</p>
                            <p className="loyaity_content_inner">Credited on 17 Feb, 2023 </p>
                          </div>
                          <div className="loyalty_history_content_right">
                            <p className="loyaity_content credited">+20</p>
                      
                          </div>
                        </div>
                        <div className="loyalty_history_content">
                          <div className="loyalty_history_content_left">
                            <p className="loyaity_content"  >Combo Medium Cheeseburger </p>
                            <p className="loyaity_content_inner">Credited on 16 Feb, 2023  </p>
                          </div>
                          <div className="loyalty_history_content_right">
                            <p className="loyaity_content credited">+13</p>
                      
                          </div>
                        </div>
                        <div className="loyalty_history_content">
                          <div className="loyalty_history_content_left">
                            <p className="loyaity_content"  >Cappuccino Coffee </p>
                            <p className="loyaity_content_inner  ">Debited on 15 Feb, 2023 </p>
                          </div>
                          <div className="loyalty_history_content_right">
                            <p className="loyaity_content credited debited">-12</p>
                      
                          </div>
                        </div>
                        <h3 className="history_view">View All History</h3>
                      </div>                      
                      <div className="loyalty_works">
                        <h2 className="loyalty_header" >How it Works</h2>
                        <div className="loyalty_works_inner"><div className="loyalty_works_inner_immg"><img src="./assets/images/lWorks1.svg" alt=""/></div><p className="loyaity_content"  >You earn Loyalty points as per the products standard.</p></div>
                        <div className="loyalty_works_inner"><div className="loyalty_works_inner_immg"><img src="./assets/images/lWorks2.svg" alt=""/></div><p className="loyaity_content"  >Use your Loyalty points to redeem exciting deals and promotions</p></div>
                        <div className="loyalty_works_inner"><div className="loyalty_works_inner_immg"><img src="./assets/images/lWorks3.svg" alt=""/></div><p className="loyaity_content"  >you can eligible some products for using  loyalty points</p></div>

                      </div>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-notification" role="tabpanel" aria-labelledby="v-pills-notification-tab">


                    <div className="notification_section">
                      <div className="notification_text_section_header">
                      <h2 className="settings_section_inner_text">Today</h2>
                      <p  className="history_view">Mark  all as Read</p>
                      </div>

                      <div className="notification_today">
                        <div className="notification_card">
                          <div className="notification_img_section"><img src="./assets/images/recomm_1.png" alt=""/></div>
                          <div className="notification_text_section">
                              <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                              <p>50% Off, Today</p>
                          </div>
                            <p className="notification_time">02:30 PM</p>
                        </div>
                        <div className="notification_card">
                          <div className="notification_img_section"><img src="./assets/images/recomm_2.png" alt=""/></div>
                          <div className="notification_text_section">
                              <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                              <p>50% Off, Today</p>
                          </div>
                            <p className="notification_time">02:30 PM</p>
                        </div>
                        <div className="notification_card">
                          <div className="notification_img_section"><img src="./assets/images/recomm_3.png" alt=""/></div>
                          <div className="notification_text_section">
                              <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                              <p>50% Off, Today</p>
                          </div>
                            <p className="notification_time">02:30 PM</p>
                        </div>
                        <div className="notification_card">
                          <div className="notification_img_section"><img src="./assets/images/recomm_4.png" alt=""/></div>
                          <div className="notification_text_section">
                              <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                              <p>50% Off, Today</p>
                          </div>
                            <p className="notification_time">02:30 PM</p>
                        </div>
                        <div className="notification_card">
                          <div className="notification_img_section"><img src="./assets/images/recomm_3.png" alt=""/></div>
                          <div className="notification_text_section">
                              <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                              <p>50% Off, Today</p>
                          </div>
                            <p className="notification_time">02:30 PM</p>
                        </div>
                      </div>
                      <div className="notification_text_section_header">
                        <h2 className="settings_section_inner_text">This Week</h2>
              
                        </div>
                      <div className="notification_card">
                        <div className="notification_img_section"><img src="./assets/images/recomm_1.png" alt=""/></div>
                        <div className="notification_text_section">
                          
                            <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                            <p>50% Off, Today</p>
                          

                        </div>

                          <p className="notification_time">02:30 PM</p>
 
                      </div>
                      <div className="notification_card">
                        <div className="notification_img_section"><img src="./assets/images/recomm_3.png" alt=""/></div>
                        <div className="notification_text_section">
                          
                            <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                            <p>50% Off, Today</p>
                          

                        </div>

                          <p className="notification_time">02:30 PM</p>
 
                      </div>
                      <div className="notification_card">
                        <div className="notification_img_section"><img src="./assets/images/recomm_2.png" alt=""/></div>
                        <div className="notification_text_section">
                          
                            <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                            <p>50% Off, Today</p>
                          

                        </div>

                          <p className="notification_time">02:30 PM</p>
 
                      </div>
                      <div className="notification_card">
                        <div className="notification_img_section"><img src="./assets/images/recomm_4.png" alt=""/></div>
                        <div className="notification_text_section">
                          
                            <h3 className="settings_section_inner_text">Grilled Veg Sandwich</h3>
                            <p>50% Off, Today</p>
                          

                        </div>

                          <p className="notification_time">02:30 PM</p>
 
                      </div>
                    </div>






                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="settings_section">
                      <div className="settings_section_inner">
                        <h4 className="settings_section_inner_text">Notification</h4> 
                        <label className="switch" htmlFor="checkbox">
                          <input type="checkbox" id="checkbox" />
                          <div className="slider round"></div>
                        </label>
                      </div>
                      <div className="settings_section_inner">
                        <h4 className="settings_section_inner_text">Language</h4>
                        <div className="lan_section ">
                          <select>
                            <option>English</option>
                            <option>Tamil</option>
                          </select>
                        </div>
                        
                      </div>
                      <div className="settings_section_inner delete_account">
                        <h4 data-bs-toggle="modal" data-bs-target="#delete" className="settings_section_inner_text">Delete Account</h4>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      </LayOut>
    </>
  )
}

export default MyOrders
