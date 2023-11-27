import { Funnel, Search } from "react-bootstrap-icons"

import "../../styles/TableAdmin.css"

const TableAdmin = () => {
    return (
        <>
        {/* Header  */}
            <div className="header">
                <h3 className="header-title">Status Pembayaran</h3>
                <div className="atribut">
                    <button className="btn-filter"><Funnel className="icon-filter me-1"/>Filter</button>
                    <button className="btn-search"><Search className="mb-1"/></button>
                </div>
            </div>

            {/* Table */}

        <div className="table-responsive">
            <table className="table mt-3">
                <thead className="table-primary">
                    <tr className="header-table">
                        <th scope="col">ID</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Kelas Premium</th>
                        <th scope="col">Status</th>
                        <th scope="col">Metode Pembayaran</th>
                        <th scope="col">Tanggal Bayar</th>
                    </tr>
                </thead>
                <tbody className="isi-table">
                    <tr>
                        <th scope="row">johndoe123</th>
                            <td className="text-kategori">UI/UX Design</td>
                            <td className="text-class">Belajar Web Designer Dengan Figma</td>
                            <td className="text-lunas">Sudah Bayar</td>
                            <td className="text-payment">Credit Card</td>
                            <td className="text-date">21 sep, 2023 at 2:00 AM</td>
                    </tr>
                    <tr>
                        <th scope="row">supermanxx</th>
                            <td className="text-kategori">UI/UX Design</td>
                            <td className="text-class">Belajar Web Designer Dengan Figma</td>
                            <td className="text-belum">Belum Bayar</td>
                            <td className="empty">-</td>
                            <td className="empty">-</td>
                       
                    </tr>
                    <tr>
                    <th scope="row">ironman99</th>
                            <td className="text-kategori">Web Development</td>
                            <td className="text-class">CSS dan HTML dalam seminggu</td>
                            <td className="text-lunas">Sudah bayar</td>
                            <td className="text-payment">Credit Card</td>
                            <td className="text-date">20 Sep, 2023 at 2:00 AM</td>
                    </tr>
                    <tr>
                    <th scope="row">lokiMaster</th>
                            <td className="text-kategori">Data Science</td>
                            <td className="text-class">Data Cleaning untuk pemula </td>
                            <td className="text-lunas">Sudah Bayar</td>
                            <td className="text-payment">Credit Card</td>
                            <td className="text-date">19 Sep,2023 at 2:00 AM</td>
                    </tr>
                    <tr>
                    <th scope="row">siapaAjaani</th>
                            <td className="text-kategori">Data Science</td>
                            <td className="text-class">Data Cleaning untuk pemula</td>
                            <td className="text-belum">Belum Bayar</td>
                            <td className="empty">-</td>
                            <td className="empty">-</td>
                    </tr>

                    <tr>
                    <th scope="row">lokiMaster</th>
                            <td className="text-kategori">Web Development</td>
                            <td className="text-class">Membuat Wordpress Mudah  </td>
                            <td className="text-belum">Belum Bayar</td>
                            <td className="empty">-</td>
                            <td className="empty">-</td>
                    </tr>
                    
                    <tr>
                    <th scope="row">visionOKE</th>
                            <td className="text-kategori">Data Science</td>
                            <td className="text-class">Data Cleaing untuk pemula</td>
                            <td className="text-lunas">Sudah Bayar</td>
                            <td className="text-payment">Credit Card</td>
                            <td className="text-date">10 Sep, 2023 at 2:00 Am</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TableAdmin