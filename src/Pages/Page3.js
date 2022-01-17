import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import LanguageBox from "../Components/LanguageBox";
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "#bcbcbc",
          mx: 10,
          my: 5,
          borderRadius: "8px",
          minHeight: "75vh",
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row" justifyContent="space-between" mt={10}>
            <Link to="/page2" style={{ textDecoration: "none" }}>
              {" "}
              <Button style={{ alignContent: "flex-end" }}> Back</Button>
            </Link>

            <Button variant="outlined" style={{ alignContent: "flex-end" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}>[Part 1] 1/</span>20
            </Button>
          </Stack>
          <Typography
            variant="h4"
            align="center"
            mt={3}
            mb={4}
            style={{ fontWeight: "bold" }}
          >
            What is your language is spoken in your household?{" "}
          </Typography>
          <LanguageBox />
        </Container>
      </Box>
    </div>
  );
}

export default Page3;
