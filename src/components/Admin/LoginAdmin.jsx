import "../../styles/LoginAdmin.css";

const LoginAdmin = () => {
    return (
        <>
            <div className="login-admin-wrapper">
                <div className="login-admin-brand">
                    <div className="navbar-brand"></div>
                </div>
                <div className="login-admin-body">
                    <div className="login-admin-input">
                        <div className="admin-body-header">
                            Login
                        </div>
                        <form className="admin-body-form" action="">
                            <div className="admin-form-item">
                                <label>ID Admin</label>
                                <input type="text" placeholder="ID Admin" />
                            </div>
                            <div className="admin-form-item">
                                <label>Password</label>
                                <input type="password" placeholder="Masukkan password" />
                            </div>
                            <button className="btn-login-admin" type="submit">Masuk</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin;