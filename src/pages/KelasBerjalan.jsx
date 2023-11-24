// import { useState } from "react";
import "../styles/KelasBerjalan.css";
import { Form, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import SideFilter from "../components/SideFilter";
import HorizontalFilter from "../components/HorizontalFilter";
import CardKelas from "../components/CardKelas";
import Nav from "../components/Nav";
import NavbarBottom from "../components/NavbarBottom";
// import Checkbox from "../components/Checkbox";

const KelasBerjalan = () => {
  return (
    <>
      <Nav />
      <div className="bg-kelas-berjalan">
        <div className="container">
          <div className="kelas-header d-flex justify-content-between align-items-center py-4 gap-5">
            <h3 className="text-start m-0">Kelas Berjalan</h3>
            <Form
              inline
              className="d-flex justify-content-end m-0 search-kelas"
            >
              <Row>
                <Col>
                  <div className="position-relative form">
                    <Form.Control
                      type="text"
                      placeholder="Cari Kelas"
                      className="pl-5 search-form" // Sesuaikan padding kiri agar ikon tetap terlihat
                    />
                    <div className="d-flex align-items-center position-absolute top-50 end-0 translate-middle-y px-2">
                      <Search />
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>

          <div className="konten-kelas my-5">
            <Row>
              <Col md={4}>
                <SideFilter />
              </Col>

              <Col md={8}>
                <HorizontalFilter />

                {/* Card */}
                <CardKelas />
              </Col>
            </Row>
          </div>
        </div>
        <NavbarBottom />
      </div>
    </>
  );
};

export default KelasBerjalan;
