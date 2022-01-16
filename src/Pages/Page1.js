import { Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Bottom from "../Components/Bottom";
import Intro from "../Components/Intro";
import Nav from "../Components/Nav";
import ReCaptchaGoogle from "../Components/ReCaptchaGoogle";

export default function Page1() {
  return (
    <Box>
      <Nav />
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "#bcbcbc",
          mx: 10,
          my: 5,
          borderRadius: "8px",
        }}
      >
        <Container maxWidth="sm">
          <Intro />
          <Box sx={{ mx: "auto", width: 350, my: 4 }}>
            <ReCaptchaGoogle />
          </Box>
          <Box sx={{ px: 4, width: 600, my: 4 }}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Cancel</Button>

              <Button variant="contained">
                I have read and agree with the terms of use
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Bottom />
    </Box>
  );
}
