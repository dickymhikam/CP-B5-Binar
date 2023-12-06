import { ImageAlt } from "react-bootstrap-icons";

import "../../styles/FormProfilSaya.css";

const FormProfilSaya = () => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("File yang diunggah:", file);
  };
  return (
    <>
      <div className="header-border">
        <div className="border mb-1">
          <label htmlFor="upload-input" className="btn-img">
            <ImageAlt className="icon-img" />
          </label>
        </div>
        <input
          type="file"
          id="upload-input"
          className="visually-hidden"
          onChange={handleFileUpload}
        />
      </div>

      <div className="input-profile ">
        <form className="mt-2">
          <label className="text-label">Nama</label>
          <input type="text" className="form-control" placeholder="John Doe" />
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
            type="number"
            className="form-control"
            placeholder="+62  8121212112"
          />
        </form>
        <form className="mt-2">
          <label className="text-label">Kota</label>
          <input type="text" className="form-control" placeholder="Jakarta" />
        </form>
        <form className="mt-2">
          <label className="text-label">Negara</label>
          <input type="text" className="form-control" placeholder="Indonesia" />
        </form>
        <button className="btn-profile mt-4">Simpan Profile Saya</button>
      </div>
    </>
  );
};

export default FormProfilSaya;
