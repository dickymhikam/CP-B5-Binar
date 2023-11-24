// import React from 'react'
import fiArrowLeft from "../../assets/fi_arrow-left.svg";
import { Link } from "react-router-dom";
import "../../styles/HeaderAkun.css";

const HeaderAkun = () => {
  return (
    <div className="background">
      <div className="container">
        <Link
          to={"/"}
          className="d-flex align-items-center py-4 gap-2 text-decoration-none kembali"
        >
          <img src={fiArrowLeft} alt="" />
          <p className="mb-0 back-to-home ms-3">Kembali Ke Beranda</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAkun;
