import CardAdmin from "../components/Admin/CardAdmin";
import NavAdmin from "../components/Admin/NavAdmin";
import SideBarAdmin from "../components/Admin/SideBarAdmin";
import TableAdmin from "../components/Admin/TableAdmin";
import Footer from "../components/Home/Footer";

import "../styles/Admin.css"

const DashboardAdmin = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SideBarAdmin />
            </div>
            <div className="admin-body">
                <NavAdmin />
                <div className="px-5 pt-5">
                    <CardAdmin/>
                </div>
                <div className="p-5">
                    <TableAdmin/>
                </div>
                <Footer />
            </div>
        </div>
    </>
  )
}

export default DashboardAdmin;