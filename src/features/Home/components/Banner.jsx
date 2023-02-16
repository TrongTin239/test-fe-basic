import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { images } from "../../../constants/image";

const Data = [
  {
    urlImg: `${images.BANNER_IMG}`,
  },
  {
    urlImg: `${images.BANNER_IMG}`,
  },
  {
    urlImg: `${images.BANNER_IMG}`,
  },
  {
    urlImg: `${images.BANNER_IMG}`,
  },
];

export default function Banner() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: true,
  };
  return (
    <Box
      sx={{
        ".slick-dots": {
          top: "80%",
          //   right: "-45%",
        },
      }}
    >
      <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {Data?.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                background: `url(${item.urlImg})`,
                minHeight: "100vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
          );
        })}
      </Slider>
    </Box>
  );
}
