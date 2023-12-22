import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import "../styles/TopikKelas.css";
import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";
import FilterTopikKelasOffCanvas from "../components/Kelas/FilterTopikKelasOffCanvas";
import SideFilter from "../components/Kelas/SideFilter";
import HorizontalFilterTopik from "../components/Kelas/HorizontalFilterTopik";

const TopikKelas = () => {
  const [sideFilter, setSideFilter] = useState([])
  const [isClick, setIsClick] = useState(false)
  const handle = (q) => {
        setSideFilter(q)
  
  };
  const [keyword, setkeyword] = useState('');
  const [navtxt, setnavtxt] =  useState('');
  const result = navtxt || keyword;

  return (
    <>
      <div className="bg-layar-hp">
        <Nav setnavtxt={setnavtxt}/>
        <div className="bg-topik-kelas">
          <div className="container py-md-4">
            <div className="kelas-header d-flex justify-content-between align-items-center py-md-4 gap-5">
              <h3 className="text-start m-0 tagline-topik-kelas">Topik Kelas</h3>
              <div className="d-flex">
                <FilterTopikKelasOffCanvas filter={handle} click={setIsClick}/>
                <Row>
                  <Col>
                    <div className="class-search">
                      <input
                        type="text"
                        placeholder="Cari Kelas"
                        className="pl-5 search-form"
                        value={keyword}
                        onChange={(e) => setkeyword(e.target.value)}
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
                  <SideFilter filter={handle} click={setIsClick}/>      
                </Col>
          
                <Col md={8}>
                  <HorizontalFilterTopik filtered={sideFilter} clicked={isClick}  keyword={result}/>  
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

export default TopikKelas;
