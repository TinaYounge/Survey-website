import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector, useDispatch } from "react-redux";
import { UserUpdate } from "../redux/UserInfo/UserAction";
import { Link } from "react-router-dom";

function Page6() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const [contact, setContact] = useState(userInfo);
  return (
    <div>
      <Box
        sx={{
          border: "1px solid ",
          borderColor: "#bcbcbc",
          mx: 10,
          my: 5,
          borderRadius: "8px",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            mt={10}
            mb={4}
            color="#07264c"
            style={{ fontWeight: "bold" }}
          >
            Thank you for taking the time to complete our survey. Your help is
            very much appreciated.{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            If you have any questions or concern, please email lead to
            researcher"{" "}
          </Typography>
          <Typography color="#00224b" variant="inherit" align="center" my={4}>
            <span style={{ fontWeight: "bold" }}> . Research Group</span>{" "}
            (somehob@gmail.com)
          </Typography>
          <div style={{ borderBottom: "1px solid #e0e3e5" }}></div>
          <Typography
            variant="h5"
            align="center"
            mt={5}
            mb={4}
            color="#07264c"
            style={{ fontWeight: "bold" }}
          >
            Interested in summary survey of the survey?{" "}
          </Typography>
          <Typography color="#07264c" variant="inherit" align="center">
            You you would like to receive a summary of the survey Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and{" "}
          </Typography>
          <Typography color="#07264c" my={2} variant="inherit" align="center">
            If you change your mind, you can always opt-out at later date.{" "}
          </Typography>
          {/* Contact */}
          <Typography
            mt={3}
            mb={1}
            style={{ fontWeight: "bold", color: "#00224b" }}
          >
            <AccountCircleIcon />
            <span style={{ marginLeft: "5px"}}>
              {" "}
              YOUR NAME:{" "}
            </span>{" "}
          </Typography>
          <TextField
            sx={{ width: "100%", border: "1px solid #e0e3e5", marginBottom: 5 }}
            id="outlined"
            type="name"
            placeholder="Jenifer LoveWood"
            onChange={(e) =>
              setContact({ ...contact, name: e.target.value, page: "/page6" })
            }
          />
          <Typography mb={1} style={{ fontWeight: "bold", color: "#00224b" }}>
            <EmailIcon />{" "}
            <span style={{ marginLeft: "5px" }}>
              {" "}
              EMAIL:
            </span>{" "}
          </Typography>
          <TextField
          type="email"
            sx={{ width: "100%", border: "1px solid #e0e3e5", marginBottom: 5 }}
            id="outlined"
            placeholder="JeniferLoveWood@mail.com"
            onChange={(e) =>
              setContact({ ...contact, email: e.target.value, page: "/page6" })
            }
          />
          <FormControlLabel
            value="yes"
            style={{ color: "grey" }}
            control={<Checkbox />}
            label="I agree to receive a summary of the survey findings"
            labelPlacement="end"
            onChange={(e) =>
              setContact({
                ...contact,
                wantResult: e.target.value,
                page: "/page6",
              })
            }
          />
          <FormControlLabel
            style={{ color: "grey" }}
            value="yes"
            control={<Checkbox />}
            label="I agree to be contacted by SOMEHOB in the future research"
            labelPlacement="end"
            onChange={(e) =>
              setContact({
                ...contact,
                allowedContact: e.target.value,
                page: "/page6",
              })
            }
          />{" "}
          <Typography
            my={2}
            style={{ fontStyle: "italic" }}
            variant="inherit"
            align="center"
          >
            <span style={{ fontWeight: "bold" }}>Please note:</span> your name
            and email address will note be linked with your survey answers
          </Typography>
          <Stack direction="row" justifyContent="center" my={4}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <Button variant="outlined" sx={{ width: "200px" }}>
                Back to the survey{" "}
              </Button>{" "}
            </Link>
            <Link to="/page7" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="inherit"
                sx={{ width: "300px", marginLeft: "20px" }}
                onClick={dispatch(UserUpdate(contact))}
              >
                Submit
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
export default Page6;
