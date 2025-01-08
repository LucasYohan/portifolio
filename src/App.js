import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Projetos from "./routes/Projetos/Projetos"
import Contatos from "./routes/Contatos/Contatos";
import "./App.css"


function App() {
  return (
    <BrowserRouter className='body'>
      {<Routes>
        <Route path="/portifolio" element={<Home />} />
        <Route path="/portifolio/projetos" element={<Projetos />} />
        <Route path="/portifolio/contatos" element={<Contatos />} />
      </Routes>}
    </BrowserRouter>
  );
}

export default App;