const translations = {
    "en-US": {
        "login": {
            "fanyi": [
                "Log in to your account",
                "Welcome to our Getneko, log in to your account and enjoy.",
                "Login",
                "Don't have an account? Go to Register"
            ],
            "fanyip": [
                "Enter a username",
                "Enter a password",
                "Enter the server URL"
            ]
        }, "register": {
            "fanyi": [
                "Register your account",
                "Start using our Getneko, just create an account and enjoy the experience.",
                "Register",
                "Existing account? Go to login"
            ],
            "fanyip": [
                "Enter a username",
                "Enter a password",
                "Enter email address",
                "Enter the server URL"
            ]
        }
    },
    "zh-Hant": {
        "login": {
            "fanyi": [
                "登入您的帳戶",
                "歡迎使用我們的Getneko，登入你的帳戶並享受體驗。",
                "登 入",
                "沒有帳號？前往注册"
            ],
            "fanyip": [
                "輸入用戶名",
                "輸入密碼",
                "輸入伺服器URL"
            ]
        }, "register": {
            "fanyi": [
                "注册您的帳戶",
                "開始使用我們的Getneko，只需創建一個帳戶並享受體驗。",
                "注 册",
                "已有帳號？前往登入",
            ],
            "fanyip": [
                "輸入用戶名",
                "輸入密碼",
                "輸入郵箱",
                "輸入伺服器URL"
            ]
        }
    },
    "zh-Hans": {
        "login": {
            "fanyi": [
                "登录您的账户",
                "欢迎使用我们的Getneko，登录你的账户并享受体验。",
                "登 录",
                "没有账号？前往注册"
            ],
            "fanyip": [
                "输入用户名",
                "输入密码",
                "输入服务器URL"
            ]
        }, "register": {
            "fanyi": [
                "注册您的账户",
                "开始使用我们的Getneko，只需创建一个帐户并享受体验。",
                "注 册",
                "已有账号？前往登录"
            ],
            "fanyip": [
                "输入用户名",
                "输入密码",
                "输入邮箱",
                "输入服务器URL"
            ]
        }
    }
};
function getlanguage(lan, page) {
    return translations[lan][page]
}