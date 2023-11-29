import { useState } from "react";

const HorizontalFilter = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="horizontal-filter d-flex align-items-center justify-content-between">
      <button
        className={`btn ${activeButton === "All" ? "btn-primary all w-25" : "btn w-25"}`}
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
  );
};

export default HorizontalFilter;
