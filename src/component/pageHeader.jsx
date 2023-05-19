import React from 'react'

const PageHeader = (props) => {
    const {title } = props
  return (
    <>
    <div className="pageg_header">
      <h1 className="section_header_sub_title">{title && title}</h1>
      <ul className="breadcrumbs">
        <li>Home</li>
        <li>Limited Offers</li>
      </ul>
    </div>
      
    </>
  )
}

export default PageHeader
