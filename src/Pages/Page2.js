import { Box, Container, Typography, Button,Stack } from "@mui/material";
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
      <Stack direction="row" justifyContent="end" mt ={10} >

<Button  variant="outlined"   style=
{{ alignContent:"flex-end"}}> <span style={{fontWeight:"bold"}}>[Part 1] 1/</span>20</Button>
</Stack>
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
