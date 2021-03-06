import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Bottom from "./Components/Bottom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Exit from "./Pages/Exit";

function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#07264c",
      },
      secondary:{
        main:"#fffff"
      }
    },
    typography: {
      button: {
        textTransform: "none",
        fontSize: 18,
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/exit" element={<Exit />} />

        </Routes>
        <Bottom />
      </ThemeProvider>
    </div>
  );
}

export default App;
