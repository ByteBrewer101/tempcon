

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TempCalc } from "./pages/TempCalc";
import { GuessGame } from "./pages/GuessingGame";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/game" element={<GuessGame />} />
        <Route path="/temp" element={<TempCalc />} />
      </Routes>
    </Router>
  );
}

export default App;
