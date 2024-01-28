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
          "Register your account",
          "Start using our Getneko, just create an account and enjoy the experience.",
          "Register",
          "Existing account? Go to login"
        ];
        let Englishp = [
          "Enter a username",
          "Enter a password",
          "Enter email address",
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
          "注册您的帳戶",
          "開始使用我們的Getneko，只需創建一個帳戶並享受體驗。",
          "注 册",
          "已有帳號？前往登入",
        ]
        let TraditionalChinesep = [
          "輸入用戶名",
          "輸入密碼",
          "輸入郵箱",
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
          "注册您的账户",
          "开始使用我们的Getneko，只需创建一个帐户并享受体验。",
          "注 册",
          "已有账号？前往登录"
        ];
        let chinesep = [
          "输入用户名",
          "输入密码",
          "输入邮箱",
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