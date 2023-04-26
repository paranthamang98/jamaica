import React from 'react'

const LatestOffersCard = (props) => {
  const { title , offerrang ,  button , img} = props
  return (
    <>
      <div class="latestoff_card">
                <div class="latestoff_card_img">
                  {img && <img src={img } alt="img"/> }
                </div>
                <div class="latestoff_card_header">
                  <h4 class="latestoff_card_header_title">
                   {title && title}
                  </h4>
                  <div class="latestoff_card_offers">
                    <p class="latestoff_card_offer">{ offerrang && offerrang}</p>
                    <div class="latestoff_card_offer_pes">
                      <p>%</p>
                      <p>off</p>
                    </div>
                  </div>
                  <div class="latestoff_card_button">
                    <button class="yellow_btn">Add to cart</button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default LatestOffersCard
