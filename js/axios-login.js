function loginaxios() {

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let language = document.querySelector('.active').id;
  let url = document.getElementById('url').value;

  if (username.trim() === '' || password.trim() === '') {
    alert('请填写所有必填字段');
    return;
  }

  console.log(username, password, language, url);
  // 查看数据类型
  console.log(typeof username, typeof password, typeof language, typeof url);

  // 发送注册请求到后端
  axios({
    method: 'post',
    url: `${url}v1/userlogin`,
    data: {
      username: username,
      password: password,
      language: language
    }
  })
    .then(function (response) {
      console.log(response)
      console.log(response.data.msg)
      if (response.data.code == "0") {
        // window.location.href = "";
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

window.onload = function () {
  let submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', loginaxios);
};