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
            })
        })(i)
        d.getElementById('edit').onfocus = function(){
            for (let i = 0; i < one.length; i++) {
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
        setTimeout(()=>{
            d.getElementById('fontSetting').style.display = 'none';
        },1000)
    }
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
        }
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
        }
    }
    d.getElementById('confirm').onclick = function(){
        d.getElementById('edit').style.fontSize = font.fontSize + 'px';
        d.getElementById('edit').style.fontStyle = font.fontStyle;
        d.getElementById('edit').style.fontWeight = font.fontWeight;
        d.getElementById('fontSetting').classList.add('fadeOut');
        setTimeout(()=>{
            d.getElementById('fontSetting').style.display = 'none';
        },1000)
    };
})(document)