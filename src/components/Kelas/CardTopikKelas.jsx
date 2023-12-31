import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";
import { toast } from "react-toastify";

const CardTopikKelas = ({ courses }) => {
  const [modalShowBeli, setModalShowBeli] = useState(null);
  const [courseDetail, setCourseDetail] = useState(null);
  const [userHasToken, setUserHasToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserHasToken(token);
  }, []);

  const handleBuyButtonClick = (course, index) => {
    if (!userHasToken) {
      toast.error("Silahkan Login Terlebih dahulu");
    } else {
      setCourseDetail(course);
      setModalShowBeli(index);
    }
  };

  const handleCloseModal = () => {
    setModalShowBeli(null);
    setCourseDetail(null);
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-3 card-kursus-wrapper">
      {courses &&
        courses.map((course, index) => (
          <div
            key={index}
            className="col px-0 d-flex justify-content-center card-kursus-home"
          >
            <div className="card my-2">
              <Link
                to={`/detail-kelas/${course.kodeKelas}`}
                className="text-decoration-none"
              >
                <img src={course.imageUrl} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between ">
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
                      onClick={() => handleBuyButtonClick(course, index)}
                    >
                      <img src={permata} /> {course.tipeKelas}
                    </button>
                    {/* Modal pembelian */}
                    {modalShowBeli === index && (
                      <ModalBeliSekarang
                        show={true}
                        onHide={handleCloseModal}
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