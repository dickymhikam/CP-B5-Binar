import React, { useState, useEffect } from 'react';

const CardOTP = () => {
    const [lastInputStatus, setLastInputStatus] = useState(0);
    const [otpInputs, setOtpInputs] = useState(Array.from({ length: 6 }, () => ''));
    const [isSimpanEnabled, setIsSimpanEnabled] = useState(false);

    const handleKeyUp = (e, index) => {
        const currentElement = e.target;
        const nextIndex = index + 1;
        const prevIndex = index - 1;

        if (prevIndex >= 0 && e.keyCode === 8) {
            if (lastInputStatus === 1) {
                const newInputs = [...otpInputs];
                newInputs[prevIndex] = '';
                setOtpInputs(newInputs);
                document.getElementById(`otp-input-${prevIndex}`).focus();
            }
            setLastInputStatus(1);
        } else {
            const reg = /^[0-9]+$/;
            if (!reg.test(currentElement.value)) {
                currentElement.value = currentElement.value.replace(/D/g, '');
            } else if (currentElement.value) {
                const newInputs = [...otpInputs];
                newInputs[index] = currentElement.value;
                setOtpInputs(newInputs);

                if (nextIndex < otpInputs.length) {
                    document.getElementById(`otp-input-${nextIndex}`).focus();
                } else {
                    setLastInputStatus(0);
                }
            }
        }
    };

    useEffect(() => {
        const allInputsFilled = otpInputs.every(input => input !== '');
        setIsSimpanEnabled(allInputsFilled);
    }, [otpInputs]);

    return (
        <>
            <div className="otp-card">
                <h1>Masukkan OTP</h1>
                <p className="text-center">Ketik 6 digit kode yang dikirimkan ke J*****@gmail.com</p>
                <div className="otp-card-inputs">
                    {otpInputs.map((input, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={input}
                            onChange={(e) => {
                                handleKeyUp(e, index);
                            }}
                        />
                    ))}
                </div>
                <p className="text-center">
                    Kirim Ulang OTP dalam 60 detik <a href="#">Kirim Ulang</a>
                </p>
                <button disabled={!isSimpanEnabled}>Simpan</button>
            </div>
        </>
    )
}

export default CardOTP;
