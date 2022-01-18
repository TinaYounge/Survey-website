import { Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Intro from "../Components/Intro";
import ReCaptchaGoogle from "../Components/ReCaptchaGoogle";

export default function Page1() {
  return (
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
        <Box sx={{  width: "100%", my: 4 }}>
          <Stack spacing={2} direction="row">
          <Link to="/exit" style={{  textDecoration: "none"}}>
            <Button variant="outlined">Cancel</Button>
            </Link>

            <Link to="/page2" style={{  textDecoration: "none"}}>
              <Button variant="contained" >
                I have read and agree with the terms of use
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
