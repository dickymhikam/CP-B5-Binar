import Nav from "../components/Home/Nav";
import HeaderAkun from "../components/Akun/HeaderAkun";
import CardRiwayat from "../components/Akun/CardRiwayat";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

const RiwayatPembayaran = () => {
  return (
    <>
      <div className="bg-layar-hp">
        <Nav />
        <HeaderAkun />
        <CardRiwayat />
        <Footer />
      </div>
      <NavbarBottom />
    </>
  );
};

export default RiwayatPembayaran;
