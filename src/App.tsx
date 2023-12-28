
import Header from "./layout/Header";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
import Home from "./pages/home";
import Footer from "./pages/Footer";
import "./App.css";
import NoteFound from "./pages/noteFound";


function App() {


  // setup a rout for the app with react router dom
  return (
    <Router>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
