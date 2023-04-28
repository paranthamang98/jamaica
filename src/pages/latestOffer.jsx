import React from 'react'
import LayOut from '../utlits/layOut'
import PageHeader from '../component/pageHeader'
import LatestOffersCard from '../component/latestOffersCard'

const LatestOffer = () => {
  return (
    <>
    <LayOut>
        <PageHeader/>
        <LatestOffersCard/>
    </LayOut>
    </>
  )
}

export default LatestOffer