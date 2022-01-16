import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField } from "@mui/material";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

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
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 550 }}>
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
              color: "red",
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
        style={{
          justifyContent: "flex-start",
          border: "2px solid #112f53",
          borderRadius: "5px",
          color: "#112f53",
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        <Checkbox
          color="primary"
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
        />
        Prefer not to say
      </Button>
    </div>
  );
}
