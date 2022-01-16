import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LanguageBox from "../Components/LanguageBox";

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
