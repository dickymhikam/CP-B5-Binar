import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";

import { changePassword } from "../../services/api";

const FormUbahPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const handleChange = (e, field) => {
    setPasswords({ ...passwords, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.repeatNewPassword) {
      toast.error("Password baru tidak cocok");
      return;
    }

    try {
      await changePassword({
        oldpassword: passwords.oldPassword,
        newpassword: passwords.newPassword,
      });
      setPasswords({
        oldPassword: "",
        newPassword: "",
        repeatNewPassword: "",
      });
      toast.success("Password berhasil diubah");
    } catch (error) {
      toast.error(error);
    }
  };


  return (
    <>
      <div className="header-border d-grid justify-content-center mx-auto">
        <h1 className="ubah-pass-tagline">Ubah Password</h1>
      </div>
      <div className="input-profile">
        <form className="mt-2" onSubmit={handleSubmit}>
          <label className="text-label">Masukkan Password Lama</label>
          <div className="input-form-user">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password Lama"
              value={passwords.oldPassword}
              onChange={(e) => handleChange(e, "oldPassword")}
            />
              <i
              className="icon-show"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeSlashFill /> : <EyeFill />}
            </i>
          </div>
          <label className="text-label">Masukkan Password Baru</label>
          <div className="input-form-user">
            <input
              type={showPassword2 ? "text" : "password"}
              className="form-control"
              placeholder="Password Baru"
              value={passwords.newPassword}
              onChange={(e) => handleChange(e, "newPassword")}
            />
            <i
              className="icon-show"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? <EyeSlashFill /> : <EyeFill />}
            </i>
          </div>
          <label className="text-label">Ulangi Password Baru</label>
          <div className="input-form-user">
            <input
              type={showPassword3 ? "text" : "password"}
              className="form-control"
              placeholder="Ulangi Password Baru"
              value={passwords.repeatNewPassword}
              onChange={(e) => handleChange(e, "repeatNewPassword")}
            />
              <i
              className="icon-show"
              onClick={() => setShowPassword3(!showPassword3)}
              >
                {showPassword3 ? <EyeSlashFill /> : <EyeFill />}
              </i>
          </div>
          <button type="submit" className="btn-profile mt-4">
            Simpan Password
          </button>
        </form>
      </div>
    </>
  );
};

export default FormUbahPassword;
