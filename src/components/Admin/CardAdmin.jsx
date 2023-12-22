import { useState, useEffect } from "react";
import { getActiveUserAndCourse } from "../../services/apiAdmin";

import "../../styles/Admin/CardAdmin.css";

import fiAdmin from "../../assets/icon-card-admin.svg";

const CardAdmin = () => {
  const [activeUserAndCourse, setActiveUserAndCourse] = useState({
    activeUser: 0,
    activeClass: 0,
    premiumClass: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActiveUserAndCourse();
        setActiveUserAndCourse(data);
      } catch (error) {
        console.error("error fetching: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-3 g-2 card-dashboard">
          <div className="col">
            <div
              className="card card-users d-flex justify-content-center align-items-center"
              style={{ maxWidth: "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">{activeUserAndCourse.activeUser}</p>
                  <span className="title"> Active Users</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-active d-flex justify-content-center align-items-center"
              style={{ maxWidth: "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">{activeUserAndCourse.activeClass}</p>
                  <span className="title">Active Class</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-premium d-flex justify-content-center align-items-center"
              style={{ maxWidth: "275px", width: "100%", height: "108px" }}
            >
              <div className="content-card">
                <div className="icon-admin">
                  <img src={fiAdmin} className="icon-admin" alt="..." />
                </div>
                <div className="writing">
                  <p className="number">{activeUserAndCourse.premiumClass}</p>
                  <span className="title"> Premium Class</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAdmin;
