import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Intro() {
  return (
    <Box>
      <Box>
        <Typography 
          variant="h4"
          align="center"
          mt={3}
          mb={4}
          style={{ fontWeight: "bold" }}
        >
          Thank you for your interest
        </Typography>
        <Typography 
          variant="inherit"
          align="center"
          style={{
            fontStyle: "italic",
            borderBottom: "solid",
            margin: "10px 0 20px",
            textAlign: "center",
            width: "100%",
            lineHeight: "0.1rem",
            borderWidth: "0.5px",
          }}
        >
          <span
            style={{
              padding: "10px",
              background: "#ffff",
            }}
          >
            Please read the information below
          </span>
        </Typography>
        <Typography  variant="inherit" align="center">
          Once you have read and understood the information, If you agree to
          take part in the reserch, click on the{" "}
          <span style={{ fontWeight: "bold" }}>"I Agree"</span> button to begin
          the survey.
        </Typography>
      </Box>
      <Box mt={3} sx={{ p: 2 }} style={{ background: "#f5f5f5" }}>
        <Typography color="#07264c" variant="h6">
          Why are we asking you to take part?
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>

        <Typography color="#07264c" variant="h6" mt={3}>
          What would I need to do?{" "}
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Typography color="#07264c" variant="h6" mt={3}>
          How will we use the information{" "}
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Typography color="#07264c" mt={1}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci veliw
        </Typography>
        <Typography color="#07264c" variant="h6" mt={3}>
          What if I change my mind?{" "}
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Lorem Ipsum is the single greatest threat. We are not - we are not
          keeping up with other websites. Lorem Ipsum best not make any more
          threats to your website. It will be met with fire and fury like the
          world has never seen. Does everybody know that pig named Lorem Ipsum?
          An ‘extremely credible source’ has called my office and told me that
          Barack Obama’s placeholder text is a fraud.
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci veliw
        </Typography>
        <Typography color="#07264c" variant="h6" mt={3}>
          How can I find out the result of research?{" "}
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          A handcrafted, small-batch, artisinal pour-over version of the classic
          lorem ipsum generator, Hipster Ipsum will give your mocks that blue
          collar touch.
        </Typography>
        <Typography color="#07264c" variant="h6" mt={3}>
          Who do I contact to ask question, or If I want to complaint?{" "}
        </Typography>
        <Typography color="#07264c" mt={1} variant="inherit">
          A handcrafted, small-batch, artisinal pour-over version of the classic
          lorem ipsum generator, Hipster Ipsum will give your mocks that blue
          collar touch{" "}
          <span style={{ fontWeight: "bold" }}>(abc@hmail.com)</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Intro;
