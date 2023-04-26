import React from 'react'

const PageHeader = (props) => {
    const {title } = props
  return (
    <>
    <div class="pageg_header">
      <h1 class="section_header_sub_title">{title && title}</h1>
      <ul class="breadcrumbs">
        <li>Home</li>
        <li>Limited Offers</li>
      </ul>
    </div>
      
    </>
  )
}

export default PageHeader
