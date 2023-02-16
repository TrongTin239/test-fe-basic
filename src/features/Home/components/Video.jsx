import { Box } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";
export default function Video() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        mt: "50px",
      }}
    >
      <ReactPlayer
        url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
        controls={true}
      />
    </Box>
  );
}
