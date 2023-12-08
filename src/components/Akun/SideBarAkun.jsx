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
            <img src={FiEdit} alt=""/>
            <p className="mb-0 list-name ">Profil Saya</p>
          </li>
        </Link>
        <Link to={"/ubah-password"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiSetting} alt=""/>
            <p className="mb-0 list-name ">Ubah Password</p>
          </li>
        </Link>
        <Link to={"/riwayat-pembayaran"} className="text-decoration-none">
          <li className="list-item d-flex align-items-center gap-2">
            <img src={FiCart} alt=""/>
            <p className="mb-0 list-name ">Riwayat Pembayaran</p>
          </li>
        </Link>
        <li className="list-item d-flex align-items-center gap-2">
          <img src={FiLogOut} alt=""/>
          <p
            className="mb-0 list-name"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >Log Out</p>
        </li>
      </ul>
    </>
  );
};

export default SideBarAkun;
