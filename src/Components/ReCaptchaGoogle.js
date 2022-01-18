import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptchaGoogle() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  //Link to get the key:" https://cloud.google.com/recaptcha-enterprise/docs/create-key"
  return (
    <div>
      <ReCAPTCHA sitekey="6LdP5RweAAAAACCSIzlNQAOHx3erAbYBCQ5ollR8" onChange={onChange} />
      </div>
  );
}

export default ReCaptchaGoogle;