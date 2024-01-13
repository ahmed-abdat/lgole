import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import { Suspense } from "react";
import Transfer from "./pages/transfer";


function App() {


  // setup a rout for the app with react router dom
  return (
    <Router>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
