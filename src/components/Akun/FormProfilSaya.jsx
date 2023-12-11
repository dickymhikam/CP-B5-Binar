import { useEffect, useState } from "react";
import { ImageAlt } from "react-bootstrap-icons";
import { toast } from "react-toastify";

import "../../styles/FormProfilSaya.css";

import { getUser, updateUser} from "../../services/api";

const FormProfilSaya = () => {
  const [dataUser, setDataUser] = useState({
    nama: "",
    email: "",
    telp: "",
    kota: "",
    negara: "",
  });

  useEffect(() => {
    getUser()
      .then((data) => {
        setDataUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("File yang diunggah:", file);
  };

  const handleInputChange = (e) => {
    setDataUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(dataUser);
      toast.success("Simpan profile berhasil!");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="input-profile">
        <form className="mt-2" onSubmit={handleSubmit}>
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
          <label className="text-label">Nama</label>
          <input
            type="text"
            className="form-control"
            name="nama"
            value={dataUser.nama}
            onChange={handleInputChange}
          />
          <label className="text-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={dataUser.email}
            disabled
          />
          <label className="text-label">Nomor Telepon</label>
          <input
            type="number"
            className="form-control"
            name="telp"
            value={dataUser.telp}
            disabled
          />
          <label className="text-label">Kota</label>
          <input
            type="text"
            className="form-control"
            name="kota"
            value={dataUser.kota}
            onChange={handleInputChange}
          />
          <label className="text-label">Negara</label>
          <input
            type="text"
            className="form-control"
            name="negara"
            value={dataUser.negara}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-profile mt-4">
            Simpan Profile Saya
          </button>
        </form>
      </div>
    </>
  );
};

export default FormProfilSaya;