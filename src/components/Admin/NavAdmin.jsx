import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import btnList from "../../assets/fi_list.svg";
import btnsearch from "../../assets/bx_search-alt.svg";
import { Link } from 'react-router-dom';

const NavAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="navbar-admin-wrapper">
        <div className='sidebar-admin-offcanvas'>
          <Button variant="info" onClick={handleShow}>
            <img src={btnList}/>
          </Button>

          <Offcanvas className="sidebar-offcanvas-body" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <h1>Hi, Admin!</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={"/admin/dashboard"} className="offcanvas-body-item">
                <p>Dashboard</p>
              </Link>
              <Link to={"/admin/kelas"} className="offcanvas-body-item">
                <p>Kelola Kelas</p>
              </Link>
              <Link to={"/admin/login"} className="offcanvas-body-item">
                <p>Keluar</p>
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="admin-user-text">Hi, Admin!</div>
        <div className="admin-search">
          <input type="text" placeholder="Cari"/>
          <button className="btn-admin-search">
            <img src={btnsearch} />
          </button>
        </div>
      </div>
    </>
  )
}

export default NavAdmin;