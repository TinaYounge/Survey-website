import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { Button, TextField, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { UserUpdate } from "../redux/UserInfo/UserAction";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  buttonPage2: {
    justifyContent: "flex-start",
    border: "2px solid #e0e3e5",
    borderRadius: "5px",
    color: "#e0e3e5",
    marginTop: 20,
    marginBottom: 10,
    "&:hover": {
      color: "#04244c",
      border: "2px solid #04244c",
    },
    "&:active": {
      color: "#04244c",
      border: "2px solid #04244c",
    },
  },
  checkBox: {
    color: "#e0e3e5",
    "&:hover": {
      color: "#04244c",
    },
    "&:active": {
      color: "#04244c",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 550,
    },
  },
};

const names = ["Select all", "Chinese", "English", "Vietnamese"];

export default function LanguageBox() {
  const userInfo = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [langInfo, setLangInfo] = useState(userInfo);
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setLangInfo({ ...langInfo, language: event.target.value ,page:"/page3"});
  };

  const PushInfo = () => {
    dispatch(UserUpdate(langInfo));
  };
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              width: "100%",
              my: 2,
            }}
          />
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        fullWidth={true}
        variant="outlined"
        className={classes.buttonPage2}
        onClick={() => setLangInfo({ ...userInfo, language: "not to say",page:"/page3" })}
      >
        <Checkbox
          className={classes.checkBox}
          icon={<CheckCircleIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        Prefer not to say
      </Button>

      <Stack direction="row" justifyContent="center" my={5}>
        <Link to="/page6" style={{textDecoration:"none"}}>
          <Button
            variant="contained"
            color="inherit"
            sx={{ width: "300px" }}
            onClick={PushInfo(langInfo)}
          >
            Continue
          </Button>
        </Link>
      </Stack>
    </div>
  );
}
