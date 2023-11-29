import { useState } from "react";

const HorizontalFilter = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="horizontal-filter d-flex align-items-center justify-content-between">
      <button
        className={`btn ${activeButton === "All" ? "btn-primary all" : "btn"}`}
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
  );
};

export default HorizontalFilter;
