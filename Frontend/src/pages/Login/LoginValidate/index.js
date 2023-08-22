function LoginValidate(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") { 
        error.email = "Vui lòng nhập email"
    } 
    else if (!email_pattern.test(values.email)) {
        error.email = "Email không hợp lệ"
    } else {
        error.email = ""
    }


    if (values.password === "") { 
        error.password = "Vui lòng nhập mật khẩu"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Mật khẩu không hợp lệ"
    } else {
        error.password = ""
    }
    return error


}

export default LoginValidate;