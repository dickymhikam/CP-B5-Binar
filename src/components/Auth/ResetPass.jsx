import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/Auth.css";
import { resetPassword } from "../../services/api"

const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const code = params.get("code");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Password tidak cocok")
      return;
    }
    resetPassword(email, code, newPassword)
    navigate("/login");
  };
  
  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper ">
          <div className=" col-md-7 my-auto d-flex justify-content-center align-items-center">
            <div className="auth-form-wrapper">
              <h3 className="txtmasuk font-bold">Reset Password</h3>
              <form className="fm" onSubmit={handlePasswordReset}>
                <label>Masukkan Password Baru </label>
                <div className="input-form-user mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control-login"
                    placeholder="Masukan Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <i
                    className="icon-show"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeSlashFill /> : <EyeFill />}
                  </i>
                </div>
                <label>Ulangi Password Baru</label>
                <div className="input-form-user mb-3">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    className="form-control-login"
                    placeholder="Ulangi Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <i
                    className="icon-show"
                    onClick={() => setShowPassword2(!showPassword2)}
                  >
                    {showPassword2 ? <EyeSlashFill /> : <EyeFill />}
                  </i>
                </div>
                <div className="d-grid mb-5 ">
                  <button className="btn btn-masuk" type="submit">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 account-block"></div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
