import { useContext, useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../../styles/FilterKelasOffCanvas.css";
import { getFilterClassBerjalan } from "../../services/api";
import ProgressContext from "../../context/ProgressClass";

const FilterKelasOffCanvas = ({ filterBerjalan, click }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleClose = () => setShowFilter(false);
  const handleShow = () => setShowFilter(true);

  const { progress } = useContext(ProgressContext);

  const [checkboxStateBerjalan, setCheckboxStateBerjalan] = useState({
    newest: false,
    popular: false,
    uiux: false,
    web: false,
    android: false,
    ios: false,
    data: false,
    business: false,
    semua_level: false,
    beginner_level: false,
    intermediate_level: false,
    advanced_level: false,
  });

  const handleBerjalan = (checkbox) => {
    setCheckboxStateBerjalan((prevState) => {
      const newState = { ...prevState, [checkbox]: !prevState[checkbox] };
      Object.keys(newState).forEach((key) => {
        if (key !== checkbox) {
          newState[key] = false;
        }
      });
      return newState;
    });
  };
  const [isClick, setIsClick] = useState(false);

  const handleClick = (isNewest, isPopular, category, level, type) => {
    if (isNewest === true) {
      setIsClick(true);
    } else if (isPopular === true) {
      setIsClick(true);
    } else if (category !== "") {
      setIsClick(true);
    } else if (level !== "") {
      setIsClick(true);
    } else if (type !== "") {
      setIsClick(false);
    }
    click(isClick);
  };

  const handleRemoveFilter = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (checkboxStateBerjalan.newest) {
      getFilterClassBerjalan(true, false, progress, "", "").then((data) => {
        filterBerjalan(data);
        handleClick(true, false, progress, "", "");
      });
    }
    if (checkboxStateBerjalan.popular) {
      getFilterClassBerjalan(false, true, progress, "", "").then((data) => {
        filterBerjalan(data);
        handleClick(false, true, progress, "", "");
      });
    }
    if (checkboxStateBerjalan.uiux) {
      getFilterClassBerjalan(false, false, progress, "UI/UX Design", "").then(
        (data) => {
          filterBerjalan(data);
          handleClick(false, false, progress, "UI/UX Design", "");
        }
      );
    }
    if (checkboxStateBerjalan.web) {
      getFilterClassBerjalan(
        false,
        false,
        progress,
        "Web Development",
        ""
      ).then((data) => {
        filterBerjalan(data);
        handleClick(false, false, progress, "Web Development", "");
      });
    }
    if (checkboxStateBerjalan.android) {
      getFilterClassBerjalan(
        false,
        false,
        progress,
        "Android Development",
        ""
      ).then((data) => {
        filterBerjalan(data);
        handleClick(false, false, progress, "Android Development", "");
      });
    }
    if (checkboxStateBerjalan.ios) {
      getFilterClassBerjalan(
        false,
        false,
        progress,
        "IOS Development",
        ""
      ).then((data) => {
        filterBerjalan(data);
        handleClick(false, false, progress, "IOS Development", "");
      });
    }
    if (checkboxStateBerjalan.data) {
      getFilterClassBerjalan(false, false, progress, "Data Science", "").then(
        (data) => {
          filterBerjalan(data);
          handleClick(false, false, progress, "Data Science", "");
        }
      );
    }
    if (checkboxStateBerjalan.business) {
      getFilterClassBerjalan(
        false,
        false,
        progress,
        "Business Intelligence",
        ""
      ).then((data) => {
        filterBerjalan(data);
        handleClick(false, false, progress, "Business Intelligence", "");
      });
    }
    if (checkboxStateBerjalan.semua_level) {
      getFilterClassBerjalan(
        false,
        false,
        progress,
        "",
        ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
        ""
      ).then((data) => {
        filterBerjalan(data);
        handleClick(
          false,
          false,
          progress,
          "",
          ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
          ""
        );
      });
    }
    if (checkboxStateBerjalan.beginner_level) {
      getFilterClassBerjalan(false, false, progress, "", "BEGINNER").then(
        (data) => {
          filterBerjalan(data);
          handleClick(false, false, progress, "", "BEGINNER");
        }
      );
    }
    if (checkboxStateBerjalan.intermediate_level) {
      getFilterClassBerjalan(false, false, progress, "", "INTERMEDIATE").then(
        (data) => {
          filterBerjalan(data);
          handleClick(false, false, progress, "", "INTERMEDIATE");
        }
      );
    }
    if (checkboxStateBerjalan.advanced_level) {
      getFilterClassBerjalan(false, false, progress, "", "ADVANCED").then(
        (data) => {
          filterBerjalan(data);
          handleClick(false, false, progress, "", "ADVANCED");
        }
      );
    }
  }, [checkboxStateBerjalan, progress]);

  return (
    <>
      <Button
        className="btn-filter-off d-flex align-items-center gap-2"
        onClick={handleShow}
      >
        Filter
      </Button>

      <Offcanvas
        className="sidebar-offcanvas-filter-body"
        show={showFilter}
        onHide={handleClose}
        placement="bottom"
      >
        <Offcanvas.Body className="filter-offcanvas">
          <div className="container ps-3">
            <h5 className="mb-3 pt-3 filters-tagline">Filter</h5>
            <div className="checkbox-filter gap-2">
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("newest")}
                  checked={checkboxStateBerjalan.newest}
                  type="checkbox"
                  id="checkbox1"
                />
                <label htmlFor="checkbox1" className="checkbox-label">
                  Paling Baru
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("popular")}
                  checked={checkboxStateBerjalan.popular}
                  type="checkbox"
                  id="checkbox2"
                />
                <label htmlFor="checkbox2" className="checkbox-label">
                  Paling Populer
                </label>
              </div>
            </div>

            <h5 className="mt-4 mb-3 filters-tagline">Kategori</h5>
            <div className="checkbox-kategori gap-2">
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("uiux")}
                  checked={checkboxStateBerjalan.uiux}
                  type="checkbox"
                  id="checkbox3"
                />
                <label htmlFor="checkbox3" className="checkbox-label">
                  UI / UX Design
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("web")}
                  checked={checkboxStateBerjalan.web}
                  type="checkbox"
                  id="checkbox4"
                />
                <label htmlFor="checkbox4" className="checkbox-label">
                  Web Development
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("android")}
                  checked={checkboxStateBerjalan.android}
                  type="checkbox"
                  id="checkbox5"
                />
                <label htmlFor="checkbox5" className="checkbox-label">
                  Android Development
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("ios")}
                  checked={checkboxStateBerjalan.ios}
                  type="checkbox"
                  id="checkbox6"
                />
                <label htmlFor="checkbox6" className="checkbox-label">
                  IOS Development
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("data")}
                  checked={checkboxStateBerjalan.data}
                  type="checkbox"
                  id="checkbox7"
                />
                <label htmlFor="checkbox7" className="checkbox-label">
                  Data Science
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("business")}
                  checked={checkboxStateBerjalan.business}
                  type="checkbox"
                  id="checkbox8"
                />
                <label htmlFor="checkbox8" className="checkbox-label">
                  Business Intelligence
                </label>
              </div>
            </div>

            <h5 className="mt-4 mb-3 filters-tagline">Level Kesulitan</h5>
            <div className="checkbox-level gap-2">
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("semua_level")}
                  checked={checkboxStateBerjalan.semua_level}
                  type="checkbox"
                  id="checkbox9"
                />
                <label htmlFor="checkbox9" className="checkbox-label">
                  Semua Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("beginner_level")}
                  checked={checkboxStateBerjalan.beginner_level}
                  type="checkbox"
                  id="checkbox10"
                />
                <label htmlFor="checkbox10" className="checkbox-label">
                  Beginner Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("intermediate_level")}
                  checked={checkboxStateBerjalan.intermediate_level}
                  type="checkbox"
                  id="checkbox11"
                />
                <label htmlFor="checkbox11" className="checkbox-label">
                  Intermediate Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handleBerjalan("advanced_level")}
                  checked={checkboxStateBerjalan.advanced_level}
                  type="checkbox"
                  id="checkbox12"
                />
                <label htmlFor="checkbox12" className="checkbox-label">
                  Advanced Level
                </label>
              </div>
            </div>
            <div
              className="mt-4 btn hapus-filter btn-outline-danger d-flex justify-content-center mx-2"
              onClick={handleRemoveFilter}
            >
              Hapus Filter
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterKelasOffCanvas;