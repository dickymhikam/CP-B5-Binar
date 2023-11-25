import NavAdmin from "../components/Admin/NavAdmin";
import SideBarAdmin from "../components/Admin/SideBarAdmin";
import "../styles/Admin.css"

const KelasAdmin = () => {
  return (
    <>
        <div className="dashboard-admin-wrapper">
            <div className="admin-header">
                <SideBarAdmin />
            </div>
            <div className="admin-body">
                <NavAdmin />
                <div className="p-5">
                    <p>isi body KELAS disini</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default KelasAdmin;