import { useState } from "react";
import { loginAdmin } from "../../services/apiAdmin";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

import "../../styles/Admin/LoginAdmin.css";
import brand from "../../assets/brand.svg";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const login = await loginAdmin(email, password);
      if (login.token) {
        localStorage.setItem("tokenAdmin", login.token);
        window.location.href = "/admin";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-admin-wrapper">
        <div className="login-admin-brand">
          <div className="navbar-brand gap-2">
            <img src={brand} alt="" />
            <h5 className="title-brand">LearnX</h5>
          </div>
        </div>
        <div className="login-admin-body">
          <div className="login-admin-input">
            <div className="admin-body-header">Login</div>
            <form className="admin-body-form" action="" onSubmit={loginHandler}>
              <div className="admin-form-item">
                <label>ID Admin</label>
                <div className="input-pass-admin">
                <input
                  type="email"
                  placeholder="ID Admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
              </div>
              <div className="admin-form-item">
                <label>Password</label>
                <div className="input-pass-admin">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
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
              </div>
              <button className="btn-login-admin" type="submit">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;