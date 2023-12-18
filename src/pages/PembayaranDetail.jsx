import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

import master1 from "../assets/mastercard1.svg";
import visa2 from "../assets/visa2.svg";
import amek3 from "../assets/amex3.svg";
import paypal4 from "../assets/paypal4.svg";
import gambar from "../assets/image.png";
import arah from "../assets/carbon.svg";

import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/PembayaranDetail.css";
import { getDetailCourse } from "../services/api";

const PembayaranDetail = () => {
  const [courseDetail, setCourseDetail] = useState(null);
  const {kode} = useParams();

  useEffect(() => {
    getDetailCourse(kode)
        .then((data) => {
          setCourseDetail(data);
        })
        .catch((error) => {
          console.error("Error fetching course list:", error);
        });
  }, [kode]);

  const formatCurr = (value) => {
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
    return formattedValue;
  };

  const calcPPN = (harga) => {
    const ppn = (11 / 100) * harga;
    return ppn;
  };

  const calcTotalPayment = (harga) => {
    const ppn = calcPPN(harga);
    const totalPayment = harga + ppn;
    return totalPayment;
  };

  return (
    <>
      <Nav />
      
      <div className="container">
        <div className="header-card">
          <div className="body-card my-3">
            <div className="accordion  " id="accordionExample">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-dark collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Bank Transfer
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className=" accordion-body mb-0">
                    <div className="logo d-flex gap-5 justify-content-center ">
                      <img src={master1} alt="" />
                      <img src={visa2} alt="" />
                      <img src={amek3} alt="" />
                      <img src={paypal4} alt="" />
                    </div>

                    <form className="form1">
                    <div className=" cardnumber ">
                      <p>Card number</p>
                      <input
                      type="text"
                      className="rp"
                      placeholder="4480 0000 0000 0000"
                      />
                    </div>
                    <div className="cardnumber ">
                      <p>Card holder name</p>
                    
                      <input
                      type="text"
                      className="rp"
                      placeholder="Jhon Doe"
                      />
                    </div>
                    <div className=" kard d-flex gap-3">
                      <div className="cardnumber2  ">
                        <p>CVV</p>
                        <input
                          type="number"
                          className="rp"
                          placeholder="000"
                      />
                      </div>
                      <div className="cardnumber2">
                        <p>Expiry Date</p>
                        <input 
                        type="number"
                        className="rp"
                        placeholder="07/24"
                      />
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Credit Card
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body mb-0">
                    <div className="logo d-flex gap-5 justify-content-center mt-2 ">
                      <img src={master1} alt="" />
                      <img src={visa2} alt="" />
                      <img src={amek3} alt="" />
                      <img src={paypal4} alt="" />
                    </div>

                    <form className="form1 ">
                    <div className=" cardnumber ">
                      <p>Card number</p>
                      <input
                      type="text"
                      className="rp"
                      placeholder="4480 0000 0000 0000"
                      />
                    </div>
                    <div className="cardnumber ">
                      <p>Card holder name</p>
                    
                      <input
                      type="text"
                      className="rp"
                      placeholder="John Doe"
                      />
                    </div>
                    <div className=" kard d-flex gap-3">
                      <div className="cardnumber2  ">
                        <p>CVV</p>
                        <input
                          type="number"
                          className="rp"
                          placeholder="000"
                      />
                      </div>
                      <div className="cardnumber2">
                        <p>Expiry Date</p>
                        <input 
                        type="number"
                        className="rp"
                        placeholder="07/24"
                      />
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-card1 ">
            <div className="kard-body ">
              <div className="body-image ">
                <p className="texts-bayar">Pembayaran Kelas</p>
                <div className="x-image">
                  <img src={gambar} alt="" className="gambar" />
                  <p className="text-Ui mb-0 ps-3 pt-2">{courseDetail?.kategori}</p>
                  <div className="text-Intro ps-3">
                    {courseDetail?.namaKelas}
                    <p className="text-tengah fw-normal pb-2 ">
                      {`by ${courseDetail?.author}`}
                    </p>
                  </div>
                </div>
                <div className="text-body d-flex">
                  <div className="txt-h1">
                      Harga <br />
                      <span className="fw-normal">{formatCurr(courseDetail?.harga)}</span>
                  </div>
                  <div className="txt-h1">
                      PPN 11% <br />
                      <span className="fw-normal">{formatCurr(calcPPN(courseDetail?.harga))}</span>
                  </div>
                  <div className="txt-h1">
                      Total Bayar <br />
                      <span className="fw-normal">{formatCurr(calcTotalPayment(courseDetail?.harga))}</span>
                  </div>
                </div>
              </div>
              <Link to={`/payment-success/${courseDetail?.kodeKelas}`}>
              <button className="btn btn-bayar">
                Bayar dan Ikuti Kelas Selamanya <img src={arah} alt="" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <NavbarBottom />
    </>
  );
};

export default PembayaranDetail;
