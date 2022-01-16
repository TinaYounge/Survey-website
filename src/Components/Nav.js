import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            SAMEHOB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography variant="h6" noWrap component="div">
              FAMILIES USING TECHNOLOGY SURVEY{" "}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography textAlign="center">I HAVE CHANGED MY MIND</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;