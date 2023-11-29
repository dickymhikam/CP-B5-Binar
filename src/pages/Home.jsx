import "../styles/Home.css";

import Nav from "../components/Home/Nav";
import Card from "../components/Kelas/CardKursus";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

import imgBanner from "../assets/img-banner.png";
import cardCategory from "../assets/unsplash__x335IZXxfc.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />

      <section>
        <div className="home-banner">
          <div className="img-banner">
            <img src={imgBanner} />
            <div className="img-banner-overlay"></div>
          </div>
          <div className="text-banner">
            <h2>
              Belajar
              <br />
              dari Praktisi Terbaik!
            </h2>
            <Link to={"/topik-kelas"} className="align-self-start">
              <button className="button-banner">IKUTI KELAS</button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="all-category">
          <div className="text-category">
            <h2>Kategori Belajar</h2>
            <p>Lihat Semua</p>
          </div>
          <div className="all-card-category">
            <div className="card-category">
              <img src={cardCategory} />
              <h3>UI/UX Design</h3>
            </div>
            <div className="card-category">
              <img src={cardCategory} />
              <h3>Product Management</h3>
            </div>
            <div className="card-category">
              <img src={cardCategory} />
              <h3>Web Development</h3>
            </div>
            <div className="card-category">
              <img src={cardCategory} />
              <h3>Android Development</h3>
            </div>
            <div className="card-category">
              <img src={cardCategory} />
              <h3>iOS Development</h3>
            </div>
            <div className="card-category">
              <img src={cardCategory} />
              <h3>Data Science</h3>
            </div>
          </div>
        </div>
      </section>

      <Card />

      <Footer />
      <NavbarBottom />
    </>
  );
};

export default Home;
