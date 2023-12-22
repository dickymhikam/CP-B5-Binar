import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import "../../styles/FilterKelasOffCanvas.css";
import { getFilter } from "../../services/api";

const FilterTopikKelasOffCanvas = ({filter,click}) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleClose = () => setShowFilter(false);
  const handleShow = () => setShowFilter(true);

  const [checkboxState, setCheckboxState] = useState({
    newest: false,
    popular: false,
    uiux: false,
    web: false,
    android: false,
    data: false,
    business: false,
    semua_level: false,
    beginner_level: false,
    intermediate_level: false,
    advanced_level: false,
  });

  const handle = (checkbox) => {
    setCheckboxState((prevState) => {
      const updatedState = { ...prevState };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key] = false;
      });
      updatedState[checkbox] = true;
      return updatedState;
    });
  };

  const [filterCourse, setFilterCourse] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const handleClick = (
    isNewest,
    isPopular,
    category,
    level,
    type
  ) => {
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
    if (checkboxState.newest) {
      getFilter(true, false, "", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(true, false, "", "", "");
      });
    }
    if (checkboxState.popular) {
      getFilter(false, true, "", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, true, "", "", "");
      });
    }
    if (checkboxState.uiux) {
      getFilter(false, false, "UI/UX Design", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "UI/UX Design", "", "");
      });
    }
    if (checkboxState.web) {
      getFilter(false, false, "Web Development", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "Web Development", "", "");
      });
    }
    if (checkboxState.android) {
      getFilter(false, false, "Android Development", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "Android Development", "", "");
      });
    }
    if (checkboxState.data) {
      getFilter(false, false, "Data Science", "", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "Data Science", "", "");
      });
    }
    if (checkboxState.business) {
      getFilter(false, false, "Business Intelligence", "", "").then(
        (data) => {
          setFilterCourse(data);
          filter(data);
          handleClick(false, false, "Business Intelligence", "", "");
        }
      );
    }
    if (checkboxState.semua_level) {
      getFilter(
        false,
        false,
        "",
        ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
        ""
      ).then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(
          false,
          false,
          "",
          ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
          ""
        );
      });
    }
    if (checkboxState.beginner_level) {
      getFilter(false, false, "", "BEGINNER", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "", "BEGINNER", "");
      });
    }
    if (checkboxState.intermediate_level) {
      getFilter(false, false, "", "INTERMEDIATE", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "", "INTERMEDIATE", "");
      });
    }
    if (checkboxState.advanced_level) {
      getFilter(false, false,"", "ADVANCED", "").then((data) => {
        setFilterCourse(data);
        filter(data);
        handleClick(false, false, "", "ADVANCED", "");
      });
    }
  }, [checkboxState]);

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
                  onChange={() => handle("newest")}
                  checked={checkboxState.newest}
                  type="checkbox"
                  id="checkbox1"
                />
                <label htmlFor="checkbox1" className="checkbox-label">
                  Paling Baru
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("popular")}
                  checked={checkboxState.popular}
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
                  onChange={() => handle("uiux")}
                  checked={checkboxState.uiux}
                  type="checkbox"
                  id="checkbox3"
                />
                <label htmlFor="checkbox3" className="checkbox-label">
                  UI / UX Design
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("web")}
                  checked={checkboxState.web}
                  type="checkbox"
                  id="checkbox4"
                />
                <label htmlFor="checkbox4" className="checkbox-label">
                  Web Development
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("android")}
                  checked={checkboxState.android}
                  type="checkbox"
                  id="checkbox5"
                />
                <label htmlFor="checkbox5" className="checkbox-label">
                  Android Development
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("data")}
                  checked={checkboxState.data}
                  type="checkbox"
                  id="checkbox6"
                />
                <label htmlFor="checkbox6" className="checkbox-label">
                  Data Science
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("business")}
                  checked={checkboxState.business}
                  type="checkbox"
                  id="checkbox7"
                />
                <label htmlFor="checkbox7" className="checkbox-label">
                  Business Intelligence
                </label>
              </div>
            </div>

            <h5 className="mt-4 mb-3 filters-tagline">Level Kesulitas</h5>
            <div className="checkbox-level gap-2">
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("semua_level")}
                  checked={checkboxState.semua_level}
                  type="checkbox"
                  id="checkbox8"
                />
                <label htmlFor="checkbox8" className="checkbox-label">
                  Semua Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("beginner_level")}
                  checked={checkboxState.beginner_level}
                  type="checkbox"
                  id="checkbox9"
                />
                <label htmlFor="checkbox9" className="checkbox-label">
                  Beginner Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("intermediate_level")}
                  checked={checkboxState.intermediate_level}
                  type="checkbox"
                  id="checkbox10"
                />
                <label htmlFor="checkbox10" className="checkbox-label">
                  Intermediate Level
                </label>
              </div>
              <div className="mb-2 d-flex align-items-center">
                <input
                  onChange={() => handle("advanced_level")}
                  checked={checkboxState.advanced_level}
                  type="checkbox"
                  id="checkbox11"
                />
                <label htmlFor="checkbox11" className="checkbox-label">
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

export default FilterTopikKelasOffCanvas;