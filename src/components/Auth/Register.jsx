import { useState } from "react";

import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

import "../../styles/Auth.css";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper ">
          <div className=" col-md-7 my-auto d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
                <h3 className="txtmasuk font-bold">Daftar</h3>
                <form className="fm">
                    <label>Nama</label>
                    <div className="input-form-user mb-3 ">
                    <input
                      type="text"
                      className="form-control-login"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                    <label>Email</label>
                    <div className="input-form-user mb-3  ">
                    <input
                      type="email"
                      className="form-control-login"
                      placeholder="Contoh:Johndoe@gmail.com"
                    />
                  </div>
                    <label>Nomor Telepon</label>
                    <div className="input-form-user mb-3">
                    <input
                      type="text"
                      className="form-control-login"
                      placeholder="+62"
                    />
                  </div>
                    <label>Buat Password</label>
                    <div className="input-form-user mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control-login"
                      placeholder="Masukan Password"
                    />
                     <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
                  </div>
                  <div className="d-grid mb-5 ">
                    <button className="btn btn-masuk" type="submit">
                      Masuk
                    </button>
                  </div>
                  <p className=" text-muted text-center">
                    Belum punya akun?{" "}
                    <a href="/Login" className="text-decoration-none a ">
                      Daftar di sini
                    </a>
                  </p>
              </form>
            </div>
          </div>
          <div className="col-md-5 account-block"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
