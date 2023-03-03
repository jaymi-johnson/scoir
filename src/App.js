import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./globals/theme";

import { Header } from "./components/layout";
import Dogs from "./components/dogs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dogs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
