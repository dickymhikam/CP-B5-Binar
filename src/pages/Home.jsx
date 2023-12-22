import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCategory } from "../services/api";

import Nav from "../components/Home/Nav";
import Card from "../components/Kelas/CardKursus";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";

import "../styles/Home.css";
import imgBanner from "../assets/img-banner.png";

const Home = () => {
  const [categoryCourse, setCategoryCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategory()
      .then((result) => {
      setCategoryCourse(result);})
  }, []);

  const handleFilter = (filterCategoryHome) => {
    navigate("/topik-kelas", { state: { filterCategoryHome } });
  }

  return (
    <>
      <div className="bg-layar-hp">
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
          <div className="category-wrapper">
            <div className="category-header">
              <h2 className="category-tagline">Kategori</h2>
              <Link to={"/topik-kelas"} className="text-decoration-none">
                <p className="see-all-category">Lihat Semua</p>
              </Link>
            </div>
            <div className="row category-row">
              {categoryCourse.map((category, index) => (
                <div className="category-column col-lg-2 col-md-3 col-sm-4 col-6 px-lg-0" key={index}>
                  <div onClick={() => handleFilter(category.categoryName)}>
                    <img src={category.imageUrl} alt="" className="category-image" />
                  </div>
                  <p className="category-text px-2 pt-2">{category.categoryName}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Card />
        </section>

        <Footer />
      </div>
      <NavbarBottom />
    </>
  );
};

export default Home;
