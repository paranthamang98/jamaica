import React from 'react'

const InnerSectionHeader = (props) => {
  const{title , subtile} =props
  return (
    <>
      <div class="sections">
          <div class="container">
            <div class="section_header">
              <h5 class="section_header_title">{title && title}</h5>
              <h1 class="section_header_subtitle">{subtile && subtile}</h1>
            </div>

             {props.children}


            <div class="viewbtn">
              <a href="./latestoffers.html">View all</a>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default InnerSectionHeader
