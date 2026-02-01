import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";
import Framework from "./pages/Framework";
import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

