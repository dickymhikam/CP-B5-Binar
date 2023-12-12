import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import OTP from "./pages/OTP";
import EmailReset from "./components/Auth/EmailReset";
import ResetPass from "./components/Auth/ResetPass";
import KelasBerjalan from "./pages/KelasBerjalan";
import TopikKelas from "./pages/TopikKelas";
import DetailKelas from "./pages/DetailKelas";
import PembayaranDetail from "./pages/PembayaranDetail";
import PaySuccess from "./pages/PembayarnBerhasil";
import ProfilSaya from "./pages/ProfilSaya";
import UbahPassword from "./pages/UbahPassword";
import RiwayatPembayaran from "./pages/RiwayatPembayaran";
import Notifikasi from "./pages/Notifikasi";
import LoginAdmin from "./components/Admin/LoginAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import KelasAdmin from "./pages/KelasAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/email-reset" element={<EmailReset />}/>
          <Route path="/reset-password" element={<ResetPass />} />
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
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  );
}

export default App;
