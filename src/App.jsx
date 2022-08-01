import FinalPage from "./pages/FinalPage";
import FirstPage from "./pages/FirstPage";
import Questions from "./pages/Questions";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Box, Container } from "@mui/system";
import './index.css'

function App() {
  return (
    <div className='firstPage'>
      <Container maxWidth="md">
        <Box textAlign="center" mt={8}>
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage/>}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/finalpage" element={<FinalPage />}></Route>
          </Routes>
        </Router>
        </Box>
      
      </Container>


    </div>
  );
}

export default App;
