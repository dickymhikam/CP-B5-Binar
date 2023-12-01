import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import KelasBerjalan from "./pages/KelasBerjalan";
import TopikKelas from "./pages/TopikKelas";
import PaySuccess from "./pages/PembayarnBerhasil";
import OTP from "./pages/OTP";
import ProfilSaya from "./pages/ProfilSaya";
import UbahPassword from "./pages/UbahPassword";
import RiwayatPembayaran from "./pages/RiwayatPembayaran";
import Notifikasi from "./pages/Notifikasi";
import LoginAdmin from "./components/Admin/LoginAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import KelasAdmin from "./pages/KelasAdmin";
import DetailKelas from "./pages/DetailKelas";
import PembayaranDetail from "./pages/PembayaranDetail";
import ResetPass from "./components/Auth/ResetPass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/kelas-saya" element={<KelasBerjalan />} />
          <Route path="/topik-kelas" element={<TopikKelas />} />
          <Route path="/detail-kelas" element={<DetailKelas />} />
          <Route path="/detail-pembayaran" element={<PembayaranDetail />} />
          <Route path="/payment-success" element={<PaySuccess />} />
          <Route path="/profil-saya" element={<ProfilSaya />} />
          <Route path="/ubah-password" element={<UbahPassword />} />
          <Route path="/riwayat-pembayaran" element={<RiwayatPembayaran />} />
          <Route path="/notifikasi" element={<Notifikasi />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/kelas" element={<KelasAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
