const DetailAbout = ({ courseDetail }) => {
  return (
    <>
      <div>
        <p className="txt-kelass">Tentang Kelas</p>
        <p className="txt-design-all">
          <span>
            {courseDetail?.deskripsi}
          </span>
        </p>
      </div>
    </>
  );
};

export default DetailAbout;
