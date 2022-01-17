import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import TextFill from "../Components/TextFill";
import { Link } from "react-router-dom";

function Page4() {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "#bcbcbc",
          mx: 10,
          my: 5,
          borderRadius: "8px",
          minHeight: "95vh",
        }}
      >
        <Container maxWidth="sm">
          <Stack direction="row" justifyContent="space-between" mt={10}>
            <Link to="/page3" style={{ textDecoration: "none" }}>
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
            Please tell us what touchscreen game, app or story you use the most
            often with your child and why{" "}
          </Typography>
          <TextFill />
        </Container>
      </Box>
    </div>
  );
}

export default Page4;
