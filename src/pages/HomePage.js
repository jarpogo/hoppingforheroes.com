import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <p>
        <Link to="/about">The About page.</Link>
      </p>

      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="assets/south-boston-vietnam-memorial.jpg"
            alt="South Boston Vietnam Memorial"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src="assets/pogo.jpeg" alt="Pogoing" />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
