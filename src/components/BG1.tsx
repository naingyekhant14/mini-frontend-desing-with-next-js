import Slider from "react-slick";
import { Container } from "@mui/material";
import Image from "next/image";
import React, { Component } from "react";

export default class BG1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const Images = [
      { id: 1, item: "/images/sliderbg/12.jpeg" },
      { id: 2, item: "/images/sliderbg/11.jpeg" },
    ];
    return (
      <Container sx={{ my: 4 }}>
        <Slider {...settings}>
          <div key={1}>
            <Image
              src="/images/sliderbg/12.jpeg"
              alt=""
              className="bgImg"
              width={1145}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/sliderbg/11.jpeg"
              alt=""
              className="bgImg"
              width={1145}
              height={200}
            />
          </div>
        </Slider>
      </Container>
    );
  }
}
