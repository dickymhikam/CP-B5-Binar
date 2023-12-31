import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import brand from "../../assets/brand.svg";

import "../../styles/Auth.css";
import { registerUser } from "../../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const register = await registerUser(name, email, telp, password);
    if (register) {
      navigate("/otp", { state: { email } });
    }
  };

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper ">
          <div className=" col-md-7 my-auto d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Daftar</h3>
              <form onSubmit={registerHandler} className="fm">
                <label>Nama</label>
                <div className="input-form-user mb-3 ">
                  <input
                    type="text"
                    className="form-control-login"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <label>Email</label>
                <div className="input-form-user mb-3  ">
                  <input
                    type="email"
                    className="form-control-login"
                    placeholder="Contoh: johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <label>Nomor Telepon</label>
                <div className="input-form-user mb-3">
                  <input
                    type="number"
                    className="form-control-login"
                    placeholder="+62"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                    required
                  />
                </div>
                <label>Buat Password</label>
                <div className="input-form-user mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control-login"
                    placeholder="Buat Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i
                    className="icon-show"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlashFill /> : <EyeFill />}
                  </i>
                </div>
                <div className="d-grid mb-5 ">
                  <button className="btn btn-masuk" type="submit">
                    Daftar
                  </button>
                </div>
                <p className=" text-muted text-center">
                  Sudah punya akun? {""}
                  <a href="/Login" className="text-decoration-none a ">
                    {""}
                    Masuk di sini
                  </a>
                </p>
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

export default Register;
