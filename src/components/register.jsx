import '../styles/auth.css';
import React from 'react'

const register = () => {
  return (
    <div className="row auth-coba ">
    <div className=" col-lg-7 my-auto d-flex justify-content-center">
        <div className="px-5">
        <h3 className="txtmasuk font-bold">Daftar</h3>
        <form>
          <div className="control-form mb-3 ">
            <label>Nama</label>
              <input 
               type="text"
               className="form-control"
                placeholder="Nama Lengkap"/>
            </div> 
            <div className="control-form mb-3  ">
            <label>Email</label>
              <input type="email" 
              className="form-control"  
              placeholder="Contoh:Johndoe@gmail.com"/>
            </div>  

            <div className="control-form mb-3">
              <label>Nomor Telepon</label>
            <input 
            type="text" 
            className="form-control" 
             placeholder="+62"/>
          </div>

            <div className="control-form mb-3">
              <label>Buat Password</label> 
              <input 
              type="password" 
              className="form-control"  
              placeholder="Masukan Password"/>
            </div>
            <div className="d-grid mb-5 ">
              <button className="btn btn-masuk" type="submit">Masuk</button>
            </div>
            <p className="control-form text-muted text-center">Belum punya akun? <a href="/Login" className="text-decoration-none a "> Daftar di sini</a></p>
          </form>
        </div>
    </div>
    <div className="col-lg-5 account-block">
    </div>
</div>
  )
}

export default register
