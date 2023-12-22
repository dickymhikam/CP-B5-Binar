import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { 
  getCourseList,
  getPremiumClass, 
  getFreeClass, 
  getAllSearchTopik,
  getPremiumSearchTopik,
  getFreeSearchTopik, } from "../../services/api";
import CardTopikKelas from "./CardTopikKelas";

const HorizontalFilterTopik = (props) => {
  const [activeButton, setActiveButton] = useState("All");
  const [courses, setCourses] = useState([]);

  const fetchDataTopFilter = async (buttonName) => {
    setActiveButton(buttonName);
    let fetchedData;

    if (props.clicked) {
      fetchedData = props.filtered;
    } else {
      if (buttonName === "All") {
        (async () => {
          try {
            if (props.filtered && props.filtered.length) {
              fetchedData = props.filtered;
              setCourses(fetchedData);
            }else if (props.keyword.trim() !== "") {
              fetchedData = await getAllSearchTopik(props.keyword);
              setCourses(fetchedData);
            } else {
              fetchedData = await getCourseList();
              setCourses(fetchedData);
            }
          } catch (error) {
            console.error("Error fetching courses:", error);
          }
        })();
      } else if (buttonName === "Kelas Premium") {
        (async () => {
          try {
            if (props.filtered && props.filtered.length) {
              fetchedData = props.filtered.filter((courses) => courses.tipeKelas === "PREMIUM");
              setCourses(fetchedData);
            } else if (props.keyword.trim() !== "") {
              fetchedData = await getPremiumSearchTopik(props.keyword);
              setCourses(fetchedData);
            } else {
              fetchedData = await getPremiumClass();
              setCourses(fetchedData);
            }
          } catch (error) {
            console.error("Error fetching courses:", error);
          }
        })();
      } else if (buttonName === "Kelas Gratis") {
        (async () => {
          try {
            if (props.filtered && props.filtered.length) {
              fetchedData = props.filtered.filter((courses) => courses.tipeKelas === "FREE");
              setCourses(fetchedData);
            } else if (props.keyword.trim() !== "") {
              fetchedData = await getFreeSearchTopik(props.keyword);
              setCourses(fetchedData);
            } else {
              fetchedData = await getFreeClass();
              setCourses(fetchedData);
            }
          } catch (error) {
            console.error("Error fetching courses:", error);
          }
        })();
      }
    }
    setCourses(fetchedData);
  };

  const handleClick = (buttonName) => {
    fetchDataTopFilter(buttonName);
  };

  useEffect(() => {
    fetchDataTopFilter(activeButton);
  }, [activeButton, props.clicked, props.filtered, props.keyword]);

  return (
    <>
      <div className="horizontal-filter d-flex align-items-center justify-content-between">
        <button
          className={`btn ${
            activeButton === "All" ? "btn-primary all w-25" : "btn w-25"
          }`}
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className={`btn w-50 ${
            activeButton === "Kelas Premium"
              ? "btn-active w-50 align-items-center"
              : "btn"
          }`}
          onClick={() => handleClick("Kelas Premium")}
        >
          Kelas Premium
        </button>
        <button
          className={`btn ${
            activeButton === "Kelas Gratis" ? "btn-primary selesai" : "btn"
          }`}
          onClick={() => handleClick("Kelas Gratis")}
        >
          Kelas Gratis
        </button>
      </div>
      {props.keyword.trim() !== "" && (
      <p className="txt-tampil">
        Menampilkan<span className="txt-keyword ms-1">{`"${props.keyword}"`}</span>
      </p>
    )}
      <CardTopikKelas courses={courses} />
    </>
  );
};

HorizontalFilterTopik.propTypes={
  filtered:PropTypes.array,
  clicked:PropTypes.bool,
  keyword:PropTypes.string
}

export default HorizontalFilterTopik;