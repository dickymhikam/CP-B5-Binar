import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import master1 from "../assets/mastercard1.svg";
import visa2 from "../assets/visa2.svg";
import amek3 from "../assets/amex3.svg";
import paypal4 from "../assets/paypal4.svg";
import arah from "../assets/carbon.svg";

import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/PembayaranDetail.css";
import { getDetailCourse, payCourse, createOrder } from "../services/api";

const PembayaranDetail = () => {
  const [activeAccordion, setActiveAccordion] = useState("null");
  const { kodeKelas } = useParams();
  const [courseDetail, setCourseDetail] = useState(null);
  const [selectedCardNumber, setSelectedCardNumber] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("");
  const [isCardNumberFilled, setIsCardNumberFilled] = useState(false);
  const [orderCode, setOrderCode] = useState(null);
  const [orderDataCourse, setOrderDataCourse] = useState(null);

  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    setSelectedCardNumber(value);
    setIsCardNumberFilled(!!value);
  };
  const handleCardNumberChangeCredit = (event) => {
    const { value } = event.target;
    setSelectedCardNumber(value);
    setIsCardNumberFilled(!!value);
  };
  const handleAccordionClick = (cardType) => {
    setSelectedCardType(cardType);
    setActiveAccordion(cardType);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getDetailCourse(kodeKelas);
        setCourseDetail(courseData);

        const orderData = await createOrder(kodeKelas);
        setOrderCode(orderData.orderCode);
        setOrderDataCourse(orderData);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchData();
  }, [kodeKelas]);

  const handleBayarKelas = async (event) => {
    event.preventDefault();

    try {
      if (!selectedCardNumber || !selectedCardType) {
        throw new Error("Nomor kartu dan tipe kartu diperlukan.");
      }

      if (!isCardNumberFilled) {
        throw new Error("Isi nomor kartu dengan benar.");
      }

      if (!orderCode) {
        throw new Error("Tidak dapat menemukan orderCode.");
      }

      const paymentResponse = await payCourse(
        orderCode,
        selectedCardNumber,
        selectedCardType
      );

      toast.success(paymentResponse.message);
      navigate(`/payment-success/${courseDetail?.kodeKelas}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const formatCurr = (value) => {
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
    return formattedValue;
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
                    className={`accordion-button bg-dark ${
                      activeAccordion === "BANK_TRANSFER" ? "active" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={() => handleAccordionClick("BANK_TRANSFER")}
                    name="cardType"
                  >
                    Bank Transfer
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  {selectedCardType === "BANK_TRANSFER" && (
                    <div className=" accordion-body mb-0">
                      <div className="logo d-flex gap-5 justify-content-center ">
                        <img src={master1} alt="" />
                        <img src={visa2} alt="" />
                        <img src={amek3} alt="" />
                        <img src={paypal4} alt="" />
                      </div>
                      <form
                        className="form1"
                        onSubmit={handleBayarKelas}
                        ref={formRef}
                      >
                        <div className=" cardnumber ">
                          <p>Card number</p>
                          <input
                            type="text"
                            className="rp"
                            name="cardNumber"
                            value={selectedCardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="4480 0000 0000 0000"
                          />
                        </div>
                        <div className="cardnumber ">
                          <p>Card holder name</p>

                          <input
                            type="text"
                            className="rp"
                            name="cardHolderName"
                            placeholder="Jhon Doe"
                          />
                        </div>
                        <div className=" kard d-flex gap-3">
                          <div className="cardnumber2  ">
                            <p>CVV</p>
                            <input
                              type="number"
                              className="rp"
                              name="cvv"
                              placeholder="000"
                            />
                          </div>
                          <div className="cardnumber2">
                            <p>Expiry Date</p>
                            <input
                              type="number"
                              className="rp"
                              name="expiryDate"
                              placeholder="07/24"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeAccordion === "CREDIT_CARD" ? "active" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                    onClick={() => handleAccordionClick("CREDIT_CARD")}
                    name="cardType"
                  >
                    Credit Card
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  {selectedCardType === "CREDIT_CARD" && (
                    <div className="accordion-body mb-0">
                      <div className="logo d-flex gap-5 justify-content-center mt-2 ">
                        <img src={master1} alt="" />
                        <img src={visa2} alt="" />
                        <img src={amek3} alt="" />
                        <img src={paypal4} alt="" />
                      </div>

                      <form
                        className="form1"
                        onSubmit={handleBayarKelas}
                        ref={formRef}
                      >
                        <div className=" cardnumber ">
                          <p>Card number</p>
                          <input
                            type="text"
                            className="rp"
                            name="cardNumber"
                            value={selectedCardNumber}
                            onChange={handleCardNumberChangeCredit}
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
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="body-card1 ">
            <div className="kard-body ">
              <div className="body-image ">
                <p className="texts-bayar">Pembayaran Kelas</p>
                <div className="x-image">
                  <img src={courseDetail?.imageUrl} alt="" className="gambar" />
                  <p className="text-Ui mb-0 ps-3 pt-2">
                    {courseDetail?.kategori}
                  </p>
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
                    <span className="fw-normal">
                      {formatCurr(orderDataCourse?.harga)}
                    </span>
                  </div>
                  <div className="txt-h1">
                    PPN 11% <br />
                    <span className="fw-normal">
                      {formatCurr(orderDataCourse?.ppn)}
                    </span>
                  </div>
                  <div className="txt-h1">
                    Total Bayar <br />
                    <span className="fw-normal">
                      {formatCurr(orderDataCourse?.totalBayar)}
                    </span>
                  </div>
                </div>
              </div>
              <Link to={`/payment-success/${courseDetail?.kodeKelas}`}>
                <button
                  className="btn btn-bayar"
                  type="submit"
                  onClick={handleBayarKelas}
                >
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