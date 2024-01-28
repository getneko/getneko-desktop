function registeraxios(event) {

  // 阻止表单默认提交
  event.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  let url = document.getElementById('url').value;
  let language = document.querySelector('.active').id;

  if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
    alert('请填写所有必填字段');
    return;
  };
  
  // 验证邮箱格式
  if (!validateEmail(email)) {
    alert('请输入有效的邮箱地址');
    return;
  };

  console.log(username, password, email, language, url);
  // 查看数据类型
  console.log(typeof username, typeof password, typeof email, typeof language, typeof url);

  // 发送注册请求到后端
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
        msg=getlanguageerr(response.data.code, language)

        alert(msg)
        console.log(response.data.err);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
};

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

window.onload = function () {
  let submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', registeraxios);
};