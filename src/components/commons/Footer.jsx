import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#383D40", color: "white" }}>
      <Container>
        <Stack flexDirection={"row"} flexWrap="wrap">
          <Box py={"50px"} pl="40px">
            <Typography fontSize={"40px"} variant="h6">
              Brandname
            </Typography>
            <Box>Follow us: </Box>
            <Box>
              <FacebookOutlinedIcon />
              <InstagramIcon sx={{ mx: "10px" }} />
              <TwitterIcon />
            </Box>
          </Box>

          <Stack flexDirection={"row"} flexWrap="wrap">
            <Box component={"ul"} sx={{ listStyle: "none" }}>
              <h2>Home</h2>
              <Box component={"li"}>About us</Box>
              <li>Intro</li>
              <li>Features</li>
              <li>Price</li>
            </Box>

            <Box component={"ul"} sx={{ listStyle: "none" }}>
              <h2>Support</h2>
              <li>Shipping & Returns</li>
              <li>Contact Us</li>
              <li>Our Partners</li>
            </Box>

            <Box component={"ul"} sx={{ listStyle: "none" }}>
              <h2>Resources</h2>
              <li>Our Work</li>
              <li>Servicrs</li>
              <li>FAQ</li>
            </Box>

            <Box component={"ul"} sx={{ listStyle: "none" }}>
              <h2>Contact us</h2>

              <li>Menu</li>
              <li>Contact</li>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
