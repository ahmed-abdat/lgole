

import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
import Home from "./pages/home";
import "./App.css";
import NoteFound from "./pages/noteFound";
import { Suspense } from "react";


function App() {


  // setup a rout for the app with react router dom
  return (
    <Router>
      <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
