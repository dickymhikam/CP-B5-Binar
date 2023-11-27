import React, { useState } from 'react';

const CardOTP = () => {
    const [lastInputStatus, setLastInputStatus] = useState(0);
    const inputs = Array.from({ length: 6 }, () => useState(''));

    const handleKeyUp = (e, index) => {
        const currentElement = e.target;
        const nextIndex = index + 1;
        const prevIndex = index - 1;
    
        if (prevIndex >= 0 && e.keyCode === 8) {
          if (lastInputStatus === 1) {
            inputs[prevIndex][1]('');
            document.getElementById(`otp-input-${prevIndex}`).focus();
          }
          setLastInputStatus(1);
        } else {
          const reg = /^[0-9]+$/;
          if (!reg.test(currentElement.value)) {
            currentElement.value = currentElement.value.replace(/D/g, '');
          } else if (currentElement.value) {
            if (nextIndex < inputs.length) {
              document.getElementById(`otp-input-${nextIndex}`).focus();
            } else {
              setLastInputStatus(0);
            }
          }
        }
    };

    return (
        <>
            <div className="otp-card">
                <h1>Masukkan OTP</h1>
                <p className="text-center">Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
                <div className="otp-card-inputs">
                    {inputs.map((input, index) => (
                        <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={input[0]}
                        onChange={(e) => {
                            input[1](e.target.value);
                            handleKeyUp(e, index);
                        }}
                        />
                    ))}
                </div>
                <p className="text-center">
                    Kirim Ulang OTP dalam 60 detik <a href="#">Kirim Ulang</a>
                </p>
                <button disabled>Simpan</button>
            </div>
            {/* <div className="otp-card">
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
            </div> */}
        </>
    )
}

export default CardOTP;