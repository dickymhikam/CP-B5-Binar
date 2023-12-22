import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import {
  getAllMyClass,
  getMyProgressClass,
  getMyFinishClass,
  searchAllMyClass,
  searchMyProgressClass,
  searchMyFinishClass,
} from "../../services/api";

import CardKelas from "./CardKelas";
import ProgressContext from "../../context/ProgressClass";

const HorizontalFilter = (props) => {
  const [classes, setClasses] = useState([]);
  const {progress, changeProgress} = useContext(ProgressContext);

  const fetchDataTopFilter = async (progress) => {
    let fetchedData;

    if (props.clicked) {
      fetchedData = props.filteredClass;
    } else {
      if (progress === "ALL") {
        try {
          if (props.filteredClass && props.filteredClass.length) {
            fetchedData = props.filteredClass;
            setClasses(fetchedData);
          }else if (props.query.trim() !== "") {
            fetchedData = await searchAllMyClass(props.query); 
            setClasses(fetchedData);
          }else {
            fetchedData = await getAllMyClass();
            setClasses(fetchedData);
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      } else if (progress === "PROGRESS") {
        try {
          if (props.filteredClass && props.filteredClass.length) {
            fetchedData = props.filteredClass.filter((classes) => classes.progress === "PROGRESS");
            setClasses(fetchedData);
          }else if (props.query.trim() !== "") {
            fetchedData = await searchMyProgressClass(props.query);
            setClasses(fetchedData);
          } else {
            fetchedData = await getMyProgressClass();
            setClasses(fetchedData);
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      } else if (progress === "FINISH") {
        if (props.filteredClass && props.filteredClass.length) {
          fetchedData = props.filteredClass.filter((classes) => classes.progress === "FINISH");
          setClasses(fetchedData);
        } else if (props.query.trim() !== "") {
          fetchedData = await searchMyFinishClass(props.query);
          setClasses(fetchedData);
        } else {
          fetchedData = await getMyFinishClass();
          setClasses(fetchedData);
        }
      }
    }
    setClasses(fetchedData)
  }

  useEffect(() => {
    fetchDataTopFilter(progress);
  }, [progress, props.clicked, props.filteredClass,props.query]);

  return (
    <>
      <div className="horizontal-filter d-flex align-items-center justify-content-between">
        <button
          className={`btn ${
           progress === "ALL" ? "btn-primary all" : "btn"
          }`}
          onClick={() => changeProgress("ALL")}
        >
          All
        </button>
        <button
          className={`btn ${
           progress === "PROGRESS"
              ? "btn-active w-50 align-items-center text-center"
              : "btn w-50"
          }`}
          onClick={() => changeProgress("PROGRESS")}
        >
          In Progress
        </button>
        <button
          className={`btn ${
           progress === "FINISH" ? "btn-primary selesai" : "btn"
          }`}
          onClick={() => changeProgress("FINISH")}
        >
          Selesai
        </button>
      </div>
      {props.query.trim() !== "" && (
      <p className="txt-tampil mt-4">
        Menampilkan<span className="txt-keyword ms-1">{props.query}</span>
      </p>
      )}
      <CardKelas classes={classes}/>
    </>
  );
};

HorizontalFilter.propTypes={
  filteredClass:PropTypes.array,
  clicked:PropTypes.bool,
  query:PropTypes.string,
};


export default HorizontalFilter;