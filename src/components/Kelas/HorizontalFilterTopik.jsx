import { useState, useEffect } from "react";

import {
  getCourseList,
  getPremiumClass,
  getFreeClass,
} from "../../services/api";

import CardTopikKelas from "./CardTopikKelas";

const HorizontalFilter = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [courses, setCourses] = useState([]);

  const fetchDataTopFilter = async (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "All") {
      try {
        const allCoursesData = await getCourseList();
        setCourses(allCoursesData);
      } catch (error) {
        console.error("Error fetching all courses:", error);
      }
    } else if (buttonName === "Kelas Premium") {
      try {
        const premiumCourseData = await getPremiumClass();
        setCourses(premiumCourseData);
      } catch (error) {
        console.error("Error fetching premium classes:", error);
      }
    } else if (buttonName === "Kelas Gratis") {
      try {
        const freeCoursesData = await getFreeClass();
        setCourses(freeCoursesData);
      } catch (error) {
        console.error("Error fetching free courses:", error);
      }
    }
  };

  const handleClick = (buttonName) => {
    fetchDataTopFilter(buttonName);
  };

  useEffect(() => {
    fetchDataTopFilter(activeButton);
  }, [activeButton]);

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
      <CardTopikKelas courses={courses} />
    </>
  );
};

export default HorizontalFilter;
