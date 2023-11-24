// import React from "react";
import FiEdit from "../../assets/fi_edit-3.svg";
import FiSetting from "../../assets/fi_settings.svg";
import FiCart from "../../assets/mdi_cart-outline.svg";
import FiLogOut from "../../assets/fi_log-out.svg";
import { Link } from "react-router-dom";
import "../../styles/SideBarAkun.css";

const SideBarAkun = () => {
  return (
    <>
      <ul className="list-group gap-2 py-3">
        <Link to={"/profil-saya"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiEdit} alt="" className="pb-3"/>
            <p className="mb-0 list-name pb-3">Profil Saya</p>
          </li>
        </Link>
        <Link to={"/ubah-password"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiSetting} alt="" className="pb-3"/>
            <p className="mb-0 list-name pb-3">Ubah Password</p>
          </li>
        </Link>
        <Link to={"/riwayat-pembayaran"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiCart} alt="" className="pb-3"/>
            <p className="mb-0 list-name pb-3">Riwayat Pembayaran</p>
          </li>
        </Link>
        <Link to={"/logout"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiLogOut} alt="" className="pb-3"/>
            <p className="mb-0 list-name pb-3">Log Out</p>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default SideBarAkun;
