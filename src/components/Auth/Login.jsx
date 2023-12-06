import "../../styles/Auth.css";

import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        {
          email: email,
          password: password,
        });

        if (response.data.data.token) {
          localStorage.setItem('token', response.data.data.token);
        }

        window.location.href = "/";

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className=" col-md-7 d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Masuk</h3>
              <form onSubmit={loginHandler} className="fm">
                <label className="mt-3">Email / No Telepon</label>
                <div className="input-form-user">
                  <input
                    type="email"
                    className="form-control-login"
                    placeholder="Johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <label className="mt-3">Password</label>
                  <label className="body-txt-lupa mt-3">Lupa Kata Sandi</label>
                </div>
                <div className="input-form-user">
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
                <div className="d-grid mb-5 mt-2">
                  <button className="btn btn-masuk " type="submit">
                    Masuk
                  </button>
                </div>
                <p className="control-form text-muted text-center">
                  Belum punya akun?{" "}
                  <a href="/register" className="text-decoration-none a">
                    {" "}
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

export default Login;
