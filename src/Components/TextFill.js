import React, { useState } from "react";
import { Box ,Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { UserUpdate } from "../redux/UserInfo/UserAction";
import { Link } from "react-router-dom";
export default function TextFill() {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [textFill, setTextFill] = useState(userInfo);
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
        onChange={(e) => setTextFill({ ...textFill, note: e.target.value,page: "/page4" })}
      />
      <Stack direction="row" justifyContent="center">
        <Link to="/page6" style={{textDecoration:"none", color:"grey"}}>
          <Button
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
