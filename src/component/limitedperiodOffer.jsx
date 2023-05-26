import React from 'react'

function LimitedperiodOffer(props) {
  const { title , innerSection ,offerPrice ,sec ,min,hour ,img} = props
  return (
    <>
    <div className="limited_card">
                <div className="limited_card_header">
                  <h4 className="limited_card_header_title">{title && title}</h4>
                  <p className="limited_card_header_item">
                  {innerSection && innerSection}
                  </p>
                  <div className="">
                    <button className="yellow_btn">Add to cart</button>
                  </div>
                </div>
                <div className="limited_card_img">
                  <img src={img} alt="img"/>
                  <div className="offer_text">
                    <p>{offerPrice && offerPrice}</p>
                  </div>
                  <div className="time_line">
                    <div className="time_line_hr">
                      <h4>{hour && hour }</h4>
                      <p>Hour</p>
                    </div>
                    <div className="time_line_min">
                      <h4>{min && min }</h4>
                      <p>Min</p>
                    </div>
                    <div className="time_line_sec">
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
