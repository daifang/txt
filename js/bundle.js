function btnCheck(){
    document.getElementById('btn').disabled = true;
    var time = 60;
    var timer = setInterval(function (){
        if(time === 0){
            document.getElementById('btn').disabled = false;
            document.getElementById('btn').value = '获取验证码';
            time = 60;
            clearInterval(timer);
        }else{
            document.getElementById('btn').value ='等待(' + time + ')s';
            time--;  
        }
    },1000);
}

function checkPhone(val){ 
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)))
        return false; 
    else
        return true; 
}

function checkName(name){
    
}
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
    var flag = true;
    console.log(username.length);
    if(username.length <=3){
        document.getElementById('usernameTest').innerHTML = '*该用户名太短';
        document.getElementById('usernameTest').classList.remove('unshow');
        document.getElementById('usernameTest').classList.add('show');
    }else if(username.length >3){
        // console.log(username.length);
        for(var j = 0;j < username.length; j++){
            if(!(/[0-9]/.test(username.charAt(j)))){
                document.getElementById('usernameTest').classList.remove('show');
                document.getElementById('usernameTest').classList.add('unshow');
                return 0;
            }else{
                document.getElementById('usernameTest').innerHTML = '*用户名不能全是数字';
                document.getElementById('usernameTest').classList.remove('unshow');
                document.getElementById('usernameTest').classList.add('show');
            }
        }
    }else{
        document.getElementById('usernameTest').classList.remove('show');
        document.getElementById('usernameTest').classList.add('unshow');
    }

};

//密码验证

document.getElementById('password').onchange = function(){
    password = document.getElementById('password').value;
    if(password.length < 8 && password.length >0){
        document.getElementById('passwordTest').innerHTML = '*密码最少8个字符';
        document.getElementById('passwordTest').classList.remove('unshow');
        document.getElementById('passwordTest').classList.add('show');
    }else{
        document.getElementById('passwordTest').classList.remove('show');
        document.getElementById('passwordTest').classList.add('unshow');
    }
};
(function(d){
    var font = {fontSize:'',fontStyle:'',fontWeight:'500'};
    var one = d.getElementsByClassName('oneMenu');
    for(var i = 0;i<one.length;i++){
        (function(i){
            one[i].addEventListener('click',function(){
                for(var j = 0;j<one.length;j++){
                    d.getElementsByClassName('two')[j].style.display = 'none';
                    d.getElementsByClassName('oneMenu')[j].classList.remove('active');
                }
                d.getElementsByClassName('two')[i].style.display = 'block';
                d.getElementsByClassName('oneMenu')[i].classList.add('active');
            });
        })(i)
        d.getElementById('edit').onfocus = function(){
            for (var i = 0; i < one.length; i++) {
                d.getElementsByClassName('two')[i].style.display = 'none';
                d.getElementsByClassName('oneMenu')[i].classList.remove('active');
            }
        };
    }
    d.getElementById('font').onclick = function(){
        d.getElementById('fontSetting').style.display = 'block';
        d.getElementById('fontSetting').classList.add('animated');
        d.getElementById('fontSetting').classList.remove('fadeOut');
        d.getElementById('fontSetting').classList.add('fadeIn');
    };
    d.getElementById('close').onclick = function(){
        d.getElementById('fontSetting').classList.add('fadeOut');
        setTimeout(function(){
            d.getElementById('fontSetting').style.display = 'none';
        },1000);
    };
    //字号大小
    var fontSize = d.getElementsByClassName('fontSize');
    for(var i = 0;i<fontSize.length;i++){
        fontSize[i].onclick = function(){
            //底色
            for(var j = 0;j<fontSize.length;j++)
                fontSize[j].classList.remove('active');
            this.classList.add('active');
            //字号
            font.fontSize = this.innerHTML;
        };
    }
    //字形
    var fontStyle = d.getElementsByClassName('fontStyle');
    console.log(fontStyle);
    for(var i = 0;i<fontStyle.length;i++){
        fontStyle[i].onclick = function(){
            //底色
            for(var j = 0;j<fontStyle.length;j++)
                fontStyle[j].classList.remove('active');
            this.classList.add('active');
            //字形
            var fontObj = {倾斜:'italic',加粗:'1000'};
            console.log(this.innerHTML);
            font.fontStyle = fontObj[this.innerHTML];
            font.fontWeight = fontObj[this.innerHTML];
        };
    };
    d.getElementById('confirm').onclick = function(){
        d.getElementById('edit').style.fontSize = font.fontSize + 'px';
        d.getElementById('edit').style.fontStyle = font.fontStyle;
        d.getElementById('edit').style.fontWeight = font.fontWeight;
        d.getElementById('fontSetting').classList.add('fadeOut');
        setTimeout(function(){
            d.getElementById('fontSetting').style.display = 'none';
        },1000);
    };
})(document)