import { useState, useEffect } from "react";

import NavAdmin from "../../components/Admin/NavAdmin";
import SideBarAdmin from "../../components/Admin/SideBarAdmin";
import CardAdmin from "../../components/Admin/CardAdmin";
import TableAdminKelas from "../../components/Admin/TableAdminKelas";
import Footer from "../../components/Home/Footer";

import "../../styles/Admin/TableKelasAdmin.css";
import { searchManageClass, getManageClass } from "../../services/apiAdmin";

const KelasAdmin = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.length > 0) {
          const data = await searchManageClass(query);
          setSearchResults(data);
        } else {
          const data = await getManageClass();
          setSearchResults(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
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
          <NavAdmin
            query={query}
            setQuery={setQuery}
            setSearchResults={setSearchResults}
          />
          <div className="px-5 pt-5">
            <CardAdmin />
          </div>
          <div className="p-5">
            <TableAdminKelas searchResults={searchResults} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default KelasAdmin;