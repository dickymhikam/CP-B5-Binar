import '../styles/Nav.css'
import { Link } from "react-router-dom";

import btnsearch from '../assets/bx_search-alt.png';
import btnlogin from '../assets/fi_log-in.png';
import btnNotif from '../assets/fi_bell.png';
import btnUser from '../assets/fi_user.png';

const Nav = () => {
    return (
        <>
            <nav className="navbar-wrapper">
                <Link to={"/"}>
                    <div className="navbar-brand"></div>
                </Link>
                <div className="navbar-search">
                    <input
                    className="input-search"
                    type="text"
                    placeholder="Cari Kursus terbaik..."
                    />
                    <button className="button-search">
                        <img src={btnsearch} />
                    </button>
                </div>
                {/* <Link to={"/login"}>
                    <button className="button-login"><img src={btnlogin} />Masuk</button>
                </Link> */}
                <div className="button-menu">
                    <Link to={"/kelas-saya"}>
                        <button className="btn-kelas">Kelas Saya</button>
                    </Link>
                    <Link to={"/topik-kelas"}>
                        <button className="btn-kelas">Topik Kelas</button>
                    </Link>
                    <button className="btn-user">
                        <img src={btnNotif}/>
                    </button>
                    <button className="btn-user">
                        <img src={btnUser} />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav;