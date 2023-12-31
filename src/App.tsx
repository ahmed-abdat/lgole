import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import NoteFound from "./pages/noteFound";
import { Suspense } from "react";


function App() {


  // setup a rout for the app with react router dom
  return (
    <Router>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NoteFound />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
