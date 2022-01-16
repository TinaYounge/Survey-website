import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Pagenumber from "../Components/Pagenumber";
import RolePosition from "../Components/RolePosition";

function Page2() {
  return (
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
          What is your role within the family?{" "}
        </Typography>
        <RolePosition />
      </Container>
    </Box>
  );
}

export default Page2;
