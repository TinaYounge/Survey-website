import Page1 from "./Pages/Page1";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#07264c",
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Page1 />
      </ThemeProvider>
    </div>
  );
}

export default App;
