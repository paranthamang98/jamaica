import React from 'react'

const LatestOffersCard = (props) => {
  const { title , offerrang ,  button , img} = props
  return (
    <>
      <div className="latestoff_card">
                <div className="latestoff_card_img">
                  {img && <img src={img } alt="img"/> }
                </div>
                <div className="latestoff_card_header">
                  <h4 className="latestoff_card_header_title">
                   {title && title}
                  </h4>
                  <div className="latestoff_card_offers">
                    <p className="latestoff_card_offer">{ offerrang && offerrang}</p>
                    <div className="latestoff_card_offer_pes">
                      <p>%</p>
                      <p>off</p>
                    </div>
                  </div>
                  <div className="latestoff_card_button">
                    <button className="yellow_btn">Add to cart</button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default LatestOffersCard
