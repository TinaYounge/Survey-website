import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";

function ContactBox({userInfo}) {
  const userInfoChild =userInfo;
  
  return (
    <div>
      <Typography
        mt={3}
        mb={1}
        style={{ fontWeight: "bold", color: "#00224b" }}
      >
        <AccountCircleIcon />
        <span style={{ marginLeft: "5px", paddingBottom: 900 }}>
          {" "}
          YOUR NAME:{" "}
        </span>{" "}
      </Typography>
      <TextField
        sx={{ width: "100%", border: "1px solid #e0e3e5", marginBottom: 5 }}
        id="outlined"
        defaultValue="Jenifer LoveWood"
      
      />
      <Typography mb={1} style={{ fontWeight: "bold", color: "#00224b" }}>
        <EmailIcon />{" "}
        <span style={{ marginLeft: "5px", paddingBottom: 900 }}> EMAIL:</span>{" "}
      </Typography>
      <TextField
        sx={{ width: "100%", border: "1px solid #e0e3e5", marginBottom: 5 }}
        id="outlined"
        defaultValue="JeniferLoveWood@mail.com"

      />
      <FormControlLabel
        value="end"
        style={{ color: "grey" }}
        control={<Checkbox />}
        label="I agree to receive a summary of the survey findings"
        labelPlacement="end"
      />
      <FormControlLabel
        style={{ color: "grey" }}
        value="end"
        control={<Checkbox />}
        label="I agree to be contacted by SOMEHOB in the future research"
        labelPlacement="end"
      />
    </div>
  );
}

export default ContactBox;
