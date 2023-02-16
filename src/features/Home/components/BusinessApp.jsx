import { Box, Container, Icon, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { images } from "../../../constants/image";
import ExpendMoreIcon from "@mui/icons-material/KeyboardArrowDown";
const title = "Apps for Business";
const content = `One of the advantages of Multi-Industry Services is that it helps reduce the impact of unexpected fluctuations in any one industry. Bringing diverse consumers to businesses`;

export default function BusinessApp() {
  return (
    <Box my="50px">
      <Container>
        <Stack
          flexDirection={"row-reverse"}
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ md: { flexDirection: "column" } }}
        >
          <Box sx={{ width: { xs: "100%", sm: "calc(100%/2)" } }}>
            <Box sx={{ textAlign: "center" }} position="relative">
              <Box
                position={"absolute"}
                component={"img"}
                alt="..."
                src={images.APPLE12}
                sx={{ height: "400px", right: "50px" }}
              ></Box>
              <Box
                position={"relative"}
                component={"img"}
                alt="..."
                src={images.APPLE12}
                sx={{ height: "400px", xs: { width: "200px" } }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            <Box sx={{ py: "30px" }}>
              <Typography variant="h6">{title}</Typography>
              <Box component={"p"} sx={{ textAlign: "left" }}>
                {content}
              </Box>

              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Box
                  component={"img"}
                  alt="ggplay"
                  src={images.GGPLAY}
                  sx={{ width: "150px", mr: "30px" }}
                ></Box>
                <Box
                  component={"img"}
                  alt="applestore"
                  src={images.APPLE}
                  sx={{ width: "150px", mr: "20px" }}
                ></Box>
              </Stack>
              <Stack
                sx={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                  textAlign: "center",

                  mt: "20px",
                }}
                flexDirection="row"
                justifyContent={"center"}
                alignItems="center"
              >
                <Typography>See more</Typography>
                <ExpendMoreIcon />
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
