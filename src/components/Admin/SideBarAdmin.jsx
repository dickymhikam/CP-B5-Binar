import { Link, useLocation } from "react-router-dom";

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
        <div className="navbar-brand"></div>
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