import React from 'react'

const CategoriesCard = (props) => {
  const { img , titlepart, count } = props
  return (
    <>
      <div class="category_card">
                  <div class="category_card_img">
                    {img &&  <img src={img} alt="img"/>}
                  </div>
                  <div class="category_card_header">
                   
                    <h4 class="category_card_header_title"> {titlepart && titlepart }</h4>
                    <p class="category_card_header_item">{count && count}</p>
                  </div>
                </div>
    </>
  )
}

export default CategoriesCard
