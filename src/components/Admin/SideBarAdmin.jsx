import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <>
      <div className="sidebar-admin-wrapper">
        <div className="navbar-brand"></div>
        <div className="sidebar-admin-menu">
          <Link to={"/admin/dashboard"} className="sidebar-admin-item">
            <p >Dashboard</p>
          </Link>
          <Link to={"/admin/kelas"} className="sidebar-admin-item">
            <p>Kelola Kelas</p>
          </Link>
          <Link to={"/admin/login"} className="sidebar-admin-item">
            <p>Keluar</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBarAdmin;