import { Box, Button, Card, CardMedia, Container, Grid } from "@mui/material";

import Link from "next/link";
import React from "react";

const ManberShip = () => {
  return (
    <>
      <Container sx={{}} maxWidth="lg">
        {/* End hero unit */}
        <Grid
          container
          spacing={4}
          sx={{ display: { sm: "block", md: "flex" } }}
        >
          <Grid item sm={12} md={8}>
            <Link href={""}>
              <CardMedia
                sx={{
                  width: {
                    md: 790,
                    sm: 720,
                  },
                  borderRadius: 3,
                }}
                component="img"
                height={350}
                image="/images/manberShip/1.png"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item sm={12} md={4} sx={{ display: "flex" }}>
            <div>
              <Link href={""}>
                <CardMedia
                  sx={{
                    width: {
                      md: 200,
                      sm: 410,
                    },
                    borderRadius: 3,
                    mr: 0.2,
                  }}
                  component="img"
                  height={350}
                  image="/images/manberShip/2.png"
                  alt=""
                />
              </Link>
            </div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Link href={""}>
                  <CardMedia
                    sx={{
                      width: {
                        md: 145,
                        sm: 311,
                      },
                      borderRadius: 3,
                    }}
                    component="img"
                    height={175}
                    image="/images/manberShip/3.png"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <CardMedia
                    sx={{
                      width: {
                        md: 145,
                        sm: 308,
                      },
                      borderRadius: 3,
                    }}
                    component="img"
                    height={175}
                    image="/images/manberShip/4.png"
                    alt=""
                  />
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ManberShip;
