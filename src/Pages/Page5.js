import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import TextFill from "../Components/TextFill";

function Page5() {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "#bcbcbc",
          mx: 50,
          my: 5,
          borderRadius: "8px",
          minHeight: "75vh",
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
            "I no longer participate in this survey"{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            Your progress will be lost.{" "}
          </Typography>
          <Typography variant="inherit" mt={3} mb={4}>
            You can learn more about the purpose of the survey by contacting our
            lead researchers if you have further question.{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center" my={4}>
            <span style={{ fontWeight: "bold" }}>Research Group</span>{" "}
            (somehob@gmail.com)
          </Typography>
          <Typography color="#07264c" mb={4} variant="inherit" align="center">
            Are you sure no longer to take in this survey?{" "}
          </Typography>
          <Stack direction="row" justifyContent="center" my={5}>
            <Button variant="contained" sx={{ width: "300px" }}>
              I have changed my mind{" "}
            </Button>{" "}
          </Stack>
          <Stack direction="row" justifyContent="center">
            <Button variant="outlined" color="inherit" sx={{ width: "300px" }}>
              Back to survey
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default Page5;
