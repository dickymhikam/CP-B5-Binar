import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CardOTP = () => {
    const [otpInputs, setOtpInputs] = useState(Array.from({ length: 6 }, () => ''));
    const [isSimpanEnabled, setIsSimpanEnabled] = useState(false);
    const [isOtpCorrect, setIsOtpCorrect] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

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

    const verifyOTP = async (enteredOTP) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/otp/${enteredOTP}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                const successMessage = 'OTP benar. Redirecting...';
                setIsOtpCorrect(true);

                toast.success(successMessage);
            } else {
                const errorMessage = 'OTP salah. Silakan coba lagi.';
                setIsOtpCorrect(false);

                toast.error(errorMessage);
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            const errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';
            setIsOtpCorrect(false);
            toast.error(errorMessage);
        } 
    };

    const handleVerifyOTP = async () => {
        const enteredOTP = otpInputs.join('');
        setIsFetching(true);
        await verifyOTP(enteredOTP);
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
                <button disabled={!isSimpanEnabled || isFetching} onClick={handleVerifyOTP}>
                    {isFetching ? 'Verifikasi...' : 'Simpan'}
                </button>
            </div>
        </>
    );
};

export default CardOTP;
