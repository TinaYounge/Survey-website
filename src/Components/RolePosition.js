import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  buttonPage2: {
    justifyContent: "flex-start",
    border: "2px solid #e0e3e5",
    borderRadius: "5px",
    color: "#e0e3e5",
    marginBottom: 10,
    '&:hover': {
      color: '#04244c',
      border: "2px solid #04244c",

  },
  '&:active': {
    color: '#04244c',
    border: "2px solid #04244c",

},
  },
  checkBox:{
    color:"#e0e3e5", '&:hover': {
      color: '#04244c',

  },
  '&:active': {
    color: '#04244c',

},
  }
});

//test with macs
export default function RolePosition() {
  const classes = useStyles();

  return (
    <Box>
      <Button 
      className={classes.buttonPage2}
        fullWidth={true}
        variant="outlined"
     
      >

        <Checkbox
              className={classes.checkBox}
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Mother
      </Button>
      <Button
        fullWidth={true}
        variant="outlined"
        className={classes.buttonPage2}

      >
        {" "}
        <Checkbox
              className={classes.checkBox}
              icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Father
      </Button>
      <Button
        fullWidth={true}
        variant="outlined"
        className={classes.buttonPage2}

      >
        <Checkbox
              className={classes.checkBox}
              icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Prefer not to say
      </Button>
    </Box>
  );
}
