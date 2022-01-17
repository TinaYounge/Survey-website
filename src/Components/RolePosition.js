import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';


//test with macs
export default function RolePosition() {
  return (
    <Box>
      <Button
        fullWidth={true}
        variant="outlined"
        style={{
          justifyContent: "flex-start",
          border: "2px solid #112f53",
          borderRadius: "5px",
          color: "#112f53",
          marginBottom: 10,
        }}
      >

        <Checkbox
          color="primary"
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Mother
      </Button>
      <Button
        fullWidth={true}
        variant="outlined"
        style={{
          justifyContent: "flex-start",
          border: "2px solid #112f53",
          borderRadius: "5px",
          color: "#112f53",
          marginBottom: 10,
        }}
      >
        {" "}
        <Checkbox
          color="primary"
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Father
      </Button>
      <Button
        fullWidth={true}
        variant="outlined"
        style={{
          justifyContent: "flex-start",
          border: "2px solid #112f53",
          borderRadius: "5px",
          color: "#112f53",
          marginBottom: 10,
        }}
      >
        <Checkbox
          color="primary"
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Prefer not to say
      </Button>
    </Box>
  );
}
