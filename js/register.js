// 现在的语言(各窗口保持一致)
let nowlanguage;
function nowlan() {
  nowlanguage = localStorage.getItem('SelectLanguage');
  console.log("本地存储的语言记录：" + nowlanguage);
  if (nowlanguage) {
    changelanguage(nowlanguage);
  } else {
    nowlanguage = "zh-Hans";
    console.log("默认为：" + nowlanguage);
  };
};

// 获取语言文本内容
function getlanguage(lan, page) {
  return translations[lan][page];
}

// 处理选择语言事件
function onclicklan(event) {
  let lanId = event.target.id;

  switch (lanId) {
    case 'en-US':
      changelanguage('en-US');
      break;
    case 'zh-Hans':
      changelanguage('zh-Hans');
      break;
    case 'zh-Hant':
      changelanguage('zh-Hant');
      break;
  };
};

//处理切换语言事件
function changelanguage(lan) {
  nowlanguage = lan;
  localStorage.setItem('SelectLanguage', nowlanguage);

  let fanyi = Array.from(document.querySelectorAll('.fanyi'));
  let fanyip = Array.from(document.querySelectorAll('.fanyip'));

  for (let f = 0; f < fanyi.length; f++) {
    fanyi[f].innerHTML = getlanguage(lan, "register").fanyi[f];
  };

  for (let p = 0; p < fanyip.length; p++) {
    fanyip[p].placeholder = getlanguage(lan, "register").fanyip[p];
  };

};

//提交请求
function registeraxios() {

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  let url = document.getElementById('url').value;
  let language = nowlanguage;

  // 验证所有必填字段
  if (username.trim() === '' || password.trim() === '' || email.trim() === '' || url.trim() === '') {

    switch (nowlanguage) {
      case 'en-US':
        alert(getlanguage(nowlanguage, "tips").rlogin[0]);
        break;
      case 'zh-Hans':
        alert(getlanguage(nowlanguage, "tips").rlogin[0]);
        break;
      case 'zh-Hant':
        alert(getlanguage(nowlanguage, "tips").rlogin[0]);
        break;
    };
  };

  // 验证密码强度
  if (!isValidPassword(password) && password) {
    switch (nowlanguage) {
      case 'en-US':
        alert(getlanguage(nowlanguage, "tips").rlogin[1]);
        break;
      case 'zh-Hans':
        alert(getlanguage(nowlanguage, "tips").rlogin[1]);
        break;
      case 'zh-Hant':
        alert(getlanguage(nowlanguage, "tips").rlogin[1]);
        break;
    };
  };

  // 验证邮箱格式
  if (!validateEmail(email) && email) {

    switch (nowlanguage) {
      case 'en-US':
        alert(getlanguage(nowlanguage, "tips").rlogin[2]);
        break;
      case 'zh-Hans':
        alert(getlanguage(nowlanguage, "tips").rlogin[2]);
        break;
      case 'zh-Hant':
        alert(getlanguage(nowlanguage, "tips").rlogin[2]);
        break;
    };

  };

  console.log(username, password, email, language, url);
  // 查看数据类型
  console.log(typeof username, typeof password, typeof email, typeof language, typeof url);

  // 发送注册请求到后端
  if (isValidPassword(password) && validateEmail(email) && username && password && email && url) {
    axios({
      method: 'post',
      url: `${url}v1/userreg`,
      data: {
        username: username,
        password: password,
        email: email,
        language: language
      },
    })
      .then(function (response) {
        console.log(response)
        console.log(response.data.msg)
        if (response.data.code == "0") {
          window.location.href = "login.html";
          console.log(response.data.msg);
        } else {

          msg = getlanguageerr(response.data.code, language)

          alert(msg)
          console.log(response.data.err);
        };
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

// 验证密码强度
function isValidPassword(password) {
  // 密码必须至少为6个字符长，并包含字母和数字的组合。
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
}

// 验证邮箱格式
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// 事件委托
document.addEventListener('DOMContentLoaded', function () {

  nowlan();

  let onclicklanguage = Array.from(document.querySelectorAll('.onclick'));
  for (let l = 0; l < onclicklanguage.length; l++) {
    onclicklanguage[l].addEventListener('click', onclicklan);
  };

  let submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', registeraxios);
});