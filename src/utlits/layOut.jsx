import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

const LayOut = (props) => {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}

export default LayOut