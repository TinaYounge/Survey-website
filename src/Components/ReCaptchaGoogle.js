import { Button } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch} from "react-redux";
import { UserUpdate } from "../redux/UserInfo/UserAction";

function ReCaptchaGoogle({userInfo}) {
  const dispatch = useDispatch();

  function onChange(value) {
    console.log("Captcha value:", value);
    dispatch(UserUpdate({ ...userInfo, captcha: "Yes"}))
  }

  return (
    <div>
      <ReCAPTCHA sitekey="6LdP5RweAAAAACCSIzlNQAOHx3erAbYBCQ5ollR8" onChange={onChange} />
      <Button onClick={onChange} >Test Captcha</Button>
      </div>
  );
}

export default ReCaptchaGoogle;