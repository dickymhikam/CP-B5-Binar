// import React from 'react'
import fiHome from "../assets/iconamoon_home-bold.svg";
import fiNotif from "../assets/pajamas_notifications.svg";
import fiKelas from "../assets/Vector.svg";
import fiKursus from "../assets/cil_list.svg";
import fiAkun from "../assets/tdesign_user.svg";
import { Link } from "react-router-dom";
import "../styles/NavbarBottom.css";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom-wrapper d-flex align-items-center justify-content-center gap-2 text-center sticky-bottom align-content-center">
      <div className="menu">
        <Link to={"/"} className="text-link">
          <img src={fiHome} alt="Beranda" />
          Beranda
        </Link>
      </div>
      <div className="menu">
        <img src={fiNotif} alt="Beranda" />
        <Link to={"/"} className="text-link">
          Notifikasi
        </Link>
      </div>
      <div className="menu">
        <Link to={"/kelas-saya"} className="text-link">
          <img src={fiKelas} alt="Beranda" />
          Kelas
        </Link>
      </div>
      <div className="menu">
        <Link to={"/topik-kelas"} className="text-link">
          <img src={fiKursus} alt="Beranda" />
          Kursus
        </Link>
      </div>
      <div className="menu">
        <img src={fiAkun} alt="Beranda" />
        <Link to={"/"} className="text-link">
          Akun
        </Link>
      </div>
    </div>
  );
};

export default NavbarBottom;
