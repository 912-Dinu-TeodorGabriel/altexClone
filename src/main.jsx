import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styling/main.css'
import Search from "./pages/Search";
import Specs from "./pages/Specs";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
          <Route index element={<Search product={'all'} />} />
          <Route path="/lap" element={<Search product={'laptops'} />} />
          <Route path="/phone" element={<Search product={'phones'}/>} />
          <Route path="/tv" element={<Search product={'tv'}/>} />
          <Route path="/product/:productId" element={<Specs/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

