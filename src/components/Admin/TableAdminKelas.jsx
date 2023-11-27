import { useState } from "react";
import "../../styles/TableAdmin.css";
import { Form } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";
import addBtn from "../../assets/gala_add.svg";
import ModalTambahKelas from "../Modals/ModalTambahKelas";
import ModalUbahKelas from "../Modals/ModalUbahKelas";

const TableAdminKelas = () => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  return (
    <>
      <div>
        {/* Header  */}
        <div className="header">
          <h3 className="header-title my-0">Kelola Kelas</h3>
          <div className="atribut">
            <button
              className="btn-tambah"
              onClick={() => setModalShowTambah(true)}
            >
              <img src={addBtn} alt="" className="pe-2" />
              Tambah
            </button>
            <button className="btn-filter">
              <Funnel className="icon-filter me-1" />
              Filter
            </button>
            <div className="position-relative form-admin">
              <Form.Control
                type="text"
                placeholder="Cari Kelas"
                className="pl-5 search-form-admin" // Sesuaikan padding kiri agar ikon tetap terlihat
              />
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table mt-3">
            <thead className="table-primary">
              <tr className="header-table">
                <th scope="col">Kode Kelas</th>
                <th scope="col">Kategori</th>
                <th scope="col">Nama Kelas</th>
                <th scope="col">Tipe Kelas</th>
                <th scope="col">Level</th>
                <th scope="col">Harga Kelas</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className="isi-table">
              <tr>
                <th scope="row text-kode">UIUX0123</th>
                <td className="text-kategori">UI/UX Design</td>
                <td className="text-nama">Belajar Web Designer dengan Figma</td>
                <td className="text-tipe-gratis">GRATIS</td>
                <td className="text-level">Beginner</td>
                <td className="text-harga">Rp 0</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row text-kode">DS0223</th>
                <td className="text-kategori">Data Science</td>
                <td className="text-nama">Data Cleaning untuk pemula</td>
                <td className="text-tipe-gratis">GRATIS</td>
                <td className="text-level">Beginner</td>
                <td className="text-harga">Rp 0</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row text-kode">DS0323</th>
                <td className="text-kategori">Data Science</td>
                <td className="text-nama">Data Cleaning untuk Professional</td>
                <td className="text-tipe-premium">PREMIUM</td>
                <td className="text-level">Advanced</td>
                <td className="text-harga">Rp 199,000</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row text-kode">PM0123</th>
                <td className="text-kategori">Product Management</td>
                <td className="text-nama">Scrum dalam tim kompleks</td>
                <td className="text-tipe-premium">PREMIUM</td>
                <td className="text-level">Intermediate</td>
                <td className="text-harga">Rp 199,000</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row text-kode">PM0223</th>
                <td className="text-kategori">Data Science</td>
                <td className="text-nama">Penerapan manajemen Agile</td>
                <td className="text-tipe-premium">PREMIUM</td>
                <td className="text-level">Advanced</td>
                <td className="text-harga">Rp 199,000</td>
                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row text-kode">AD1023</th>
                <td className="text-kategori">Web Development</td>
                <td className="text-nama">Mengenal Android Studio </td>
                <td className="text-tipe-gratis">GRATIS</td>
                <td className="text-level">Beginner</td>
                <td className="text-harga">Rp 199,000</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row text-kode">WD1123</th>
                <td className="text-kategori">Data Science</td>
                <td className="text-nama">CSS dan HTML dalam seminggu</td>
                <td className="text-tipe-gratis">GRATIS</td>
                <td className="text-level">Beginner</td>
                <td className="text-harga">Rp 199,000</td>

                <td className="aksi-btn ">
                  <div className="btn-wrapper d-flex gap-2">
                    <button
                      className=" btn btn-create "
                      onClick={() => setModalShowUbah(true)}
                    >
                      Ubah
                    </button>
                    <button className=" btn btn-delete">Hapus</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ModalUbahKelas
        show={modalShowUbah}
        onHide={() => setModalShowUbah(false)}
      />
      <ModalTambahKelas
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
    </>
  );
};

export default TableAdminKelas;
