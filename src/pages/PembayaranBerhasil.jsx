import { useState } from "react";
import { useParams } from "react-router-dom";

import fisuccess from "../assets/payment-success.png";
import Nav from "../components/Home/Nav";
import NavbarBottom from "../components/Home/NavbarBottom";
import ModalOnboardingKelas from "../components/Modals/ModalOnboardingKelas";

import "../styles/PaySuccess.css";

const PaySuccess = () => {
  const [modalShowOnboarding, setModalShowOnboarding] = useState(false);
  const {kode} = useParams();
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
          kode={kode}
        />
        <p className="footer-text">Kembali Ke Beranda</p>
      </div>
      <NavbarBottom />
    </>
  );
};

export default PaySuccess;
