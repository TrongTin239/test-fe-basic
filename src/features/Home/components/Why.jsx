import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { images } from "../../../constants/image";

const Data = [
  {
    urlImg: `${images.PROFESS}`,
    title: "Professional",
  },
  {
    urlImg: `${images.FAST}`,
    title: "Fast",
  },
  {
    urlImg: `${images.MULTI}`,
    title: "Multi service",
  },
  {
    urlImg: `${images.SEFETY}`,
    title: "Safety, quality",
  },
];
const title = "Why choose us";
const subTitle =
  "Modern consumer trends: Focus on top-selected services.  Changing business models to adapt to new consumer trends: Applying the latest technology";
export default function Why() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box minHeight={"60vh"} sx={{ background: "#F5F5F5" }} pb="50px">
      <Stack py="20px" alignItems={"center"} justifyContent="center">
        <Box px={"20px"}>
          <Typography textAlign={"center"} variant="h6">
            {title}
          </Typography>
          <Box component={"p"}>{subTitle} </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          ".slick-slide": {
            boxSizing: "border-box ",
            mt: "30px",
          },
        }}
      >
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          {Data?.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  background: "white",
                  margin: "0 15px",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.07);",
                  borderRadius: "15px",
                  height: "200px",
                  width: "calc( 100% - 100px )!important",
                  ".css-1o3mae6": {
                    width: "250px !important",
                  },
                }}
              >
                <Stack
                  justifyContent={"space-around"}
                  alignItems="center"
                  py={"10px"}
                >
                  <Box component={"img"} src={item.urlImg} width="80px"></Box>
                  <Typography mt={"40px"} variant="p">
                    {item.title}
                  </Typography>
                </Stack>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
