import { useEffect, useState } from "react";
import { ImageAlt } from "react-bootstrap-icons";

import "../../styles/FormProfilSaya.css";

import { getUser } from "../../services/api";

const FormProfilSaya = () => {
  const [dataUser, setDataUser] = useState("");  

  useEffect(() => {
    getUser()
      .then((data) => {
        setDataUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching course list:", error);
      });
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("File yang diunggah:", file);
  };

  // const handleUpdateProfil = (e) => {
  //   nama
  //   negara
  //   kota
  // }
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
          <input type="text" 
          className="form-control" 
          value={dataUser?.nama} />
        </form>
        <form className="mt-1">
          <label className="text-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={dataUser?.email}
            disabled
          /> 
        </form>
        <form className="mt-1">
          <label className="text-label">Nomor Telepon</label>
          <input
            type="number"
            className="form-control"
            value={dataUser?.telp}
            disabled
          />
        </form>
        <form className="mt-2">
          <label className="text-label">Kota</label>
          <input type="text" 
          className="form-control" 
          value={dataUser?.kota} />
        </form>
        <form className="mt-2">
          <label className="text-label">Negara</label>
          <input type="text" 
          className="form-control" 
          value={dataUser?.negara}/> 
        </form>
        <button className="btn-profile mt-4">Simpan Profile Saya</button>
        {/* <button className="btn-profile mt-4" onClick={(e) => {handleUpdateProfil(e)}}>Simpan Profile Saya</button> */}
      </div>   
    </>
  );
};

export default FormProfilSaya;
