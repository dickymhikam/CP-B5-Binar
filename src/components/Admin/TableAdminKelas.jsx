import { useState } from "react";

import "../../styles/Admin/TableAdmin.css";

import addBtn from "../../assets/gala_add.svg";
import ModalTambahKelas from "../Modals/ModalTambahKelas";
import ModalUbahKelas from "../Modals/ModalUbahKelas";
import ModalHapusKelas from "../Modals/ModalHapusKelas";

const TableAdminKelas = ({ searchResults }) => {
  const [modalShowTambah, setModalShowTambah] = useState(false);
  const [modalShowUbah, setModalShowUbah] = useState(false);
  const [modalShowHapus, setModalShowHapus] = useState(false);
  const [dataTable, setDataTable] = useState(null);
  const [kodeKelas, setKodeKelas] = useState(null);
  const [namaKelas, setNamaKelas] = useState("");

  const formatCurr = (value) => {
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
    return formattedValue;
  };

  function refreshModalUbah() {
    setTimeout(function () {
      location.reload();
    }, 2500);
  }

  return (
    <>
      <div>
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
          </div>
        </div>

        <div className="table-responsive">
          {searchResults.length > 0 ? (
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
                {searchResults?.map((classData, index) => (
                  <tr key={index}>
                    <th scope="row text-kode">{classData.kodeKelas}</th>
                    <td className="text-kategori">{classData.kategori}</td>
                    <td className="text-nama">{classData.namaKelas}</td>
                    <td
                      className={
                        classData.tipeKelas === "GRATIS"
                          ? "text-tipe-gratis"
                          : "text-tipe-premium"
                      }
                    >
                      {classData.tipeKelas}
                    </td>
                    <td className="text-level">{classData.level}</td>
                    <td className="text-harga">
                      {formatCurr(classData.harga)}
                    </td>

                    <td className="aksi-btn ">
                      <div className="btn-wrapper d-flex gap-2">
                        <button
                          className=" btn btn-create "
                          onClick={() => {
                            setModalShowUbah(true);
                            setDataTable(searchResults[index].kodeKelas);
                          }}
                        >
                          Ubah
                        </button>
                        <button
                          className=" btn btn-delete "
                          onClick={() => {
                            setModalShowHapus(true);
                            setKodeKelas(classData.kodeKelas);
                            setNamaKelas(classData.namaKelas);
                          }}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-danger fw-bold fs-5 my-5">
              Data kosong
            </p>
          )}
        </div>
      </div>
      <ModalUbahKelas
        show={modalShowUbah}
        onHide={() => {
          setModalShowUbah(false);
          setDataTable(null);
          refreshModalUbah();
        }}
        data={dataTable}
      />
      <ModalTambahKelas
        show={modalShowTambah}
        onHide={() => setModalShowTambah(false)}
      />
      <ModalHapusKelas
        show={modalShowHapus}
        onHide={() => setModalShowHapus(false)}
        kode={kodeKelas}
        namakelas={namaKelas}
      />
    </>
  );
};

export default TableAdminKelas;
