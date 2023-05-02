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
    <InnerSectionHeader subtile={"Latest offers"} title={"New Products"}>
      <div className="latestoff">
      <LatestOffersCard title={"Espresso Americano "} offerrang ={"25"}  img ={""} />
      </div>
        
    </InnerSectionHeader>
    <InnerSectionHeader subtile={"Recommendations"} title={"Frequently used products"}>
      <div className="recomm">
      <Recommendations offer={"15%"}  title ={"Grilled Veg Sandwich"} price={"$20.00"} />
      </div>
      
    </InnerSectionHeader>
    <InnerSectionHeader subtile={"Categories"} title={"List of Category"}>
      <div className="section_main">
      <CategoriesCard img={""}  titlepart={"Bestsellers"} count={"10 Items"}/>
      </div>
   
    </InnerSectionHeader>
    <InnerSectionHeader subtile={"Limited period Offer "} title={"Times of period"}>
      <div className="limited">
      <LimitedperiodOffer title={"Beyond meat burger"} innerSection={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."} offerPrice={"40% off"} sec={"45"} min={"45"} hour={"02"}/>
      </div>
       
    </InnerSectionHeader>
    </LayOut>
   
    
      
    </>
  )
}

export default Home
