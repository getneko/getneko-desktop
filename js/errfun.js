const errcode={"en-US":{
    "-1":"illegal request",
    "-2":"Username or email already exists",
    "-3":"Username does not exist or password is wrong"
},"zh-Hant":{
    "-1":"非法請求",
    "-2":"用戶名或郵箱已經存在",
    "-3":"用戶名不存在或密碼錯誤"
},"zh-Hans":{
    "-1":"非法请求",
    "-2":"用户名或邮箱已经存在",
    "-3":"用户名不存在或者密码错误"
}}
function getlanguageerr(code,language){
    return errcode[language][code]
}