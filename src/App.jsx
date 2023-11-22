import Home from './pages/Home';
import Login from "./components/Login";
import Register from "./components/register";
import KelasBerjalan from "./pages/KelasBerjalan";
import TopikKelas from "./pages/TopikKelas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/kelas-saya" element={<KelasBerjalan />} />
          <Route path="/topik-kelas" element={<TopikKelas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
