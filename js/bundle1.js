var username = document.getElementById('username').value;
var usertel = document.getElementById('usertel').value;
var password = document.getElementById('password').value;
//发送验证码
document.getElementById('btn').onclick = ()=>{
    usertel = document.getElementById('usertel').value
    if(usertel.length == 0 || usertel.length == undefined){
        document.getElementById('checkTest').classList.remove('unshow');
        document.getElementById('checkTest').classList.add('show');
    }else{
        document.getElementById('checkTest').classList.remove('show');
        document.getElementById('checkTest').classList.add('unshow');
        btnCheck() 
    }
}
//验证手机号
document.getElementById('usertel').onchange = ()=>{
    usertel =  document.getElementById('usertel').value;
    console.log(usertel);
    if(checkPhone(usertel)){
        document.getElementById('usertelTest').classList.remove('show');
        document.getElementById('usertelTest').classList.add('unshow');
    }else{
        document.getElementById('usertelTest').classList.remove('unshow');
        document.getElementById('usertelTest').classList.add('show');
    }
};

//验证用户名是否正确

//密码验证