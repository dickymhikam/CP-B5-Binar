import { ImageAlt } from "react-bootstrap-icons";

import "../../styles/FormProfilSaya.css";

const FormProfilSaya = () => {
  return (
    <>
      
        <div className="header-border d-grid justify-content-center">
          <div className="border mb-1" />
          <button className="btn-img">
            <ImageAlt className="icon-img" />
          </button>
        </div>
        <div className="input-profile ">
          <form className="mt-2">
            <label className="text-label">Nama</label>
            <input
              type="email"
              className="form-control"
              placeholder="John Doe"
            />
          </form>
          <form className="mt-1">
            <label className="text-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="johndoe@gmail.com"
            />
          </form>
          <form className="mt-1">
            <label className="text-label">Nomor Telepon</label>
            <input
              type="email"
              className="form-control"
              placeholder="+62  8121212112"
            />
          </form>
          <button className="btn-profile mt-4">Simpan Profile Saya</button>
        </div>
    </>
  );
};

export default FormProfilSaya;
