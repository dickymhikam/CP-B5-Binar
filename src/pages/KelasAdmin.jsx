import NavAdmin from "../components/Admin/NavAdmin";
import SideBarAdmin from "../components/Admin/SideBarAdmin";
import CardAdmin from "../components/Admin/CardAdmin";
import TableAdminKelas from "../components/Admin/TableAdminKelas";
import "../styles/TableKelasAdmin.css";

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
            <CardAdmin />
          </div>
          <div className="p-5">
            <TableAdminKelas />
          </div>
        </div>
      </div>
    </>
  );
};

export default KelasAdmin;
