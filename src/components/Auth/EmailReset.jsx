import { useState } from "react";

import { resetEmail } from "../../services/api";

import "../../styles/Auth.css";
import brand from "../../assets/brand.svg";

const EmailReset = () => {
  const [email, setEmail] = useState("");

  const handleEmailReset = async (e) => {
    e.preventDefault();
    resetEmail(email);
  };

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Confirm Email</h3>
              <form className="fm" onSubmit={handleEmailReset}>
                <label className="mt-3">Email</label>
                <div className="input-form-user">
                  <input
                    type="email"
                    className="form-control-login"
                    placeholder="Johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-grid mb-2 mt-4">
                  <button className="btn btn-masuk" type="submit">
                    Masuk
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 account-block">
            <div className="navbar-brand gap-2">
              <img src={brand} alt="" />
              <h5 className="title-brand">LearnX</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailReset;