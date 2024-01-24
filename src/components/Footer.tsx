import {
  Box,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Footer = () => {
  return (
    <Container sx={{ mt: 10, bgcolor: "lightblue" }}>
      <Grid container spacing={3}>
        <Grid item sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Customer Service
          </Typography>
          <Link href={""} style={{ textDecoration: "none", color: "#121212" }}>
            <Typography variant="body2">
              <PrivacyTipOutlinedIcon sx={{ fontSize: 18 }} /> Teams & Privacity
              Policity
            </Typography>
          </Link>
          <Link
            href={""}
            style={{
              textDecoration: "none",
              color: "#121212",
              display: "block",
            }}
          >
            <Typography variant="body2" sx={{ mt: 2 }}>
              <RestartAltIcon sx={{ fontSize: 18 }} /> Return Policy
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Language
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Myanmar(Unicode)"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Myanmar(Zawgyi)"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="English"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Contact Us
          </Typography>
          <Link
            href={""}
            style={{
              textDecoration: "none",
              color: "#121212",
              display: "flex",
            }}
          >
            <PlaceOutlinedIcon sx={{ mr: 1, fontSize: 18 }} />
            <Typography variant="body2">
              Lay Daunt Kan Main Roda,Cashmere Shop,Near Zawana,Thingangyun Tsp,
              Yagon.
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <LocalPhoneOutlinedIcon sx={{ mr: 1, mt: 1.7, fontSize: 18 }} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              0944455577
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            DownLoad Our App
          </Typography>
          <CardMedia
            sx={{
              width: {
                xs: 100,
              },
              my: 2,
              ml: 5,
            }}
            component="img"
            height={100}
            image="/images/qrcode.svg"
            alt=""
          />
        </Grid>

        <Grid item sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Payment
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Link href={""}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 50 }}
                image="/images/footer/1.png"
                alt=""
              />
            </Link>
            <Link href={"."}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 50, ml: 1 }}
                image="/images/footer/2.png"
                alt=""
              />
            </Link>
          </Box>
        </Grid>

        <Grid item sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Follow Us On
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Link href={""}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 30 }}
                image="/images/footer/3.png"
                alt=""
              />
            </Link>
            <Link href={"."}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 30, ml: 0.5 }}
                image="/images/footer/4.jpeg"
                alt=""
              />
            </Link>
            <Link href={"."}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 30, ml: 0.5 }}
                image="/images/footer/5.png"
                alt=""
              />
            </Link>
            <Link href={"."}>
              <CardMedia
                component="img"
                height={30}
                sx={{ width: 30, ml: 0.5 }}
                image="/images/footer/6.png"
                alt=""
              />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography sx={{ textAlign: "center", mt: 2 }}>
        <span>&copy;</span> Copyright 2023 C by D Co ,Ltd.All rights released.
      </Typography>
    </Container>
  );
};

export default Footer;
