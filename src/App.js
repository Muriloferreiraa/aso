import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ASO from "./components/aso";
import Cadastro from "./components/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aso" element={<ASO />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
