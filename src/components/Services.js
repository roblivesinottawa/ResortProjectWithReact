import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "The best cocktails in the region made by specialists",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "You will have a chance to enjoy the hundreds of hiking trails that the region has to offer",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We have a free shuttle service that takes our guests from the airport to the resort",
      },
      {
        icon: <FaBeer />,
        title: "Great Beer",
        info: "Some of the best beer selection from the region and imported",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
