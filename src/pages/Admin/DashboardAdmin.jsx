import { useState, useEffect } from "react";
import CardAdmin from "../../components/Admin/CardAdmin";
import NavAdmin from "../../components/Admin/NavAdmin";
import SideBarAdmin from "../../components/Admin/SideBarAdmin";
import TableAdmin from "../../components/Admin/TableAdmin";
import Footer from "../../components/Home/Footer";
import { searchDashboard, getPaymentStatus } from "../../services/apiAdmin";

import "../../styles/Admin/Admin.css";

const DashboardAdmin = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!(localStorage.getItem("tokenAdmin"))) {
        window.location.href = "/admin/login";
      } else {
        try {
          if (query.length > 2) {
            const data = await searchDashboard(query);
            setSearchResults(data);
          } else {
            const data = await getPaymentStatus();
            setSearchResults(data);
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchData();
  }, [query]);


  return (
    <>
      <div className="dashboard-admin-wrapper">
        <div className="admin-header">
          <SideBarAdmin />
        </div>
        <div className="admin-body">
          <NavAdmin query={query} setQuery={setQuery} />
          <div className="px-5 pt-5">
            <CardAdmin />
          </div>
          <div className="p-5">
            <TableAdmin searchResults={searchResults} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;