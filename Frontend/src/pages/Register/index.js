import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const cx = classNames.bind(styles);

function Register() {
    const [name, setName] = useState('');
    // console.log(name);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [registerAccount, setRegisterAccount] = useState('');
    const [password, setPassword] = useState('');
    const [accounts, setAccounts] = useState([]);
    console.log(accounts);

    const accountsAPI = 'http://localhost:3000/accounts';
    const navigate = useNavigate()

    const handleRegister = () => {
        setAccounts((prev) => {
            const newAccounts = [...prev, { name, phone, email, registerAccount, password }];

            const createAccount = (newAccounts, callback2) => {
                var options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newAccounts),
                };
                fetch(accountsAPI, options)
                    .then((res) => res.json())
                    .then(callback2);
            };

            const handleRegisterForm = () => {
                var formData = {
                    name,
                    phone,
                    email,
                    registerAccount,
                    password,
                };
                setName('');
                setPhone('');
                setEmail('');
                setRegisterAccount('');
                setPassword('');
                // alert('Tao tai khoan thanh cong')

                createAccount(formData, () => { 
                    alert('Tạo tài khoản thành công')
                    navigate('/login')
                    
                });
            };
            handleRegisterForm();

            return newAccounts;
        });
        // setName('');
        // setPhone('');
        // setEmail('');
        // setRegisterAccount('');
        // setPassword('');
    };

    useEffect(() => {
        getAccounts((account) => {
            setAccounts(account);
        });
        // handleRegisterForm();
    }, []);

    // function start() {
    //     getAccounts((account) => {
    //         // console.log(account);
    //     });
    //     handleRegisterForm();
    // }

    // start();

    // Functions
    const getAccounts = (callback) => {
        fetch(accountsAPI)
            .then((res) => res.json()) // API chạy xong
            .then(callback); // mới gọi tới callback và lấy ra từng account
    };

    // const createAccount = (data, callback2) => {
    //     var options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     };
    //     fetch(accountsAPI, options)
    //         .then((res) => res.json())
    //         .then(callback2);
    // }

    // const handleRegisterForm = () => {
    //     var formData = {
    //         name,
    //         phone,
    //         email,
    //         registerAccount,
    //         password,
    //     };
    //     setName('')
    //     setPhone('')
    //     setEmail('')
    //     setRegisterAccount('')
    //     setPassword('')
    //     // alert('Tao tai khoan thanh cong')

    //     createAccount(formData)
    // };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('wrapper-title')}>Đăng kí</h3>
            <p className={cx('wrapper-sub')}>
                Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                <Link to="/forget_password">
                    <span> "Lấy mật khẩu" </span>
                </Link>
                để có thể truy cập vào tài khoản bằng email nhé.
            </p>

            <div className={cx('form-field')}>
                <input
                    className={cx('form-input')}
                    placeholder="Họ tên"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <input
                    className={cx('form-input')}
                    placeholder="SĐT của bạn"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required

                />
                <input
                    className={cx('form-input')}
                    placeholder="Email của bạn"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    type='email'
                />
                <input
                    className={cx('form-input')}
                    placeholder="Tên đăng nhập"
                    onChange={(e) => setRegisterAccount(e.target.value)}
                    value={registerAccount}
                    required
                />
                <input
                    type="password"
                    className={cx('form-input')}
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required

                />
                <input type="password" className={cx('form-input')} placeholder="Nhập lại mật khẩu" required />

                <button className={cx('form-input__register')} onClick={handleRegister}>
                    Đăng kí
                </button>
                <hr />

                <button className={cx('form-input__register--facebook')}>Đăng kí với Facebook</button>

                <button className={cx('form-input__register--google')}>Đăng kí với Google</button>
                <div className={cx('form-sub')}>
                    <Link to="/login">
                        <p>Đăng nhập ngay</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
