import "../styles/KelasBerjalan.css";

import { Form, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
import NavbarBottom from "../components/Home/NavbarBottom";
import FilterKelasOffCanvas from "../components/Kelas/FilterKelasOffCanvas";
import SideFilter from "../components/Kelas/SideFilter";
import HorizontalFilter from "../components/Kelas/HorizontalFilter";

const KelasBerjalan = () => {
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
                <FilterKelasOffCanvas />
                <Form
                  inline="true"
                  className="d-flex justify-content-end m-0 search-kelas"
                >
                  <Row>
                    <Col>
                      <div className="position-relative form">
                        <Form.Control
                          type="text"
                          placeholder="Cari Kelas"
                          className="pl-5 search-form"
                        />
                        <div className="d-flex align-items-center position-absolute top-50 end-0 translate-middle-y px-2">
                          <Search />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>

            <div className="konten-kelas my-2">
              <Row>
                <Col md={4}>
                  <SideFilter />
                </Col>

                <Col md={8}>
                  <HorizontalFilter />
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
