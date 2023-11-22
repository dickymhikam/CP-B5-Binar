import '../styles/auth.css';
import React from "react";
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div id="main-wrapper" className="container pt-5">
        <div className="row justify-content-center">
            <div className="col-xl-10">
                <div className="card border-0">
                    <div className="card-body p-0 ">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="p-5">
                                        <h3 className="txtmasuk font-bold">Masuk</h3>
                                    <form>
                                        <div className="control-form mb-3">
                                            <label htmlFor="email">Email / No Telepon</label>
                                          <input type="email" 
                                          className="form-control"  
                                          id="email"
                                          placeholder="Contoh:Johndoe@gmail.com"/>
                                        </div>
                          
                                        <div className="control-form mb-3">
                                          <label htmlFor="password">Password</label> 
                                          <input 
                                          type="password" 
                                          className="form-control"  
                                          id="password"
                                          placeholder="Masukan Password"/>
                                        </div>
                          
                                        <div className="d-grid mb-5 ">
                                          <button className="btn btn-masuk" type="submit">Masuk</button>
                                        </div>

                                        <p className="control-form text-muted text-center">Belum punya akun? <a href="/register" className="text-decoration-none"> Daftar di sini</a></p>
                                      </form>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-sm-inline-block">
                                <div className="account-block rounded-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  );
};

export default Login;
