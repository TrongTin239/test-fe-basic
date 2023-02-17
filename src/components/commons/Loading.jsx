import { Box, Stack } from "@mui/system";
import React from "react";

export default function Loading() {
  return (
    <Stack minHeight={"100vh"} justifyContent={"center"} alignItems="center">
      <Box>Loading...</Box>
    </Stack>
  );
}
