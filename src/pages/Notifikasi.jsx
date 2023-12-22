import HeaderAkun from "../components/Akun/HeaderAkun";
import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/Notifikasi.css";

import bellIcon from "../assets/bell.svg";
import statusGreen from "../assets/EllipseGreen.svg";
import statusRed from "../assets/EllipseRed.svg";

const Notifikasi = () => {
  return (
    <>
      <div className="bg-layar-hp">
        <Nav />
        <HeaderAkun />
        <div className="container py-2">
          <div className="card card-akun">
            <div className="card-header d-flex align-items-center justify-content-center">
              Notifikasi
            </div>
            <div className="card-body">
              <div className="container notif-container">
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Promosi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">2 Desember, 12:00</p>
                      <img src={statusGreen} alt="" className="status" />
                    </div>
                  </div>
                </div>
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Notifikasi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">10 Desember, 12:00</p>
                      <img src={statusRed} alt="" className="status" />
                    </div>
                  </div>
                </div>
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Promosi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">11 Desember, 12:00</p>
                      <img src={statusGreen} alt="" className="status" />
                    </div>
                  </div>
                </div>
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Promosi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">11 Desember, 12:00</p>
                      <img src={statusGreen} alt="" className="status" />
                    </div>
                  </div>
                </div>
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Promosi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">11 Desember, 12:00</p>
                      <img src={statusGreen} alt="" className="status" />
                    </div>
                  </div>
                </div>
                <div className="notif-wrapper mx-4 d-flex gap-2 align-items-start">
                  <img src={bellIcon} alt="" />
                  <div className="notif-content-wrapper d-flex justify-content-between ">
                    <div className="notif-content d-flex flex-column">
                      <p className="notif-title">Notifikasi</p>
                      <p className="notif-text mb-0">
                        Dapatkan Potongan 50% selama Bulan Maret!
                      </p>
                      <p className="notif-syarat">
                        Syarat dan Ketentuan berlaku!
                      </p>
                    </div>
                    <div className="notif-date d-flex flex-row align-items-start gap-3">
                      <p className="notif-date-text">10 Desember, 12:00</p>
                      <img src={statusRed} alt="" className="status" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <NavbarBottom />
    </>
  );
};

export default Notifikasi;
