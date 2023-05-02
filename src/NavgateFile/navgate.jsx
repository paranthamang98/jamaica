import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import FAQ from '../pages/fAQ'
import AboutUs from '../pages/aboutUs'
import LatestOffer from '../pages/latestOffer'
import ContactUs from '../pages/contactUs'
import AdditinalInformation from '../pages/additinalInformation'
import Categories from '../pages/categories'
import LimitedPeriodOffers from '../pages/limitedPeriodOffersPage'
import MyOrders from '../pages/myOrders'
import PrivacyStatement from '../pages/privacyStatement'
import ProductList from '../pages/ProductList '
import Shopping from '../pages/shopping'
import TermsofUse from '../pages/termsofUse'
import AddToCart from '../pages/addToCart'


const Navgate = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/limitedOffers' element={<LatestOffer/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/additinalInformation' element={<AdditinalInformation/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/latestOffers' element={<LimitedPeriodOffers/>}/>
        <Route path='/myOrders ' element={<MyOrders/>}/>
        <Route path='/privacyStatement' element={<PrivacyStatement/>} />
        <Route path='/productList' element={<ProductList/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/termOfUse' element={<TermsofUse/>} />
        <Route path='/addToCart' element={<AddToCart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navgate