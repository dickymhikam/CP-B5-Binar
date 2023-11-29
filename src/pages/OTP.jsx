import { Link } from "react-router-dom";

import CardOTP from "../components/Auth/CardOTP";
import btnBack from "../assets/fi_arrow-left-black.svg";

import "../styles/OTP.css"

const OTPBerhasil = () => {
    return (
        <>
            <div className="OTP-wrapper">
                <div className="OTP-body">
                    <Link to={"/register"}>
                        <img src={btnBack} />
                    </Link>
                    <CardOTP />
                </div>
                <div className="OTP-brand">
                    <div className="navbar-brand"></div>
                </div>
            </div>
        </>
    )
}

export default OTPBerhasil;