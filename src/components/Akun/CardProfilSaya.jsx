import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/CardProfilSaya.css"
import btnLogin from "../../assets/fi_log-in.svg";

import SideBarAkun from "./SideBarAkun";
import FormProfilSaya from "./FormProfilSaya";

const CardProfilSaya = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <div className="container py-2">
      <div className="card card-akun">
        <div className="card-header d-flex align-items-center justify-content-center">
          Akun
        </div>
        <div className="card-body">
          {isLoggedIn ? (
            <Row>
              <Col md={5}>
                <SideBarAkun />
              </Col>

              <Col md={7}>
                <Container className="px-4">
                  <FormProfilSaya />
                </Container>
              </Col>
            </Row>
          ) : (
            <Link to={"/login"} className="text-decoration-none">
              <img src={btnLogin} />
              <p>Masuk</p>
            </Link>
          )}
        </div>
      </div>
      </div>
  );
};

export default CardProfilSaya;
