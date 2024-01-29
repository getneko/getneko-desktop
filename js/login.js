//切换语言
function changelanguage(lan){
  let fanyi = Array.from(document.querySelectorAll('.fanyi'));
  let fanyip = Array.from(document.querySelectorAll('.fanyip'));
  for (let f = 0; f < fanyi.length; f++) {
      fanyi[f].innerHTML = getlanguage(lan,"login").fanyi[f];
    };
    for (let p = 0; p < fanyip.length; p++) {
      fanyip[p].placeholder = getlanguage(lan,"login").fanyip[p];
    };
  document.getElementById("nowlanguage").value=lan
}
//发送请求
function loginaxios() {

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let url = document.getElementById('url').value;
  let language=document.getElementById("nowlanguage").value;
  let that = this

  if (username.trim() === '' || password.trim() === '') {
    alert('请填写所有必填字段');
    return;
  }

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