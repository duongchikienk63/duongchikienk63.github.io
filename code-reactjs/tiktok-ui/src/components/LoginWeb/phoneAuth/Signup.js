import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import styles from './PhoneAuth.module.scss';
import classNames from 'classnames/bind';

import { db } from '~/firebase';
import { doc, setDoc } from 'firebase/firestore';


const cx = classNames.bind(styles);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // await sendSignInLinkToEmail(email)
            await signUp(email, password);
            navigate('/loginauth');

            const data = {
                emailLogin: email,
            };
            await setDoc(doc(db, 'user', email), data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className={cx('content')}>
                <div className="p-4 box">
                    <h2 className="mb-3">Đăng ký</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                style={{
                                    height: '57px',
                                    padding: '6px 12px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                }}
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Control
                                style={{
                                    height: '57px',
                                    padding: '6px 12px',
                                    marginBottom: '15px',
                                    fontSize: '16px',
                                }}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button
                                className={cx('btnPhone')}
                                variant="primary"
                                type="Submit"
                            >
                                Đăng ký
                            </Button>
                        </div>
                    </Form>
                </div>
                <div
                    style={{ fontSize: '14px' }}
                    className="p-4 box mt-3 text-center"
                >
                    Bạn đã có tài khoản?{' '}
                    <Link
                        style={{ color: '#0009ff', marginLeft: '3px' }}
                        to="/loginauth"
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Signup;
