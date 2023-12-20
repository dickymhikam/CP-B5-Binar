import "../styles/FormProfilSaya.css";

import Nav from "../components/Home/Nav";
import HeaderAkun from "../components/Akun/HeaderAkun";
import CardPassword from "../components/Akun/CardPassword";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

const UbahPassword = () => {
  return (
    <>
      <div className="bg-layar-hp">
        <Nav />
        <HeaderAkun />
        <CardPassword />
        <Footer />
      </div>
      <NavbarBottom />
    </>
  );
};

export default UbahPassword;
