
import Header from "./layout/Header";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
import Home from "./pages/home";
import "./App.css";


function App() {


  // setup a rout for the app with react router dom
  return (
    <Router>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
