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