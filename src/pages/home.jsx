import React from 'react'
import Header from '../component/header'
import HomeBanner from '../component/homeBanner'
import InnerSectionHeader from '../component/innerSectionHeader'
import LatestOffersCard from '../component/latestOffersCard'
import Recommendations from '../component/recommendations'
import CategoriesCard from '../component/categoriesCard'
import LimitedperiodOffer from '../component/limitedperiodOffer'
import Footer from '../component/footer'
import LayOut from '../utlits/layOut'

const Home = () => {
  return (
    <>
    <LayOut>
    <HomeBanner/>
    <InnerSectionHeader>
        <LatestOffersCard />
    </InnerSectionHeader>
    <InnerSectionHeader>
        <Recommendations/>
    </InnerSectionHeader>
    <InnerSectionHeader>
        <CategoriesCard/>
    </InnerSectionHeader>
    <InnerSectionHeader>
        <LimitedperiodOffer/>
    </InnerSectionHeader>
    </LayOut>
   
    
      
    </>
  )
}

export default Home
