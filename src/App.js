import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";
import Landing from "./screens/Landing";
import Learn from "./screens/Learn";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/learn" element={<Learn />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
