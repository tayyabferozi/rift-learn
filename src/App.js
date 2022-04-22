import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
