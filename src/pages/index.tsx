import Banner from "@/components/Banner";
import React from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import BestDetail from "@/components/BestDetail";
import ManberShip from "@/components/ManberShip";
import NewReleased from "@/components/NewReleased";
import Footer from "@/components/Footer";

import BGSlider from "@/components/BgSlider";
import BG1 from "@/components/BG1";
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <div>
      <Banner />
      <BestDetail />
      <ManberShip />
      <NewReleased />
      <BG1 />
      <BGSlider />
      <Footer />
    </div>
  );
};

export default index;
