import FinalPage from "./pages/FinalPage";
import FirstPage from "./pages/FirstPage";
import Questions from "./pages/Questions";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello</h1>
     
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/finalpage" element={<FinalPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
