import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import book from "../../assets/book.svg";
import star from "../../assets/ic_round-star.svg";
import time from "../../assets/ri_time-fill.svg";
import badge from "../../assets/mdi_badge-outline.svg";

const CardKelas = ({ classes }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mt-3 card-kursus-wrapper">
      {classes && classes.map((classes, index) =>(
        <Link to={`/detail-kelas/${classes.kodeKelas}`} key={index} className="text-decoration-none text-dark">
          <div  className="col px-0 d-flex justify-content-center card-kursus-home">
            <div className="card my-2">
              <img src={classes.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between ">
                  <h5 className="card-title text-truncate">
                    {classes.kategori}
                  </h5>
                  <div className="icon-star">
                    <img src={star}/>
                    <p className="m-0">{classes.rating}</p>
                  </div>
                </div>

                <p className="about-class mb-0 text-truncate">
                  {classes.namaKelas}
                </p>
                <div className=" pb-0  w-100">
                  <p className="mentor mb-md-0">{classes.author}</p>
                  <div className="writing-learn d-flex gap-4">
                    <p>
                      <img src={badge} />
                      {` ${classes.level} Level`}
                    </p>

                    <p>
                      <img src={book} />
                      {` ${classes.modul} Modul`}
                    </p>
                    <p>
                      <img src={time} />
                      {` ${classes.time} Menit`}
                    </p>
                  </div>
                  <ProgressBar
                    now={classes.progress}
                    label={
                      <span className="progress-label">{`${classes.progress}% Complete`}</span>
                    }
                    className="progress-belajar border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardKelas;