import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';
import styles from './PhoneAuth.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const { logIn, googleSignIn } = useUserAuth();
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            if (email == 'admin@gmail.com') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Link style={{ fontSize: '28px', margin: '10px' }} to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className={cx('content')}>
                <div className="p-5 box">
                    <h2 className="mb-3">Đăng nhập</h2>
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
                                placeholder="Email"
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
                                placeholder="Mật khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button
                                className={cx('btnPhone')}
                                variant="primary"
                                type="Submit"
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </Form>
                    <hr />
                    {/* <div>
                        <GoogleButton
                            style={{
                                width: '100%',
                                height: '57px',
                                borderRadius: '0.375rem',
                                padding: '3px',
                            }}
                            className="g-btn"
                            type="dark"
                            onClick={handleGoogleSignIn}
                        />
                    </div> */}
                    <Link to="/phonesignup">
                        <div className="d-grid gap-2 mt-3">
                            <Button
                                className={cx('btnPhone')}
                                variant="success"
                                type="Submit"
                            >
                                Sign in with Phone
                            </Button>
                        </div>
                    </Link>
                </div>
                <div
                    style={{ fontSize: '14px' }}
                    className="p-4 box mt-3 text-center"
                >
                    Bạn chưa có tài khoản?
                    <Link
                        style={{ color: '#0009ff', marginLeft: '3px' }}
                        to="/signup"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginUser;
