import { Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Intro from "../Components/Intro";
import { useSelector } from "react-redux";
import ReCaptchaGoogle from "../Components/ReCaptchaGoogle";

export default function Page1() {
  const userInfo = useSelector((state) => state.user);

  console.log("here", userInfo.captcha);
  return (
    <Box
      sx={{
        border: "1px solid ",
        borderColor: "#bcbcbc",
        mx: "5vw",
        my: "2vh",
        borderRadius: "8px",
      }}
    >
      <Container maxWidth="sm">
        <Intro />
        <Box sx={{ mx: "auto", width: 350, my: 4 }}>
          <ReCaptchaGoogle userInfo={userInfo} />
        </Box>
        <Box sx={{ width: "100%", my: 4 }}>
          {userInfo.captcha === "Yes" && (
            <Stack spacing={2} direction="row">
              <Link to="/exit" style={{ textDecoration: "none" }}>
                <Button variant="outlined" sx={{ width: "130px" }}>
                  Cancel
                </Button>
              </Link>

              <Link to="/page2" style={{ textDecoration: "none" }}>
                <Button variant="contained">
                  I have read and agree with the terms of use
                </Button>
              </Link>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
}
