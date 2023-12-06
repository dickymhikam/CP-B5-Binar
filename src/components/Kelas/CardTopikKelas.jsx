import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import permata from "../../assets/permata.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";
import main from "../../assets/image.png";
import ModalBeliSekarang from "../Modals/ModalBeliSekarang";

import { useState, useEffect } from "react";
import { getCourseList } from "../../services/api";

const CardTopikKelas = () => {
  const [courseList, setCourseList] = useState([]);
  const [modalShowBeli, setModalShowBeli] = useState(false);

  useEffect(() => {
    getCourseList()
      .then((data) => {
        setCourseList(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
  }, []);

  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 py-3 card-kursus-wrapper">
          {courseList.map((course, index) => (
            <>
              <div
                key={index}
                className="col px-0 d-flex justify-content-center card-kursus-home"
              >
                <div className="card my-2">
                  <img src={main} className="card-img-top" alt="..." />
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
                      <p className="mentor mb-md-0">{`by ${course.author}`}</p>
                      <div className="writing-learn d-flex justify-content-between">
                        <p>
                          <img src={badge} />
                          {` ${course.level} Level`}
                        </p>

                        <p>
                          <img src={book} />
                          {` ${course.modul} Modul`}
                        </p>
                        <p>
                          <img src={time} />
                          120 menit
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
            </>
          ))}
      </div>
    </>
  );
};

export default CardTopikKelas;