import Nav from "../components/Home/Nav";
import HeaderAkun from "../components/Akun/HeaderAkun";
import CardProfilSaya from "../components/Akun/CardProfilSaya";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

const ProfilSaya = () => {
  return (
    <>
      <div className="bg-layar-hp">
        <Nav />
        <HeaderAkun />
        <CardProfilSaya />
        <Footer />
      </div>
      <NavbarBottom />
    </>
  );
};

export default ProfilSaya;
