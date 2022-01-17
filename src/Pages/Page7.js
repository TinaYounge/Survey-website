import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Page7() {
  return (
    <div>
      <Box
        style={{
          minHeight: "80vh",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            mt={10}
            mb={4}
            color="#07264c"
            style={{ fontWeight: "bold" }}
          >
            Thank you!
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            We appreciated your time so far!{" "}
          </Typography>

          <Stack direction="row" justifyContent="center" my={4}>
            <Link to="/exit" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "300px" }}
              >
                Back to SOMEHOB{" "}
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default Page7;
