const CardOTP = () => {
    return (
        <>
            <div className="otp-card">
                <h1>Masukkan OTP</h1>
                <p className="text-center">Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
                <div className="otp-card-inputs">
                    <input type="text" maxLength="1" autoFocus/>
                    <input type="text" maxLength="1"/>
                    <input type="text" maxLength="1"/>
                    <input type="text" maxLength="1"/>
                    <input type="text" maxLength="1"/>
                    <input type="text" maxLength="1"/>
                </div>
                <p className="text-center">Kirim Ulang OTP dalam 60 detik <a href="#">Kirim Ulang</a></p>
                <button disabled>Simpan</button>
            </div>
        </>
    )
}

export default CardOTP;