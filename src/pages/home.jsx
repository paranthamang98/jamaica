import React, { useEffect, useState } from "react";
import Header from "../component/header";
import HomeBanner from "../component/homeBanner";
import InnerSectionHeader from "../component/innerSectionHeader";
import LatestOffersCard from "../component/latestOffersCard";
import Recommendations from "../component/recommendations";
import CategoriesCard from "../component/categoriesCard";
import LimitedperiodOffer from "../component/limitedperiodOffer";
import Footer from "../component/footer";
import LayOut from "../utlits/layOut";
import axios from "axios";

const Home = () => {
  const [latestOffer, setLatestOffer] = useState();
  const [limitedPeriodOffer, setLimitedPeriodOffer] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append("key", "value"); // Add any form data parameters if needed

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://jamaica.colanapps.in/api/latest-offer",
        headers: {
          "x-org-id": "1",
          version: "1.1",
          Authorization: "Basic YWRtaW46YWRtaW4=",
          Cookie: "laravel_session=SG9TiWkTFAYEZC1hVoOo03jIy9BAME7lpByZoheO",
        },
        data: formData,
      };

      try {
        const response = await axios(config);
        setLatestOffer(response.data.latest_offers.data);
      } catch (error) {
        console.log(error);
      }
    };
    const limited_period_offer = async () => {
      const formData = new FormData();
      formData.append("key", "value"); // Add any form data parameters if needed

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://jamaica.colanapps.in/api/limited-period-offer",
        headers: {
          "x-org-id": "1",
          version: "1.1",
          Authorization: "Basic YWRtaW46YWRtaW4=",
          Cookie: "laravel_session=SG9TiWkTFAYEZC1hVoOo03jIy9BAME7lpByZoheO",
        },
        data: formData,
      };

      try {
        const response = await axios(config);
        setLimitedPeriodOffer(response.data.limitedoffer.data);
      } catch (error) {
        console.log(error);
      }
    };
    limited_period_offer();
    fetchData();
  }, []);
  // console.log(limitedPeriodOffer);
  return (
    <>
      <LayOut>
        <HomeBanner />
        <InnerSectionHeader subtile={"Latest offers"} title={"New Products"}>
          <div className="latestoff">
            {latestOffer != null ? (
              latestOffer.map((item, key) => {
                return (
                  <LatestOffersCard
                    title={item.discount_name}
                    offerrang={item.discount_amount}
                    img={item.latest_banner_image}
                  />
                );
              })
            ) : (
              <div>loading</div>
            )}
          </div>
        </InnerSectionHeader>
        <InnerSectionHeader
          subtile={"Recommendations"}
          title={"Frequently used products"}
        >
          <div className="recomm">
            <Recommendations
              offer={"15%"}
              title={"Grilled Veg Sandwich"}
              price={"$20.00"}
            />
          </div>
        </InnerSectionHeader>
        <InnerSectionHeader subtile={"Categories"} title={"List of Category"}>
          <div className="section_main">
            <CategoriesCard
              img={""}
              titlepart={"Bestsellers"}
              count={"10 Items"}
            />
          </div>
        </InnerSectionHeader>
        <InnerSectionHeader
          subtile={"Limited period Offer "}
          title={"Times of period"}
        >
          <div className="limited">
            {limitedPeriodOffer != null ? (
              limitedPeriodOffer.map((item, key) => {
                console.log(item.menu);
                return item.menu.map((innertext, key) => {
                  console.log(
                    "innertext",
                    innertext.menu_item_image_url,
                    item.id
                  );
                  return (

                      <LimitedperiodOffer
                        img={innertext.menu_item_image_url}
                        title={innertext.menu_item_name}
                        innerSection={innertext.menu_item_description}
                        offerPrice={item.discount_offer}
                        sec={"45"}
                        min={"45"}
                        hour={"02"}
                      />
                  );
                });
              })
            ) : (
              <div>loading</div>
            )}
          </div>
        </InnerSectionHeader>
      </LayOut>
    </>
  );
};

export default Home;
