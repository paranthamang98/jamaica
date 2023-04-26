import React from 'react'

const Recommendations = (props) => {
  const {offer , title ,price} = props
  return (
    <>
      <div class="recomm_card">
                <p class="offer_part">{offer && offer} off</p>
                <div class="recomm_card_img">
                  {/* <img src="./assets/images/recomm_1.png" alt="img"/> */}
                </div>
                <div class="recomm_card_header">
                  <h4 class="recomm_card_header_title">{title && title}</h4>
                  <div class="rating_star">
                    <p class="rating_section">
                      4.2 
                      {/* <img src="./assets/images/star_icon.svg" alt=""/> */}
                    </p>
                    <p class="rating_section_text">Ratings</p>
                  </div>
                  <div class="recomm_card_price pb-3">
                    <p>{price && price}</p>
                    <div class="item_increase">
                      <p class="icon" data-decrease="">-</p>
                      <input data-value="" type="text" value="1" disabled=""/>
                      <p class="icon" data-increase="">+</p>
                    </div>
                  </div>
                  <div class="recomm_card_price">
                    <button class="yellow_btn out_line">Customize</button>
                    <div class="recomm_card_button">
                      <button class="yellow_btn">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Recommendations
