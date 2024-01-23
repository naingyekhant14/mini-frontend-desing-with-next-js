const cartDetail = [
  {
    id: 1,
    parsent: "25% Off",
    image: "/images/best/1.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 2,
    parsent: "25% Off",
    image: "/images/best/2.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 3,
    parsent: "25% Off",
    image: "/images/best/3.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 4,
    parsent: "25% Off",
    image: "/images/best/4.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 5,
    parsent: "25% Off",
    image: "/images/best/5.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
  {
    id: 6,
    parsent: "25% Off",
    image: "/images/best/6.png",
    title: "Refreshing Mini",
    price: "30000MMK",
    discount: "30000MMK",
    ponit: "600 Points",
  },
];

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BestDetail = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: 900 }}>
          Best Detail
        </Typography>
        <Typography>Just For You</Typography>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cartDetail.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={2}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    color: "white",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      bgcolor: "red",
                      width: "50%",
                      textAlign: "center",
                    }}
                  >
                    {card.parsent}
                  </Typography>
                </Box>
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                    mb: 1,
                  }}
                  image={card.image}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 400, fontSize: 15 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }} variant="inherit">
                    {card.price}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {card.discount}
                  </Typography>
                  <Typography
                    variant="inherit"
                    sx={{ color: "#FFA31A", fontWeight: 700, fontSize: 12 }}
                  >
                    <StarRateIcon sx={{ fontSize: 15 }} />
                    {card.ponit}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "grey", px: 10, borderRadius: 20 }}
          >
            View More <NavigateNextIcon />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BestDetail;
