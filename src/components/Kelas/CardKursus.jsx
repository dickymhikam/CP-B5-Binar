import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";

import "../../styles/CardKursus.css";
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";
import { getPopularCourse } from "../../services/api";

const CardKursus = () => {
  const [coursePopular, setCoursePopular] = useState([]);
  const [modalShowBeli, setModalShowBeli] = useState(false);
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    getPopularCourse("All")
      .then((data) => {
        setCoursePopular(data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
  }, []);

  const formatCurr = (value) => {
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
    return formattedValue;
  };

  const HandlerPopular = async (q) => {
    setCoursePopular(await getPopularCourse(q))
  }

  return (
    <>
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

      <div className="type-container-card">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 py-3 card-kursus-wrapper">
          {coursePopular && coursePopular.map((course, index) => ( 
            <div key={index} className="col px-0 d-flex justify-content-center card-kursus-home">
              <div className="card ">
                <Link to={`detail-kelas/${course?.kodeKelas}`} className="text-decoration-none">
                  <img src={course.imageUrl} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-truncate">
                     {course.kategori} 
                    </h5>
                    <div className="icon-star">
                      <img src={star} />
                      <p>{course.rating}</p>
                    </div>
                  </div>

                  <p className="about-class mb-0 text-truncate">
                    {course.namaKelas}
                  </p>
                  <div className=" pb-0  w-100">
                    <p className="mentor mb-md-0">{course.author}</p>
                    <div className="writing-learn d-flex justify-content-between">
                      <p className="writing-level">
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
                        onClick={() => {
                          setCourseDetail(course);
                          setModalShowBeli(true);
                        }}
                      >
                        <img src={permata} />{`Beli ${formatCurr(course.harga)}`}
                      </button>
                      {modalShowBeli && (
                        <ModalBeliSekarang
                          show={modalShowBeli}
                          onHide={() => {
                            setCourseDetail(null);
                            setModalShowBeli(false);
                          }}
                          course={courseDetail}
                        />
                      )}
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