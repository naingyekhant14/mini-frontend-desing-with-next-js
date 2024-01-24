import Slider from "react-slick";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
const imgUrls = [
  {
    id: 1,
    item: "/images/sliderbg/1.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 2,
    item: "/images/sliderbg/2.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 3,
    item: "/images/sliderbg/3.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 4,

    item: "/images/sliderbg/4.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 5,
    item: "/images/sliderbg/5.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },

  {
    id: 6,
    item: "/images/sliderbg/1.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 7,
    item: "/images/sliderbg/2.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 8,
    item: "/images/sliderbg/3.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 9,

    item: "/images/sliderbg/4.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 10,
    item: "/images/sliderbg/5.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 11,
    item: "/images/sliderbg/1.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 12,
    item: "/images/sliderbg/2.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 13,
    item: "/images/sliderbg/3.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 14,

    item: "/images/sliderbg/4.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 15,
    item: "/images/sliderbg/5.webp",
    title: "Refreshing Mini",
    price: "30000MMK",
    ponit: "600 Points",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};
const BGSlider = () => {
  return (
    <Container sx={{ my: 3 }}>
      <div className="hero" style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {imgUrls.map((p) => {
            return (
              <Box key={p.id}>
                <Image
                  src={p.item}
                  alt=""
                  className="bgImg"
                  width={200}
                  height={250}
                />
                <Box
                  sx={{
                    color: "white",
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  <span style={{ display: "block" }}>{p.title}</span>
                  <span style={{ display: "block" }}>{p.price}</span>
                  <span style={{ display: "block", color: "yellow" }}>
                    <StarRateIcon sx={{ fontSize: 15 }} /> {p.ponit}
                  </span>
                </Box>
              </Box>
            );
          })}
        </Slider>
        <Image
          src="/images/sliderbg/bg.jpg"
          alt=""
          className="bgImg"
          fill={true}
        />
      </div>
      <div className="hero" style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {imgUrls.map((p) => {
            return (
              <Box key={p.id}>
                <Image
                  src={p.item}
                  alt=""
                  className="bgImg"
                  width={200}
                  height={250}
                />
                <Box
                  sx={{
                    color: "white",
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  <span style={{ display: "block" }}>{p.title}</span>
                  <span style={{ display: "block" }}>{p.price}</span>
                  <span style={{ display: "block", color: "yellow" }}>
                    <StarRateIcon sx={{ fontSize: 15 }} /> {p.ponit}
                  </span>
                </Box>
              </Box>
            );
          })}
        </Slider>
        <Image
          src="/images/sliderbg/bg.jpg"
          alt=""
          className="bgImg"
          fill={true}
        />
      </div>
      <div className="hero" style={{ marginTop: 30 }}>
        <Slider {...settings}>
          {imgUrls.map((p) => {
            return (
              <Box key={p.id}>
                <Image
                  src={p.item}
                  alt=""
                  className="bgImg"
                  width={200}
                  height={250}
                />
                <Box
                  sx={{
                    color: "white",
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  <span style={{ display: "block" }}>{p.title}</span>
                  <span style={{ display: "block" }}>{p.price}</span>
                  <span style={{ display: "block", color: "yellow" }}>
                    <StarRateIcon sx={{ fontSize: 15 }} /> {p.ponit}
                  </span>
                </Box>
              </Box>
            );
          })}
        </Slider>
        <Image
          src="/images/sliderbg/bg.jpg"
          alt=""
          className="bgImg"
          fill={true}
        />
      </div>
    </Container>
  );
};

export default BGSlider;
