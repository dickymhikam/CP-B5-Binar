import React, { useState, useEffect, useRef } from 'react';

const CardOTP = () => {
    const [otpInputs, setOtpInputs] = useState(Array.from({ length: 6 }, () => ''));
    const [isSimpanEnabled, setIsSimpanEnabled] = useState(false);

    const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        const newInputs = [...otpInputs];
        newInputs[index] = value;
        setOtpInputs(newInputs);

        if (value !== '' && index < otpInputs.length - 1) {
            inputRefs.current[index + 1].current.focus();
        } else if (value === '' && index > 0) {
            inputRefs.current[index - 1].current.focus();
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
                            ref={inputRefs.current[index]}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={input}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    ))}
                </div>
                <p className="text-center">
                    Kirim Ulang OTP dalam 60 detik <a href="#">Kirim Ulang</a>
                </p>
                <button disabled={!isSimpanEnabled}>Simpan</button>
            </div>
        </>
    );
};

export default CardOTP;
