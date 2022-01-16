import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

// const { AppBar, Button, makeStyles, Toolbar, Typography } = MaterialUI;

// const useStyles = makeStyles({
//   flexGrow: {
//     flex: "1",
//   },
//   button: {
//     backgroundColor: "#3c52b2",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: "#fff",
//       color: "#3c52b2",
//     },
//   },
// });
export default function RolePosition() {
  // const classes = useStyles();

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
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
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
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
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
        {" "}
        <Checkbox
          color="primary"
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
        />
        Prefer not to say
      </Button>
    </Box>
  );
}
