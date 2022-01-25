import React, { useState } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { UserUpdate } from "../redux/UserInfo/UserAction";
import { Link } from "react-router-dom";
export default function TextFill() {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [textFill, setTextFill] = useState(userInfo);
  const handleChange = (e) => {
    setTextFill({ ...textFill, note: e.target.value, page: "/page4" });
  };

  let a = textFill.note.length;

  if (a >= 2000) {
    alert("Have to less than 2000 characters");
  }

  return (
    <Box>
      <TextField
        sx={{
          width: 550,
          maxWidth: "100%",
          height: 300,
        }}
        id="outlined-multiline-static"
        multiline
        rows={10}
        color="warning"
        placeholder="nnnnnnnnn"
        onChange={handleChange}
      />
      {a <= 2000 ? (
        <Typography align="center" sx={{ color: "red" }}>
          {2000 - a}/2000 character left
        </Typography>
      ) : (
        <Typography align="center" sx={{ color: "red" }}>
          Have to less than 2000 character
        </Typography>
      )}

      <Stack direction="row" justifyContent="center">
        <Link to="/page6" style={{ textDecoration: "none", color: "grey" }}>
          <Button
            style={{ marginBottom: "40px", marginTop: "20px" }}
            variant="contained"
            color="inherit"
            onClick={() => dispatch(UserUpdate(textFill))}
          >
            Continue
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
