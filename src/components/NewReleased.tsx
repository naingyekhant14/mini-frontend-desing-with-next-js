import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
const NewReleased = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography sx={{ fontSize: 40, fontWeight: 900, textAlign: "center" }}>
        <span style={{ color: "red" }}>New</span> Released
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: 18 }}>
        Try Our lastest Flavours Here
      </Typography>

      <Container sx={{ mt: 5 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={6} md={3}>
            <Link href={""}>
              <CardMedia
                sx={{
                  borderRadius: 3,
                }}
                component="img"
                height={200}
                image="/images/newRelease/1.png"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href={""}>
              <CardMedia
                sx={{
                  borderRadius: 3,
                }}
                component="img"
                height={200}
                image="/images/newRelease/2.png"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href={""}>
              <CardMedia
                sx={{
                  borderRadius: 3,
                }}
                component="img"
                height={200}
                image="/images/newRelease/3.png"
                alt=""
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link href={""}>
              <CardMedia
                sx={{
                  borderRadius: 3,
                }}
                component="img"
                height={200}
                image="/images/newRelease/4.png"
                alt=""
              />
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "grey", px: 10, borderRadius: 20 }}
        >
          View More <NavigateNextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default NewReleased;
