// import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/CardProfilSaya.css"
import SideBarAkun from "./SideBarAkun";
import DetailRiwayat from "./DetailRiwayat";

const CardRiwayat = () => {
  return (
    <div className="container py-2">
      <div className="card card-akun">
        <div className="card-header d-flex align-items-center justify-content-center">
          Akun
        </div>
        <div className="card-body">
          <Row>
            <Col md={5}>
              <SideBarAkun />
            </Col>

            <Col md={7}>
              <Container className="px-0">
                <DetailRiwayat />
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CardRiwayat