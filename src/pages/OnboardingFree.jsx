import { useParams, Link, useNavigate } from "react-router-dom";

import Nav from "../components/Home/Nav";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/PaySuccess.css";
import onboarding from "../assets/group.svg";

const OnboardingFree = () => {
  const {kodeKelas} = useParams();
  const navigate = useNavigate();

  const handleFreeClass = (event) => {
    event.preventDefault();
    navigate(`/detail-kelas/${kodeKelas}`);
  }

  return (
    <>
      <div className="bg-layar-hp">
        <Nav />

        <div className="content text-center">
          <h3 className="header-text mt-4">Onboarding...</h3>
          <img src={onboarding} alt="" className="img-success mt-5" />
          <p className="main-text mt-5">
            Persiapkan hal berikut untuk belajar yang maksimal:
          </p>
          <p className="second-text">
            Mempunyai akun Figma atau Install Adobe XD Menggunakan internet minimal kecepatan 2Mbps Belajar di tempat yang nyaman
          </p>
          <button
            className="btn-start"
            onClick={handleFreeClass}
            >
            Ikuti Kelas
          </button>
          <p className="footer-text">
            <Link to={"/"} className="text-decoration-none">Kembali Ke Beranda</Link>
          </p>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default OnboardingFree;