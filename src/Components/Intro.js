import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
function Intro() {
  return (
    <Container>
      <Box>
        <Typography variant="h4" align="center">
          Thank you for your interest
        </Typography>
        <Typography
          variant="inherit"
          align="center"
          style={{ fontStyle: "italic" }}
        >
          Please read the information below
        </Typography>
        <Typography variant="inherit" align="center">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci veliw
        </Typography>
      </Box>
      <Box>
        <Typography>What is Lorem Ipsum?</Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci veliw
        </Typography>
        <Typography>What is Lorem Ipsum?</Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci veliw
        </Typography>
      </Box>
    </Container>
  );
}

export default Intro;
