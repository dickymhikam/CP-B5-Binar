import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CardOTP = ({ email }) => {
    const [otpInputs, setOtpInputs] = useState(Array.from({ length: 6 }, () => ''));
    const [isSimpanEnabled, setIsSimpanEnabled] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [resendTimer, setResendTimer] = useState(120);
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
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/otp/${enteredOTP}`,  
            );

            if (response.status === 200) {
                const successMessage = 'OTP benar. Redirecting...';
                toast.success(successMessage);
                localStorage.setItem('token', response.data.data.token);
                window.location.href = '/';
            } 
        } catch (error) {
            console.error('Error during OTP verification:', error);
            const errorMessage = 'Otp Salah. Silakan coba lagi.';
            toast.error(errorMessage);
            window.location.reload();
        } 
    };

    const handleVerifyOTP = async () => {
        const enteredOTP = otpInputs.join('');
        setIsFetching(true);
        await verifyOTP(enteredOTP);
    };

    const handleResendOTP = async () => {
        try {
            const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/resend-otp/${email}`
            );
            console.log('Sukses mengirim ulang OTP.', response.data);
            toast.success('OTP berhasil dikirim ulang.');
            setResendTimer(120);
        } catch (error) {
            console.error('Error during OTP resend:', error);
            const errorMessage = 'Gagal mengirim ulang OTP. Silakan coba lagi.';
            toast.error(errorMessage);
        }
    };
    
    useEffect(() => {
        const allInputsFilled = otpInputs.every(input => input !== '');
        setIsSimpanEnabled(allInputsFilled);
        const timerInterval = setInterval(() => {
            setResendTimer(prevTimer => Math.max(0, prevTimer - 1));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [otpInputs]);

    return (
        <>
            <div className="otp-card">
                <h1>Masukkan OTP</h1>
                <p className="text-center">Ketik 6 digit kode yang dikirimkan ke <span style={{color : 'blue'}}>{email}</span></p>
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
                    Kirim Ulang OTP dalam {Math.floor(resendTimer / 60)} menit {resendTimer % 60} detik  <br />
                    {resendTimer === 0 && (
                        <a onClick={handleResendOTP}  style={{ textDecoration: 'none',color : 'blue'}}>
                        Kirim Ulang
                        </a>
                    )}
                </p>
                <button disabled={!isSimpanEnabled || isFetching} onClick={handleVerifyOTP}>
                    {isFetching ? 'Verifikasi...' : 'Simpan'}
                </button>
            </div>
        </>
    );
};

export default CardOTP;

