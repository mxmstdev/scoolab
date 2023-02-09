function checkPwd() {
    const auth = [
        {
            login: 'admin',
            password: 'scoolabthebest2022'
        },
        {
            login: 'mxmst',
            password: 'scmax2022'
        },
        {
            login: 'client',
            password: 'buyscoolab'
        },
        {
            login: '1',
            password: '1'
        }
    ]

    var login_form = document.querySelector('#login').value
    var pwd_form = document.querySelector('#pwd').value

    let f = false;

    auth.forEach(element => {
        if (element.login == login_form) {
            if (element.password == pwd_form) {
                hideLogin();
                f = true
                return
            }
        }
    });

    if (!f) { alert('Неправильный пароль'); }
}

function hideLogin() {
    document.querySelector('.log-screen').style.display = 'none';
}