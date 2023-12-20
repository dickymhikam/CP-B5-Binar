import { Link, useLocation } from "react-router-dom";

import "../../styles/NavbarBottom.css";
import fiHome from "../../assets/iconamoon_home-bold.svg";
import fiNotif from "../../assets/pajamas_notifications.svg";
import fiKelas from "../../assets/Vector.svg";
import fiKursus from "../../assets/cil_list.svg";
import fiAkun from "../../assets/tdesign_user.svg";

const NavbarBottom = () => {
  const location = useLocation();
  
  const getButtonText = () => {
    if (location.pathname === "/") {
      return "Beranda";
    } else if (location.pathname === "/profil-saya") {
      return "Akun";
    } else if (location.pathname === "/notifikasi") {
      return "Notifikasi";
    } else if (location.pathname === "/kelas-saya") {
      return "Kelas";
    } else if (location.pathname === "/topik-kelas") {
      return "Kursus";
    } else {
      return null;
    }
  };

  const buttonText = getButtonText();

  return (
    <div className="navbar-bottom-wrapper d-flex justify-content-center gap-2 text-center sticky-bottom align-content-center">
      <Link to={"/"} className="text-link">
        {location.pathname === "/" ? (
          <div className="menu-default">
            <img src={fiHome} alt="Beranda" />
            {buttonText}
          </div>
        ) : (
          <div className="menu">
            <img src={fiHome} />
            Beranda
          </div>
        )}
      </Link>
      <Link to={"/notifikasi"} className="text-link">
        {location.pathname === "/notifikasi" ? (
          <div className="menu-default">
            <img src={fiNotif} />
            {buttonText}
          </div>
        ) : (
          <div className="menu">
            <img src={fiNotif} />
            Notifikasi
          </div>
        )}
      </Link>
      <Link to={"/kelas-saya"} className="text-link">
        {location.pathname === "/kelas-saya" ? (
          <div className="menu-default">
            <img src={fiKelas} />
            {buttonText}
          </div>
        ) : (
          <div className="menu">
            <img src={fiKelas} />
            Kelas
          </div>
        )}
      </Link>
      <Link to={"/topik-kelas"} className="text-link">
        {location.pathname === "/topik-kelas" ? (
          <div className="menu-default">
            <img src={fiKursus} />
            {buttonText}
          </div>
        ) : (
          <div className="menu">
            <img src={fiKursus} />
            Kursus
          </div>
        )}
      </Link>
      <Link to={"/profil-saya"} className="text-link">
        {location.pathname === "/profil-saya" ? (
          <div className="menu-default">
            <img src={fiAkun} />
            {buttonText}
          </div>
        ) : (
          <div className="menu">
            <img src={fiAkun} />
            Akun
          </div>
        )}
        
      </Link>
    </div>
  );
};

export default NavbarBottom;
