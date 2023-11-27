const FormUbahPassword = () => {
  return (
    <>
      <div className="header-border d-grid justify-content-center mx-auto">
        <h1 className="ubah-pass-tagline">Ubah Password</h1>
      </div>
      <div className="input-profile">
        <form className="mt-2">
          <label className="text-label">Masukkan Password Lama</label>
          <input
            type="password"
            className="form-control"
            placeholder="******************"
          />
        </form>
        <form className="mt-1">
          <label className="text-label">Masukkan Password Baru</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******************"
          />
        </form>
        <form className="mt-1">
          <label className="text-label">Ulangi Password Baru</label>
          <input
            type="password"
            className="form-control"
            placeholder="**************"
          />
        </form>
        <button className="btn-profile mt-4">Simpan Profile Saya</button>
      </div>
    </>
  );
};

export default FormUbahPassword;
