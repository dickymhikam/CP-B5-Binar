import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/CardKursus.css";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";

import ModalBeliSekarang from "../Modals/ModalBeliSekarang";
import { getPopularCourse } from "../../services/api";

const CardKursus = () => {
  const [coursePopular, setCoursePopular] = useState([]);
  const [modalShowBeli, setModalShowBeli] = useState(false);

  getPopularCourse

  useEffect(() => {
    getPopularCourse("All")
      .then((data) => {
        setCoursePopular(data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
  }, []);

  const HandlerPopular = async (q) => {
    setCoursePopular(await getPopularCourse(q))
  }

  return (
    <>
      {/* Header */}
      <div className="type-container">
        <div className="row">
          <div className="type-header">
            <h2>Kursus Populer</h2>
            <Link to={"/topik-kelas"} className="text-decoration-none">
              <p className="">Lihat Semua</p>
            </Link>
          </div>
          <div className="col-sm-12 text-center mt-2">
            <button  onClick={() => HandlerPopular("All")} className="btn-class mt-1 mb-2">All</button>
            <button  onClick={() => HandlerPopular("Data Science")} className="btn-class ">Data Science</button>
            <button  onClick={() => HandlerPopular("UI/UX Design")} className="btn-class">UI/UX Design</button>
            <button  onClick={() => HandlerPopular("Android Development")} className="btn-class">Android Development</button>
            <button  onClick={() => HandlerPopular("Web Development")} className="btn-class mb-2">Web Development</button>
            <button  onClick={() => HandlerPopular("IOS Development")} className="btn-class">IOS Development</button>
            <button  onClick={() => HandlerPopular("Business Intelligence")} className="btn-class">Business Intelligence</button>
          </div>
        </div>
      </div>

      {/* Card */}
      
      <div className="type-container-card">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 py-3 card-kursus-wrapper">
          {coursePopular.map((course, index) => ( 
            <div key={index} className="col px-0 d-flex justify-content-center card-kursus-home">
              <div className="card ">
                <img src={course.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="d-flex justify-content-between ">
                    <h5 className="card-title text-truncate">
                     {course.kategori} 
                    </h5>
                    <div className="d-flex justify-content-center  align-items-start">
                      <img src={star} className="icon-star mt-md-1" />
                      <p className="m-0">{course.rating}</p>
                    </div>
                  </div>

                  <p className="about-class mb-0 text-truncate">
                    {course.namaKelas}
                  </p>
                  <div className=" pb-0  w-100">
                    <p className="mentor mb-md-0">{course.author}</p>
                    <div className="writing-learn d-flex justify-content-between">
                      <p>
                        <img src={badge} />
                       {`${course.level} Level`}
                      </p>
                      <p>
                        <img src={book} />
                        {`${course.modul} Modul`}
                      </p>
                      <p>
                        <img src={time} />
                        {`${course.time} Menit`}
                      </p>
                    </div>
                    <div className="btn-wrapper">
                      <button
                        className="btn-buy"
                        onClick={() => setModalShowBeli(true)}
                      >
                        <img src={permata} /> {`Beli ${course.harga}`}
                      </button>
                      <ModalBeliSekarang
                        show={modalShowBeli}
                        onHide={() => setModalShowBeli(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default CardKursus