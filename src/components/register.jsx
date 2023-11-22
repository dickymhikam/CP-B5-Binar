import '../styles/auth.css';
import React from 'react'

const register = () => {
  return (
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10">
                <div className="card border-0">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p-5">
                                        <h3 className="txtmasuk font-bold ">Daftar</h3>
                                    <form>
                                        <div className="control-form mb-3 ">
                                        <label>Nama</label>
                                          <input 
                                           type="text"
                                           className="form-control"
                                            placeholder="Nama Lengkap" required/>
                                        </div>
                          
                                        <div className=" control-form mb-3">
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
                                          <button className="btn btn-masuk" type="submit">Daftar</button>
                                        </div>
                          
                                        <p className="control-form text-muted text-center mt-3 mb-0 ">Sudah punya akun? <a href="/login" className="text-decoration-none">Masuk di sini</a></p>
                                      </form>
                                </div>
                            </div>

                            
    
                            <div className="col-lg-5 d-none d-lg-inline-block">
                                <div className="account-block rounded-right">
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
               
    
            </div>
        </div>
        
    </div>
  )
}

export default register
