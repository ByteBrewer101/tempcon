

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TempCalc } from "./pages/TempCalc";
import { GuessGame } from "./pages/GuessingGame";
import { HomePage } from "./pages/Home";
import { ContactPage } from "./pages/Contact";
import { SudokuSolver } from "./pages/Sudoku";
import { Scraper } from "./pages/WebScraper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GuessGame />} />
        <Route path="/temp" element={<TempCalc />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solver" element={<SudokuSolver/>} />
        <Route path="/scraper" element={<Scraper/>} />
      </Routes>
    </Router>
  );
}

export default App;
