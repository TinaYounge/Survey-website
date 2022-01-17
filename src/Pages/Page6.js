import { Box, Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import TextFill from "../Components/TextFill";
import ContactBox from "../Components/ContactBox";

function Page6() {
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
            mt={10}
            mb={4}
            color="#07264c"
            style={{ fontWeight: "bold" }}
          >
            Thank you for taking the time to complete our survey. Your help is
            very much appreciated.{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            If you have any questions or concern, please email lead to
            researcher"{" "}
          </Typography>

          <Typography color="#00224b" variant="inherit" align="center" my={4}>
            <span style={{ fontWeight: "bold" }}> . Research Group</span>{" "}
            (somehob@gmail.com)
          </Typography>
          <div style={{ borderBottom: "1px solid #e0e3e5" }}></div>
          <Typography
            variant="h5"
            align="center"
            mt={5}
            mb={4}
            color="#07264c"
            style={{ fontWeight: "bold" }}
          >
            Interested in summary survey of the survey?{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            You you would like to receive a summary of the survey Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and{" "}
          </Typography>
          <Typography color="#07264c" my={2} variant="inherit" align="center">
            If you change your mind, you can always opt-out at later date.{" "}
          </Typography>
          <ContactBox />
          <Typography
            my={2}
            style={{ fontStyle: "italic" }}
            variant="inherit"
            align="center"
          >
            <span style={{ fontWeight: "bold" }}>Please note:</span> your name
            and email address will note be linked with your survey answers
          </Typography>
          <Stack direction="row" justifyContent="center" my={4}>
            <Button variant="outlined" sx={{ width: "200px" }}>
              Back to the survey{" "}
            </Button>{" "}
            <Button
              variant="contained"
              color="inherit"
              sx={{ width: "300px", marginLeft: "20px" }}
            >
              Submit{" "}
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
    }
export default Page6;
