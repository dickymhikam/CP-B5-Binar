import "../../styles/Nav.css";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import btnsearch from "../../assets/bx_search-alt.svg";
import btnlogin from "../../assets/fi_log-in.svg";
import btnNotif from "../../assets/fi_bell.svg";
import btnUser from "../../assets/fi_user.svg";
import btnList from "../../assets/fi_list.svg";

const Nav = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <Link to={"/"}>
          <div className="navbar-brand"></div>
        </Link>
        <div className="navbar-search">
          <input
            className="input-search"
            type="text"
            placeholder="Cari Kursus terbaik..."
          />
          <button className="button-search">
            <img src={btnsearch} />
          </button>
        </div>
        {/* <Link to={"/login"}>
                    <button className="button-login"><img src={btnlogin} />Masuk</button>
                </Link> */}
        <div className="button-menu d-flex align-items-center">
          <Dropdown>
            <Dropdown.Toggle className="bg-transparent d-flex align-items-center border-0 ">
              <img src={btnList}/>
              {/* <p className="mb-0">Kelas</p> */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >
                <Link to={"/kelas-saya"}>
                  <button className="btn-kelas">Kelas Saya</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/topik-kelas"}>
                  <button className="btn-kelas">Topik Kelas</button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to={"/notifikasi"}>
            <button className="btn-user pt-1">
              <img src={btnNotif} />
            </button>
          </Link>
          <Link to={"/profil-saya"}>
            <button className="btn-user">
              <img src={btnUser} />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
