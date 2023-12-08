import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import CardOTP from "../components/Auth/CardOTP";
import btnBack from "../assets/fi_arrow-left-black.svg";

import "../styles/OTP.css"

const OTPBerhasil = () => {
    const location = useLocation();
    const emailNextRegister = (location.state && location.state.email) || "";

    return (
        <>
            <div className="OTP-wrapper">
                <div className="OTP-body">
                    <Link to={"/register"}>
                        <img src={btnBack} />
                    </Link>
                    <CardOTP email={emailNextRegister} />
                </div>
                <div className="OTP-brand">
                    <div className="navbar-brand"></div>
                </div>
            </div>
        </>
    )
}

export default OTPBerhasil;