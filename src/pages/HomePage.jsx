import React, { useState, useEffect } from 'react';
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Loading from './loading';
import axios from 'axios';
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('https://servereco.onrender.com')
        .then(result => {
            setLoading(false);
        })
        .catch(err => {
            setLoading(true);
            console.log(err)
        })
}, [])

  return (

    <div>
      {loading ? (<Loading />) : (
          <div>
            <Header activeHeading={1} />
            <Hero />
              <Categories />
            <BestDeals />
            <Events />
            <FeaturedProduct />
            <Sponsored />
             <Footer />
            </div>

  )}
    </div>
  )
}

export default HomePage
