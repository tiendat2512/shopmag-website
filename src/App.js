import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import HomePage from './Pages/Home/HomePage';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    nigga: createColor('#000000'),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <HomePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
