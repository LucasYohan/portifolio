import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Contatos from "./routes/Contatos/Contatos";
import Container from "./layout/Container";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"

function App() {
  return (
    <Container>
      <BrowserRouter basename="/portifolio">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contatos" element={<Contatos />} />
            </Routes>
          </div>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;