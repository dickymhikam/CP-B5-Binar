import React, { useState, useEffect, useRef } from 'react';
import { verifyOtp, resendOtp } from '../../services/api';

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

    const handleKeyDown = (e, index) => {
        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].current.focus();
            const input = inputRefs.current[index - 1].current;
            setTimeout(() => {
                input.setSelectionRange(input.value.length, input.value.length);
            }, 0);
        } else if (e.key === 'ArrowRight' && index < otpInputs.length - 1) {
            inputRefs.current[index + 1].current.focus();
        } else if (e.key === 'Backspace') {
            if (index === 0 && otpInputs[index] === '') {
                setOtpInputs(prevInputs => {
                    const newInputs = [''].concat(prevInputs.slice(1));
                    return newInputs;
                });
            } else if (index > 0 && otpInputs[index] === '') {
                inputRefs.current[index - 1].current.focus();
                setOtpInputs(prevInputs => {
                    const newInputs = [...prevInputs];
                    newInputs[index - 1] = '';
                    return newInputs;
                });
            }
        }
    };

    const handlePaste = (e, index) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain');
        const newInputs = [...otpInputs];
        for (let i = 0; i < pastedData.length && index + i < newInputs.length; i++) {
          newInputs[index + i] = /^\d$/.test(pastedData[i]) ? pastedData[i] : '';
        }
        setOtpInputs(newInputs);
    };

    const handleVerifyOTP = async () => {
        const enteredOTP = otpInputs.join('');
        setIsFetching(true);
        try {
            const verify = await verifyOtp(enteredOTP);
            if (verify) {
                localStorage.setItem('token', verify.token);
                window.location.href = '/';
            }            
        } catch (error) {
            throw(error)
        } 
        setIsFetching(false);
    };

    const handleResendOTP = async () => {
        try {
            const resend = resendOtp(email);
            if (resend) {
                setResendTimer(120);
            }
        } catch (error) {
            throw(error);
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
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={(e) => handlePaste(e, index)}
                        />
                    ))}
                </div>
                <p className="text-center">
                    Kirim Ulang OTP dalam {Math.floor(resendTimer / 60)} menit {resendTimer % 60} detik  <br />
                    {resendTimer === 0 && (
                        <a className='resend' onClick={handleResendOTP}>
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

