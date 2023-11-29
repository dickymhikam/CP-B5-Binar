const SideFilter = () => {
  return (
    <div className="side-filter">
      <div className="container ps-3">
        <h5 className="mb-3 pt-3 filters-tagline">Filter</h5>
        <div className="checkbox-filter gap-2">
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Paling Baru
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Paling Populer
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Promo
            </label>
          </div>
        </div>

        <h5 className="mt-4 mb-3 filters-tagline">Kategori</h5>
        <div className="checkbox-kategori gap-2">
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              UI / UX Design
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Web Development
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Android Development
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Data Science
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Business Intelligence
            </label>
          </div>
        </div>

        <h5 className="mt-4 mb-3 filters-tagline">Level Kesulitas</h5>
        <div className="checkbox-level gap-2">
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Semua Level
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Beginner Level
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Intermediate Level
            </label>
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox-label">
              Advanced Level
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 btn btn-outline-danger d-flex justify-content-center mx-2">
        Hapus Filter
      </div>
    </div>
  );
};

export default SideFilter;
