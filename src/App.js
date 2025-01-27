import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Contatos from "./routes/Contatos/Contatos";
import Container from "./layout/Container";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Projeto1 from "./routes/Projetos/projeto1/Projeto"
import Projeto2 from "./routes/Projetos/projeto2/Projeto"
import Projeto3 from "./routes/Projetos/projeto3/Projeto"
import Projeto4 from "./routes/Projetos/projeto4/Projeto"
import Projeto5 from "./routes/Projetos/projeto5/Projeto"


function App() {
  return (
    <Container>
      <BrowserRouter basename="/portifolio">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contatos" element={<Contatos />} />
              <Route path="/Projeto1" element={<Projeto1 />} />
              <Route path="/Projeto2" element={<Projeto2 />} />
              <Route path="/Projeto3" element={<Projeto3 />} />
              <Route path="/Projeto4" element={<Projeto4 />} />
              <Route path="/Projeto5" element={<Projeto5 />} />
            </Routes>
          </div>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;