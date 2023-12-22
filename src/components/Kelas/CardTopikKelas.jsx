import { useState } from "react";
import { Link } from "react-router-dom";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

const CardTopikKelas = ({ courses }) => {
  const [modalShowBeli, setModalShowBeli] = useState(false);
  const [courseDetail, setCourseDetail] = useState(null);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 py-3 card-kursus-wrapper">
      {courses && courses.map((course, index) => (
        <div
          key={index}
          className="col px-0 d-flex justify-content-center card-kursus-home"
        >
          <div className="card my-2">
            <Link to={`/detail-kelas/${course.kodeKelas}`} className="text-decoration-none">
              <img src={course.imageUrl} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <div className="d-flex justify-content-between ">
                <h5 className="card-title text-truncate">{course.kategori}</h5>
                <div className="icon-star">
                  <img src={star}/>
                  <p>{course.rating}</p>
                </div>
              </div>

              <p className="about-class mb-0 text-truncate">{course.namaKelas}</p>
              <div className=" pb-0  w-100">
                <p className="mentor mb-md-0">{`by ${course.author}`}</p>
                <div className="writing-learn d-flex gap-4">
                  <p className="writing-level">
                    <img src={badge} />
                    {` ${course.level} Level`}
                  </p>

                  <p>
                    <img src={book} />
                    {` ${course.modul} Modul`}
                  </p>
                  <p>
                    <img src={time} />
                    {` ${course.time} Menit`}
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
                    <img src={permata} /> {`Beli ${course.tipeKelas}`}
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
  );
};

export default CardTopikKelas;
