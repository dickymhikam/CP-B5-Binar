import fisuccess from "../assets/payment-success.png";
import Nav from "../components/Home/Nav";
import "../styles/PaySuccess.css";

const PaySuccess = () => {
  return (
    <>
      <Nav />

      <div className="content text-center">
        <h3 className="header-text mt-4">Selamat!</h3>
        <img src={fisuccess} alt="" className="img-success mt-5" />
        <p className="main-text mt-5">
          Transaksi pembayaran kelas premium berhasil!{" "}
        </p>
        <p className="second-text">E-receipt telah dikirimkan ke email.</p>
        <button className="btn-start">Mulai Belajar</button>
        <p className="footer-text">Kembali Ke Beranda</p>
      </div>
    </>
  );
};

export default PaySuccess;
