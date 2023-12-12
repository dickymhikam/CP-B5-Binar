import { useEffect, useState } from "react";
import { ImageAlt } from "react-bootstrap-icons";
import { toast } from "react-toastify";

import "../../styles/FormProfilSaya.css";

import {
  getUser,
  updateUser,
  postPicture,
  getProfilePicture,
} from "../../services/api";

const FormProfilSaya = () => {
  const [dataUser, setDataUser] = useState({
    nama: "",
    email: "",
    telp: "",
    kota: "",
    negara: "",
  });
  const [profileUser, setProfileUser] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getUser()
      .then((data) => {
        setDataUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("multipartFile", file);
    const imageUrl = await postPicture(formData);
    setProfileUser(imageUrl);
    setRefresh(!refresh);
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
  
  useEffect(() => {
    getProfilePicture()
      .then((imageUrl) => {
        setProfileUser(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching profile picture:", error);
      });
  }, [refresh]);

  return (
    <>
      <div className="input-profile">
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="header-border">
            <div className="profile-image">
              <img src={profileUser} alt="Profile" />
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
            placeholder="Masukkan nama"
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
          <label className="text-label">Negara</label>
          <input
            type="text"
            className="form-control"
            name="negara"
            placeholder="Masukkan negara tempat tinggal"
            value={dataUser.negara}
            onChange={handleInputChange}
          />
          <label className="text-label">Kota</label>
          <input
            type="text"
            className="form-control"
            name="kota"
            placeholder="Masukkan kota tempat tinggal"
            value={dataUser.kota}
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