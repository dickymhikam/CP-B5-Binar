import { Link, useLocation } from "react-router-dom";
import brand from "../../assets/brand.svg";

const SideBarAdmin = () => {
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

  return (
    <>
      <div className="sidebar-admin-wrapper">
        <div className="navbar-brand gap-2">
          <img src={brand} alt="" />
          <h5 className="title-brand">LearnX</h5>
        </div>
        <div className="sidebar-admin-menu">
          <Link to={"/admin"} className="sidebar-admin-item">
            {location.pathname === "/admin" ? (
              <div className="sidebar-texts">
                <p >{buttonText}</p>
              </div>
            ) : (
              <p>Dashboard</p>
            )}
          </Link>
          <Link to={"/admin/kelas"} className="sidebar-admin-item">
            {location.pathname === "/admin/kelas" ? (
              <div className="sidebar-texts">
                <p >{buttonText}</p>
              </div>
            ) : (
              <p >Kelola Kelas</p>
            )}
          </Link>
          <Link className="sidebar-admin-item" onClick={() => {
              localStorage.removeItem("tokenAdmin");
              window.location.href = "/admin/login";
            }}>
            <p>Keluar</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBarAdmin;