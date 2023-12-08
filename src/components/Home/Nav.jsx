import "../../styles/Nav.css";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import btnsearch from "../../assets/bx_search-alt.svg";
import btnNotif from "../../assets/fi_bell.svg";
import btnUser from "../../assets/fi_user.svg";
import btnList from "../../assets/fi_list.svg";
import btnLogin from "../../assets/fi_log-in.svg";

const Nav = () => {
  const location = useLocation();
  const getButtonText = () => {
    if (location.pathname === "/profil-saya") {
      return "Akun";
    } else if (location.pathname === "/notifikasi") {
      return "Notifikasi";
    } else if (location.pathname === "/kelas-saya") {
      return "Kelas Saya";
    } else if (location.pathname === "/topik-kelas") {
      return "Topik Kelas";
    } else {
      return null;
    }
  };
  const buttonText = getButtonText();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <nav className="navbar-wrapper">
        <Link to={"/"} className="text-decoration-none">
          <div className="navbar-brand"></div>
        </Link>
        <div className="navbar-search">
          <input
            className="input-search"
            type="text"
            placeholder="Cari Kursus terbaik..."
          />
          <button className="button-search">
            <img src={btnsearch} alt="Search" />
          </button>
        </div>
        {isLoggedIn ? (
            <div className="button-menu d-flex align-items-center">
              <Dropdown>
              <Dropdown.Toggle className="bg-transparent d-flex align-items-center border-0 ">
                {location.pathname === "/kelas-saya" || location.pathname === "/topik-kelas" ? (
                  <button className="btn-menu-on">
                    <img src={btnList}/>
                    <div className="mx-2">
                      {buttonText}
                    </div>
                  </button>
                ) : (
                  <button className="btn-menu-off">
                    <img src={btnList}/>
                  </button>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={"/kelas-saya"} className="text-decoration-none">
                  <button className="btn-dropdown-item">Kelas Saya</button>
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/topik-kelas"} className="text-decoration-none">
                  <button className="btn-dropdown-item">Topik Kelas</button>
                </Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              <Link to={"/notifikasi"} className="text-decoration-none">
                {location.pathname === "/notifikasi" ? (
                  <button className="btn-menu-on">
                    <img src={btnNotif} className="pt-1"/>
                    <div className="mx-2">
                      {buttonText}
                    </div>
                  </button>
                ) : (
                  <button className="btn-menu-off">
                    <img src={btnNotif}/>
                  </button>
                )}
              </Link>
              <Link to={"/profil-saya"} className="text-decoration-none">
                {location.pathname === "/profil-saya" ? (
                  <button className="btn-menu-on">
                    <img src={btnUser}/>
                    <div className="mx-2">
                      {buttonText}
                    </div>
                  </button>
                ) : (
                  <button className="btn-menu-off">
                    <img src={btnUser}/>
                  </button>
                )}
              </Link>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="button-login"><img src={btnLogin} />Masuk</button>
            </Link>
          )}
          
      </nav>
    </>
  );
};

export default Nav;
