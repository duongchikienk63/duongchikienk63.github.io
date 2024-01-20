import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useUserAuth } from '../context/UserAuthContext';
import styles from './PhoneAuth.module.scss';
import classNames from 'classnames/bind';

import { db } from '~/firebase';

import { doc, setDoc } from 'firebase/firestore';

const cx = classNames.bind(styles);

const PhoneSignUp = () => {
    const [error, setError] = useState('');
    const [number, setNumber] = useState('');
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState('');
    const [result, setResult] = useState('');
    const { setUpRecaptcha } = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        setError('');
        if (number === '' || number === undefined)
            return setError('Please enter a valid phone number!');
        try {
            const response = await setUpRecaptcha(number);
            setResult(response);
            setFlag(true);
        } catch (err) {
            setError(err.message);
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        setError('');
        if (otp === '' || otp === null) return;
        try {
            await result.confirm(otp);
            navigate('/');
            const data = {
                phoneLogin: number,
            };
            await setDoc(doc(db, 'user', number), data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className={cx('content')}>
                <div className="p-5 box">
                    <h2 className="mb-3">Đăng nhập</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form
                        onSubmit={getOtp}
                        style={{ display: !flag ? 'block' : 'none' }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <PhoneInput
                                style={{
                                    height: '57px',
                                    fontSize: '16px',
                                    marginBottom: '16px',
                                }}
                                className={cx('phone_ipt')}
                                defaultCountry="VN"
                                value={number}
                                onChange={setNumber}
                                placeholder="Nhập số điện thoại"
                            />
                            <div id="recaptcha-container"></div>
                        </Form.Group>
                        <div className="button-right">
                            <Link to="/loginauth">
                                <Button
                                    className={cx('btnPhone')}
                                    variant="secondary"
                                >
                                    Quay lại
                                </Button>
                            </Link>
                            &nbsp;
                            <Button
                                className={cx('btnPhone')}
                                type="submit"
                                variant="primary"
                            >
                                Gửi mã Otp
                            </Button>
                        </div>
                    </Form>

                    <Form
                        onSubmit={verifyOtp}
                        style={{ display: flag ? 'block' : 'none' }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicOtp">
                            <Form.Control
                                style={{
                                    height: '57px',
                                    padding: '6px 12px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                }}
                                type="otp"
                                placeholder="Nhập mã OTP"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </Form.Group>
                        <div className="button-right">
                            <Link to="/loginauth">
                                <Button
                                    className={cx('btnPhone')}
                                    variant="secondary"
                                >
                                    Quay lại
                                </Button>
                            </Link>
                            &nbsp;
                            <Button
                                className={cx('btnPhone')}
                                type="submit"
                                variant="primary"
                            >
                                Xác minh
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default PhoneSignUp;
