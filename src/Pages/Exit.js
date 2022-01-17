import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function Exit() {
  const userInfo = useSelector((state) => state.user);

  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Typography> Thank you so much for giving me an opportunity!</Typography>
      <Typography> User Info </Typography>
      <Typography>name: {userInfo.name}</Typography>
      <Typography>email: {userInfo.email}</Typography>
      <Typography>role: {userInfo.role}</Typography>
      <Typography>language: {userInfo.language}</Typography>
      <Typography>note: {userInfo.note}</Typography>
      <Typography>wanna result: {userInfo.wantResult}</Typography>
      <Typography>allowed contact: {userInfo.allowedContact}</Typography>
    </Box>
  );
}
