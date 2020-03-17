var username = document.getElementById('username').value;
var usertel = document.getElementById('usertel').value;
var password = document.getElementById('password').value;
//发送验证码
document.getElementById('btn').onclick = function(){
    usertel = document.getElementById('usertel').value;
    if(usertel.length == 0 || usertel.length == undefined){
        document.getElementById('checkTest').classList.remove('unshow');
        document.getElementById('checkTest').classList.add('show');
    }else{
        document.getElementById('checkTest').classList.remove('show');
        document.getElementById('checkTest').classList.add('unshow');
        btnCheck() ;
    }
};
//验证手机号
document.getElementById('usertel').onchange = function(){
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

document.getElementById('username').onchange = function(){
    username = document.getElementById('username').value;
    console.log(username.length);
    if(username.length <=3){
        document.getElementById('usernameTest').innerHTML = '*该用户名太短';
        document.getElementById('usernameTest').classList.remove('unshow');
        document.getElementById('usernameTest').classList.add('show');
    }else if(username.length >3){
        // console.log(username.length);
        for(var j = 0;j < username.length; j++){
            if(/[0-9]/.test(username.charAt(j))){
                document.getElementById('usernameTest').innerHTML = '*用户名不能全是数字';
                document.getElementById('usernameTest').classList.remove('unshow');
                document.getElementById('usernameTest').classList.add('show');
                return false;
            }else{
                document.getElementById('usernameTest').classList.remove('show');
                document.getElementById('usernameTest').classList.add('unshow');
                return true;
            }
        }
    }else{
        document.getElementById('usernameTest').classList.remove('show');
        document.getElementById('usernameTest').classList.add('unshow');
    }

}

//密码验证

document.getElementById('password').onchange = function(){

}