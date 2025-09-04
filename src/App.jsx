import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="content">
        <h1>Meu conteúdo</h1>
      </main>
    </div>
  );
}

export default App;
