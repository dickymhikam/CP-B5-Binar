import { useState, useEffect } from "react";

import {
  getAllMyClass,
  getMyProgressClass,
  getMyFinishClass,
} from "../../services/api";

import CardKelas from "./CardKelas";

const HorizontalFilter = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [classes, setClasses] = useState([]);

  const fetchDataTopFilterClass = async (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "All") {
      try {
        const allClassesData = await getAllMyClass();
        setClasses(allClassesData);
      } catch (error) {
        console.error("Error fetching all courses:", error);
      }
    } else if (buttonName === "In Progress") {
      try {
        const progressClassesData = await getMyProgressClass();
        setClasses(progressClassesData);
      } catch (error) {
        console.error("Error fetching progress class:", error);
      }
    } else if (buttonName === "Selesai") {
      try {
        const finishClassesData = await getMyFinishClass();
        setClasses(finishClassesData);
      } catch (error) {
        console.error("Error fetching finish class:", error);
      }
    }
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    fetchDataTopFilterClass(activeButton);
  }, [activeButton]);

  return (
    <>
      <div className="horizontal-filter d-flex align-items-center justify-content-between">
        <button
          className={`btn ${
            activeButton === "All" ? "btn-primary all" : "btn"
          }`}
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className={`btn ${
            activeButton === "In Progress"
              ? "btn-active w-50 align-items-center text-center"
              : "btn w-50"
          }`}
          onClick={() => handleClick("In Progress")}
        >
          In Progress
        </button>
        <button
          className={`btn ${
            activeButton === "Selesai" ? "btn-primary selesai" : "btn"
          }`}
          onClick={() => handleClick("Selesai")}
        >
          Selesai
        </button>
      </div>
      <CardKelas classes={classes}/>
    </>
  );
};

export default HorizontalFilter;
