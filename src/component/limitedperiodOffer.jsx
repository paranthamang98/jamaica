import React from 'react'

function LimitedperiodOffer(props) {
  const { title , innerSection ,offerPrice ,sec ,min,hour} = props
  return (
    <>
    <div class="limited_card">
                <div class="limited_card_header">
                  <h4 class="limited_card_header_title">{title && title}</h4>
                  <p class="limited_card_header_item">
                  {innerSection && innerSection}
                  </p>
                  <div class="">
                    <button class="yellow_btn">Add to cart</button>
                  </div>
                </div>
                <div class="limited_card_img">
                  {/* <img src="./assets/images/limited_pro_1.png" alt="img"/> */}
                  <div class="offer_text">
                    <p>{offerPrice && offerPrice}</p>
                  </div>
                  <div class="time_line">
                    <div class="time_line_hr">
                      <h4>{hour && hour }</h4>
                      <p>Hour</p>
                    </div>
                    <div class="time_line_min">
                      <h4>{min && min }</h4>
                      <p>Min</p>
                    </div>
                    <div class="time_line_sec">
                      <h4>{sec && sec }</h4>
                      <p>Sec</p>
                    </div>
                  </div>
                </div>
              </div>


      
    </>
  )
}

export default LimitedperiodOffer
