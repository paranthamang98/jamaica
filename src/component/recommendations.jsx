import React from 'react'

const Recommendations = (props) => {
  const {offer , title ,price} = props
  return (
    <>
      <div className="recomm_card">
                <p className="offer_part">{offer && offer} off</p>
                <div className="recomm_card_img">
                  {/* <img src="./assets/images/recomm_1.png" alt="img"/> */}
                </div>
                <div className="recomm_card_header">
                  <h4 className="recomm_card_header_title">{title && title}</h4>
                  <div className="rating_star">
                    <p className="rating_section">
                      4.2 
                      {/* <img src="./assets/images/star_icon.svg" alt=""/> */}
                    </p>
                    <p className="rating_section_text">Ratings</p>
                  </div>
                  <div className="recomm_card_price pb-3">
                    <p>{price && price}</p>
                    <div className="item_increase">
                      <p className="icon" data-decrease="">-</p>
                      <input data-value="" type="text" value="1" disabled=""/>
                      <p className="icon" data-increase="">+</p>
                    </div>
                  </div>
                  <div className="recomm_card_price">
                    <button className="yellow_btn out_line">Customize</button>
                    <div className="recomm_card_button">
                      <button className="yellow_btn">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Recommendations
