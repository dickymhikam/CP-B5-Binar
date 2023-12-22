import "../../styles/Admin/TableAdmin.css";

const TableAdmin = ({ searchResults }) => {
  return (
    <>
      <div className="header">
        <h3 className="header-title my-0">Status Pembayaran</h3>
        <div className="atribut d-flex align-items-center">
        </div>
      </div>

      <div className="table-responsive">
        {searchResults.length > 0 ? (
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
              {searchResults?.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td className="text-kategori">{data.kategori}</td>
                  <td className="text-class">{data.kelas}</td>
                  <td
                    className={
                      data.status === "SUDAH BAYAR"
                        ? "text-lunas"
                        : "text-belum"
                    }
                  >
                    {data.status}
                  </td>
                  <td className="text-payment">{data.metodePembayaran}</td>
                  <td className="text-date">{data.tanggalBayar}</td>
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
    </>
  );
};

export default TableAdmin;