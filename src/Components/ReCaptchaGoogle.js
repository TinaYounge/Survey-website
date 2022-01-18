import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptchaGoogle() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  //Link to get the key:" https://cloud.google.com/recaptcha-enterprise/docs/create-key"
  return (
    <div>
      <ReCAPTCHA sitekey="6LfGfRweAAAAADR2U3Cws2eSWmFPFYniR_IOdD6G" onChange={onChange} />
      </div>
  );
}

export default ReCaptchaGoogle;