let language = document.getElementsByClassName('lan-but')
// 给language每一个加上事件监听器
for (let i = 0; i < language.length; i++) {
  language[i].addEventListener('click', function (event) {

    console.log("你的语言选择是" + event.target.id);

    let activeElements = document.getElementsByClassName('active');
    // 去除active的classname
    for (let j = 0; j < activeElements.length; j++) {
      activeElements[j].classList.remove('active');
    }

    // 获取需要翻译的数组
    let fanyi = Array.from(document.querySelectorAll('.fanyi'));
    let fanyip = Array.from(document.querySelectorAll('.fanyip'));

    switch (event.target.id) {
      // 英文
      case 'en-US':
        // 给当前点击的元素添加active的classname
        event.target.classList.add('active');
        // 翻译内容
        let English = [
          "Log in to your account",
          "Welcome to our Getneko, log in to your account and enjoy.",
          "Login",
          "Don't have an account? Go to Register"
        ];
        let Englishp = [
          "Enter a username",
          "Enter a password",
          "Enter the server URL"
        ];
        // 导入翻译
        for (let f = 0; f < fanyi.length; f++) {
          fanyi[f].innerHTML = English[f];
        };
        for (let p = 0; p < fanyip.length; p++) {
          fanyip[p].placeholder = Englishp[p];
        };
        break;

      // 繁体中文
      case 'zh-Hant':
        event.target.classList.add('active');
        let TraditionalChinese = [
          "登入您的帳戶",
          "歡迎使用我們的Getneko，登入你的帳戶並享受體驗。",
          "登 入",
          "沒有帳號？前往注册",
        ]
        let TraditionalChinesep = [
          "輸入用戶名",
          "輸入密碼",
          "輸入伺服器URL"
        ]

        for (let f = 0; f < fanyi.length; f++) {
          fanyi[f].innerHTML = TraditionalChinese[f];
        };
        for (let p = 0; p < fanyip.length; p++) {
          fanyip[p].placeholder = TraditionalChinesep[p];
        };
        break;

      // 简体中文
      case 'zh-Hans':
        event.target.classList.add('active');
        let chinese = [
          "登录您的账户",
          "欢迎使用我们的Getneko，登录你的账户并享受体验。",
          "登 录",
          "没有账号？前往注册"
        ];
        let chinesep = [
          "输入用户名",
          "输入密码",
          "输入服务器URL"
        ];
        // 导入翻译
        for (let f = 0; f < fanyi.length; f++) {
          fanyi[f].innerHTML = chinese[f];
        };
        for (let p = 0; p < fanyip.length; p++) {
          fanyip[p].placeholder = chinesep[p];
        };
        break;
    }
  })
};