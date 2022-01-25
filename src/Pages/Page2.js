import { Box, Container, Typography, Button, Stack } from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import RolePosition from "../Components/RolePosition";

function Page2() {
  const userInfo= useSelector((state) => state.user);

  return (
    <Box
      sx={{
        border: "1px solid ",
        borderColor: "#bcbcbc",
        mx: "5vw",
        my: "2vh",
        borderRadius: "8px",
        minHeight: "75vh",
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="end" mt={10}>
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
          What is your role within the family?{" "}
        </Typography>
        <RolePosition role={userInfo} />
      </Container>
    </Box>
  );
}

export default Page2;
