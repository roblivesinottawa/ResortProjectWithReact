import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </React.Fragment>
  );
};

export default Home;
