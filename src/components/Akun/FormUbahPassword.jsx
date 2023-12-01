import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";


const FormUbahPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  return (
    <>
      <div className="header-border d-grid justify-content-center mx-auto">
        <h1 className="ubah-pass-tagline">Ubah Password</h1>
      </div>
      <div className="input-profile">
        <form className="mt-2">
          <label className="text-label">Masukkan Password Lama</label>
          <div className="input-form-user">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="********"
            />
              <i className="icon-show" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashFill/> : <EyeFill/>}</i>
          </div>  
        </form>
        <form className="mt-1">
          <label className="text-label">Masukkan Password Baru</label>
            <div className="input-form-user">
              <input
                type={showPassword2 ? "text" : "password"}
                className="form-control"
                placeholder="********"
              />
              <i className="icon-show" onClick={() => setShowPassword2(!showPassword2)}>{showPassword2 ? <EyeSlashFill/> : <EyeFill/>}</i>
            </div>
        </form>
        <form className="mt-1">
          <label className="text-label">Ulangi Password Baru</label>
          <div className="input-form-user">
            <input
              type={showPassword3 ? "text" : "password"}
              className="form-control"
              placeholder="********"
            />
              <i className="icon-show" onClick={() => setShowPassword3(!showPassword3)}>{showPassword3 ? <EyeSlashFill/> : <EyeFill/>}</i>
          </div>
        </form>
        <button className="btn-profile mt-4">Simpan Profile Saya</button>
      </div>
    </>
  );
};

export default FormUbahPassword;
