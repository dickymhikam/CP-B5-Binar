// import React from 'react'

import HeaderAkun from "../components/Akun/HeaderAkun";
import Nav from "../components/Home/Nav";
import NavbarBottom from "../components/Home/NavbarBottom";

const Notifikasi = () => {
  return (
    <>
      <Nav />
      <HeaderAkun />
      <div className="container py-2">
        <div className="card card-akun">
          <div className="card-header d-flex align-items-center justify-content-center">
            Notifikasi
          </div>
          <div className="card-body"></div>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default Notifikasi;
