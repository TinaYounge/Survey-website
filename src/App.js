import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Bottom from "./Components/Bottom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#07264c",
      },
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
        </Routes>
        <Bottom />
      </ThemeProvider>
    </div>
  );
}

export default App;
