import "../../styles/Auth.css";

import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        {
          nama: name,
          email: email,
          telp: telp,
          password: password,
        });

        window.location.href = "/otp";

      if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.token);
      }

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
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
                  />
                </div>
                <label>Email</label>
                <div className="input-form-user mb-3  ">
                  <input
                    type="email"
                    className="form-control-login"
                    placeholder="Contoh:Johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label>Nomor Telepon</label>
                <div className="input-form-user mb-3">
                  <input
                    type="text"
                    className="form-control-login"
                    placeholder="+62"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                  />
                </div>
                <label>Buat Password</label>
                <div className="input-form-user mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control-login"
                    placeholder="Masukan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    Masuk
                  </button>
                </div>
                <p className=" text-muted text-center">
                  Belum punya akun?{" "}
                  <a href="/Login" className="text-decoration-none a ">
                    Login
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
