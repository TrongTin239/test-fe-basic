import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import CustomerApp from "../components/CustomerApp";
import ClinetApp from "../components/ClinetApp";
import Video from "../components/Video";
import BusinessApp from "../components/BusinessApp";
import ManagerApp from "../components/ManagerApp";
import Why from "../components/Why";

export default function HomePage() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Banner />
      <Video />
      <CustomerApp />
      <ClinetApp />
      <BusinessApp />
      <ManagerApp />
      <Why />
    </Box>
  );
}
