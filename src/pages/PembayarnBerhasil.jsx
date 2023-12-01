import { useState } from "react";
// import { Link } from "react-router-dom";

import fisuccess from "../assets/payment-success.png";

import Nav from "../components/Home/Nav";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/PaySuccess.css";

import ModalOnboardingKelas from "../components/Modals/ModalOnboardingKelas";

const PaySuccess = () => {
  const [modalShowOnboarding, setModalShowOnboarding] = useState(false);
  return (
    <>
      <Nav />

      <div className="content text-center">
        <h3 className="header-text mt-4">Selamat!</h3>
        <img src={fisuccess} alt="" className="img-success mt-5" />
        <p className="main-text mt-5">
          Transaksi pembayaran kelas premium berhasil!{" "}
        </p>
        <p className="second-text">E-receipt telah dikirimkan ke email.</p>

        <button
          className="btn-start"
          onClick={() => setModalShowOnboarding(true)}
        >
          Mulai Belajar
        </button>
        <ModalOnboardingKelas
          show={modalShowOnboarding}
          onHide={() => setModalShowOnboarding(false)}
        />
        <p className="footer-text">Kembali Ke Beranda</p>
      </div>
      <NavbarBottom />
    </>
  );
};

export default PaySuccess;
