import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import btnList from "../../assets/fi_list.svg";
import btnsearch from "../../assets/bx_search-alt.svg";

const NavAdmin = ({ query, setQuery, setSearchResults }) => {
  const location = useLocation();
  const getButtonText = () => {
    if (location.pathname === "/admin") {
      return "Dashboard";
    } else if (location.pathname === "/admin/kelas") {
      return "Kelola Kelas";
    } else {
      return null;
    }
  };
  const buttonText = getButtonText();
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchClick = () => {
    setQuery(searchInput);
    setSearchInput(searchInput || "");
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="navbar-admin-wrapper">
        <div className="sidebar-admin-offcanvas">
          <Button variant="info" onClick={handleShow}>
            <img src={btnList} />
          </Button>

          <Offcanvas
            className="sidebar-offcanvas-body-admin"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1>Hi, Admin!</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={"/admin"} className="offcanvas-body-item">
                {location.pathname === "/admin" ? (
                  <div className="sidebar-texts">
                    <p>{buttonText}</p>
                  </div>
                ) : (
                  <p>Dashboard</p>
                )}
              </Link>
              <Link to={"/admin/kelas"} className="offcanvas-body-item">
                {location.pathname === "/admin/kelas" ? (
                  <div className="sidebar-texts">
                    <p >{buttonText}</p>
                  </div>
                ) : (
                  <p>Kelola Kelas</p>
                )}
              </Link>
              <Link to={"/admin/login"} className="offcanvas-body-item">
                <p>Keluar</p>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="admin-user-text">Hi, Admin!</div>
        <div className="admin-search">
          <input
            type="text"
            placeholder="Cari"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearchClick(searchInput);
              }
            }}
          />
          <button className="btn-admin-search" onClick={handleSearchClick}>
            <img src={btnsearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavAdmin;