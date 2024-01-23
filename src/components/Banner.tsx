import React from "react";
import { Button, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="/images/banner/1.png"
            style={{ width: "100vw", maxHeight: "100vh" }}
            alt=""
          />
          <Carousel.Caption>
            <h6>The Best Look</h6>
            <h3>AnyTime Anywhere</h3>
            <p>start from 10,000MMK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/banner/3.png"
            alt=""
            style={{ width: "100vw", maxHeight: "100vh" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/banner/2.png"
            alt=""
            style={{ width: "100vw", maxHeight: "100vh" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
