import "../../styles/Auth.css";

const Login = () => {
  return (
    <>
      <div className="auth-section">
        <div className="row auth-wrapper">
          <div className=" col-lg-7 my-auto d-flex justify-content-center">
            <div className="px-5">
              <h3 className="txtmasuk font-bold">Masuk</h3>
              <form className="fm">
                <div className="control-form mb-3  ">
                  <label>Email / No Telepon</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Contoh:Johndoe@gmail.com"
                  />
                </div>
                <div className="control-form mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Masukan Password"
                  />
                </div>
                <div className="d-grid mb-5 ">
                  <button className="btn btn-masuk" type="submit">
                    Masuk
                  </button>
                </div>
                <p className="control-form text-muted text-center">
                  Belum punya akun?{" "}
                  <a href="/register" className="text-decoration-none a">
                    {" "}
                    Daftar di sini
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-5 account-block"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
