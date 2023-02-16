import { Box, Container, Icon, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { images } from "../../../constants/image";
import ExpendMoreIcon from "@mui/icons-material/KeyboardArrowDown";
const title = "Apps for Managers";
const content = `Each branch of service provides is independent of the other business areas, but the activities of the services will be reported to senior management of the company that owns the application.`;

export default function ManagerApp() {
  return (
    <Box minHeight={"60vh"} my="50px">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ md: { flexDirection: "column" } }}
        >
          <Box sx={{ width: { xs: "100%", sm: "calc(100%/2)" } }}>
            <Box sx={{ textAlign: "center" }} position="relative">
              <Box
                component={"img"}
                alt="..."
                src={images.MACBOOK}
                sx={{
                  height: { lg: "400px", sm: "200px", xs: "200px" },
                  right: "50px",
                  sx: { width: "200px" },
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              ml: "20px",
              width: { xs: "100%", sm: "calc(100%/2 - 20px )" },
            }}
          >
            <Box sx={{ py: "30px", px: "20px" }}>
              <Typography variant="h6">{title}</Typography>
              <Box component={"p"} sx={{ textAlign: "left" }}>
                {content}
              </Box>

              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Box
                  component={"img"}
                  alt="ggplay"
                  src={images.GGPLAY}
                  sx={{ width: "150px", mr: "20px" }}
                ></Box>
                <Box
                  component={"img"}
                  alt="applestore"
                  src={images.APPLE}
                  sx={{ width: "150px" }}
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
