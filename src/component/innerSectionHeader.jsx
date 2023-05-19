import React from 'react'

const InnerSectionHeader = (props) => {
  const{title , subtile} =props
  return (
    <>
      <div className="sections">
          <div className="container">
            <div className="section_header">
              <h5 className="section_header_title">{title && title}</h5>
              <h1 className="section_header_subtitle">{subtile && subtile}</h1>
            </div>

             {props.children}


            <div className="viewbtn">
              <a href="./latestoffers.html">View all</a>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default InnerSectionHeader
