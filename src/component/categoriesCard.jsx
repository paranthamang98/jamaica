import React from 'react'

const CategoriesCard = (props) => {
  const { img , titlepart, count } = props
  return (
    <>
      <div className="category_card">
                  <div className="category_card_img">
                    {img &&  <img src={img} alt="img"/>}
                  </div>
                  <div className="category_card_header">
                   
                    <h4 className="category_card_header_title"> {titlepart && titlepart }</h4>
                    <p className="category_card_header_item">{count && count}</p>
                  </div>
                </div>
    </>
  )
}

export default CategoriesCard
