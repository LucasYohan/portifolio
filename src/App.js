import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";

function App() {
  return (
    <BrowserRouter className='body'>
      {<Routes>
        <Route path="/" element={<Home />} />
      </Routes>}
    </BrowserRouter>
  );
}

export default App;