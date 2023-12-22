import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import "../styles/KelasBerjalan.css";
import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";
import FilterKelasOffCanvas from "../components/Kelas/FilterKelasOffCanvas";
import HorizontalFilter from "../components/Kelas/HorizontalFilter";
import SideFilterClass from "../components/Kelas/SideFilterClass";

const KelasBerjalan = () => {
  const [sideFilterClass, setSideFilterClass] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [query, setquery] =  useState('');
  const handleFilterClass = (q) => {
    setSideFilterClass(q);
  }

  return (
    <>
      <div className="bg-layar-hp">
        <Nav />
        <div className="bg-kelas-berjalan">
          <div className="container py-md-4">
            <div className="kelas-header d-flex justify-content-between align-items-center py-md-4 gap-5">
              <h3 className="text-start m-0 tagline-kelas-berjalan">
                Kelas Berjalan
              </h3>
              <div className="d-flex">
                <FilterKelasOffCanvas filterBerjalan={handleFilterClass} click={setIsClick}/>
                <Row>
                  <Col>
                    <div className="class-search ">
                      <input
                        type="text"
                        placeholder="Cari Kelas"
                        className="pl-5 search-form"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                      />
                      <div className="d-flex align-items-center position-absolute top-50 end-0 translate-middle-y px-2">
                        <Search />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="konten-kelas my-2">
              <Row>
                <Col md={4}>
                  <SideFilterClass filterBerjalan={handleFilterClass} click={setIsClick} />
                </Col>

                <Col md={8}>
                  <HorizontalFilter filteredClass={sideFilterClass} clicked={isClick} query={query} />
                </Col>
              </Row>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="bg-navbarbot">
        <NavbarBottom />
      </div>
    </>
  );
};

export default KelasBerjalan;
