
import './App.css';
import "./css/style.css"
import "./css/font-awesome.css"
import "./css/font-awesome.min.css"
import "./css/variable.css"
import "./css/responsive.css"
import Header from './component/header';
import Footer from './component/footer';
import InnerSectionHeader from './component/innerSectionHeader';
import LatestOffersCard from './component/latestOffersCard';
import Recommendations from './component/recommendations';
import CategoriesCard from './component/categoriesCard';
import LimitedperiodOffer from './component/limitedperiodOffer';
import HomeBanner from './component/homeBanner';
import Home from './pages/home';
import Categories from './pages/categories';
import ProductList from './pages/ProductList ';
import AdditinalInformation from './pages/additinalInformation';
import Shopping from './pages/shopping';
import MyOrders from './pages/myOrders';
import LimitedPeriodOffers from './pages/limitedPeriodOffersPage';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import FAQ from './pages/fAQ';
import TermsofUse from './pages/termsofUse';
import PrivacyStatement from './pages/privacyStatement';

function App() {
  return (
    <div className="App">
  <PrivacyStatement/>
    </div>
  );
}

export default App;
