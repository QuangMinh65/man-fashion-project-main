import { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginValidate from './LoginValidate';

const cx = classNames.bind(styles);

const accountsAPI = 'http://localhost:8000/users';

function Login() {
    const navigate = useNavigate();
    const [loginAccount, setLoginAccount] = useState('');
    const [password, setPassword] = useState('');
    const [accounts, setAccounts] = useState([]);
    // console.log(accounts);

    const handleLogin = () => {
        
    };

    const handleSubmit = () => { 
        {
            accounts.map((account, index) => {
                if (loginAccount === account.user_name && password === account.password) {
                    alert('Tài khoản chính xác');
                    navigate('/');
                } else { 
                    alert ('Tài khoản không đúng')
                    loginAccount('')
                    password('')

                }
            });
        }
    }


    useEffect(() => {
        getAccounts((acc) => setAccounts(acc));
    }, []);

    const getAccounts = (callback) => {
        fetch(accountsAPI)
            .then((res) => res.json()) // API chạy xong
            .then(callback); // mới gọi tới callback và lấy ra từng account
    };
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('wrapper-title')}>Đăng nhập</h3>
            <p className={cx('wrapper-sub')}>
                Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
                <Link to="/forget_password">
                    <span> "Lấy mật khẩu" </span>
                </Link>
                để có thể truy cập vào tài khoản bằng email nhé.
            </p>

            <div className={cx('form-field')}>
                <form onSubmit={handleSubmit}>
                    <input
                        className={cx('form-input')}
                        placeholder="Tên đăng nhập của bạn"
                        onChange={(e) => setLoginAccount(e.target.value)}
                        value={loginAccount}
                        name='email'
                        required
                    />

                    <input
                        className={cx('form-input')}
                        type="password"
                        placeholder="Mật khẩu..."
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name='password'
                        required


                    />
                    <button className={cx('form-input__login')} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <hr />

                    <button className={cx('form-input__login--facebook')}>Đăng nhập với Facebook</button>

                    <button className={cx('form-input__login--google')}>Đăng nhập với Google</button>
                    <div className={cx('form-sub')}>
                        <Link to="/register">
                            <p>Đăng ký tài khoản mới?</p>
                        </Link>
                        <Link to="/forget_password">
                            <p>Quên mật khẩu</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
