// import { useState } from "react";
import "../styles/TopikKelas.css";
import { Form, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import SideFilter from "../components/SideFilter";
import HorizontalFilterTopik from "../components/HorizontalFilterTopik";
import CardTopikKelas from "../components/CardTopikKelas";
import Nav from "../components/Nav";
// import Checkbox from "../components/Checkbox";

const TopikKelas = () => {
  return (
    <>
    <Nav />
      <div className="container">
        <div className="kelas-header d-flex justify-content-between align-items-center my-4 gap-5">
          <h3 className="text-start m-0">Topik Kelas</h3>
          <Form inline className="d-flex justify-content-end m-0 search-kelas">
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
              <HorizontalFilterTopik />

              {/* Card */}
              <CardTopikKelas />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TopikKelas;
