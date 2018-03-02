window.onload=function(){
	var header=document.getElementById("header");
  var left=document.getElementById("left");
  var right=document.getElementById("right");
  var h1=header.getElementsByTagName("h1");
  var p=header.getElementsByTagName("p");
  var span=header.getElementsByTagName("span");
  var con1=["Welcome to","SAY HELLO TO","WE ARE"];
  var con2=["Oxygen","OXYGEN","CREATIVE"];
  var onOff=true;
  var num=0;
  var timer=null;
  var hour=document.getElementById("hour");
  var oSection=document.getElementsByTagName('section');
  var sUl=oSection[0].getElementsByTagName("ul");
  var oDiv=document.getElementsByTagName("nav")[0];
  var oLiA=oDiv.getElementsByTagName("a");
  var oNavA=oDiv.getElementsByTagName("li")[0];
  var article=document.getElementsByTagName("article")[0];
  var oPro=document.getElementById('pro');
  var oProgress=oPro.getElementsByClassName("progress-bar");
  var aside=document.getElementsByTagName("aside")[0];
  var ol=hour.getElementsByTagName("li");
  var chen=hour.getElementsByClassName("zuo");
  var chen1=hour.getElementsByClassName("you");
  var pYin=hour.getElementsByTagName("p");
  var team=document.getElementById("team");
  var ol1=team.getElementsByTagName("li");
  var number=document.getElementById("number");
  var oh3=number.getElementsByTagName("h3");
  var oTabel=document.getElementById("tabel");
  var List=oTabel.getElementsByClassName("list")[0];
  var ooli=List.getElementsByTagName("li");
  var chara=document.getElementById("chara");
  var prve=document.getElementById("prve");
  var next=document.getElementById("next");
  var msg=["从制度上保证了员工在公司内有多通道发展，共同打造员工职业发展体系，建立了员工管理和专业“双通道”的职业发展体系。","根据员工管理和专业的职业发展双通道体系，员工从一入司开始，公司就为大家设计了全方位的培养体系。","每到公司生日（11月11日）这一天，所有腾讯人都会穿着由自己同 事设计的充满腾讯特色的文化衫，彰显腾讯文化。"];
  var i=0;
  var pi=document.getElementById("pi");
  var pre=document.getElementById("pre");
  var nex=document.getElementById("nex");
  var footer=document.getElementById("footer");
  var ologo=footer.getElementsByTagName("a");
  ologo[0].onmouseover=function(){
    this.style.background="#FFB22D";
  }
  ologo[1].onmouseover=function(){
    this.style.background="#452A17";
  }
  ologo[2].onmouseover=function(){
    this.style.background="#1DA209";
  }
  ologo[3].onmouseover=function(){
    this.style.background="#513977";
  }
  ologo[4].onmouseover=function(){
    this.style.background="#DE5145";
  }
  for(var i=0;i<ologo.length;i++){
    ologo[i].onmouseout=function(){
      this.style.background="#0278ab";
    }
  }
  pre.onclick=function(){
    onOff=true;
    fnChange(onOff); 
    var numb=num+1;
    pi.src="images/blog/"+numb+".jpg";
  }
  nex.onclick=function(){
    onOff=true;
    fnChange(onOff); 
    var numb=num+1;
    pi.src="images/blog/"+numb+".jpg";
  }
  for(var i=0;i<ooli.length;i++){
      ooli[i].style.transform="rotateY(60deg)";
    }
  oTabel.onmouseout=function(){
  for(var i=0;i<ooli.length;i++){
      ooli[i].style.transform="rotateY(0)";
    }
  }
  for(var i=0;i<ooli.length;i++){
    ooli[i].onmouseover=function(){
      this.style.transform="rotateX(30deg)";
    }
  }
  number.onmouseover=function(){   
    view();
  }
  
  function view(){
    if(i<200){
      i++;
      setTimeout(view,10);
    }
    oh3[0].innerHTML=i;
    oh3[1].innerHTML=i*20;
    oh3[2].innerHTML=Math.ceil(i/20);
    oh3[3].innerHTML=Math.ceil(i/10+4)+"/"+7;
  }
  team.onmouseover=function(){
    for(var i=0;i<ol1.length;i++){
      ol1[i].style.transform="rotateY(0)";
    }
  }
  team.onmouseout=function(){
    for(var i=0;i<ol1.length;i++){
      ol1[i].style.transform="rotateY(30deg)";
    }
  }
  for(var i=0;i<ol1.length;i++){
      ol1[i].style.transform="rotateY(30deg)";
    }
  article.onmouseover=function(){
    oProgress[0].style.width="95%";
    oProgress[1].style.width="75%";
    oProgress[2].style.width="65%";
    oProgress[3].style.width="80%";
  }      
  for(var i=0;i<pYin.length;i++){
    ol[i].index=i;
    ol[i].onmouseover=function(){ 
      startMove(chen[this.index],{left:120,top:80});
      startMove(chen1[this.index],{right:120,top:80});
      startMove1(pYin[this.index],-1);
    }
    ol[i].onmouseout=function(){
      startMove(chen[this.index],{left:-42,top:270});
      startMove(chen1[this.index],{right:-42,top:270});
      startMove1(pYin[this.index],272);
    }        
  }    
   aside.onmouseover=function(){
      for(var i=0;i<ol.length;i++){
        ol[i].style.display="block";
        startMove(ol[i],{left:0});
       }
   }
  startMove(sUl[0],{top:0});
   startMove(sUl[1],{top:0});
  for(var i=0;i<oLiA.length;i++){
    oLiA[i].index=i;
    oLiA[i].onclick=function(){  
      for(var j=0;j<oLiA.length;j++){
        oLiA[j].className="";
      }
      this.className="on";
    }
  }
//nav
window.onscroll=function(){
  clearInterval(timer);
    var divTop=0;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>=662){
      divTop=scrollTop;
    }else{
      divTop=662;
    }
    startMove3(parseInt(divTop));
}         
 function startMove3(iTarget){  
    var iSpeed=0;
    clearInterval(timer);
    timer=setInterval(function(){
      if(oDiv.offsetTop>iTarget){
        oDiv.style.top=0;
      }else{
        iSpeed=7;
      }
     if(Math.abs(oDiv.offsetTop-iTarget)<7){
        clearInterval(timer);
      }else{
          oDiv.style.top=oDiv.offsetTop+iSpeed+"px";
      }
    },1)
  }
function startMove2(obj,iTarget){
  var iSpeed=0;
      clearInterval(obj.timer);
      obj.timer=setInterval(function(){
        iSpeed+=(iTarget-obj.offsetLeft)/5;
        iSpeed*=0.7;
        if(Math.abs(iSpeed)<1&&Math.abs(obj.offsetLeft-iTarget)<1){
          obj.style.left=iTarget+'px';
          clearInterval(obj.timer);
        }else{
          obj.style.left=obj.offsetLeft+iSpeed+'px';
        }
        
      },40)
    }
function startMove1(obj,iTarget){
      clearInterval(obj.timer);
      obj.timer=setInterval(function(){
        var iSpeed=0;
        iSpeed+=(iTarget-obj.offsetTop)/4;
        iSpeed*=0.9;
        if(Math.abs(iSpeed)<1&&Math.abs(obj.offsetTop-iTarget)<1){
          obj.style.top=iTarget+'px';
          clearInterval(obj.timer);
        }else{
          obj.style.top=obj.offsetTop+iSpeed+'px';
        }        
      },40)
    }
 tab();
 
 next.onclick=function(){
  onOff=false;
   fnChange(onOff);
    chara.innerHTML=msg[num];
   chara.style.right="-1000px";
   startMove(chara,{right:0});
 }
 prve.onclick=function(){
  onOff=true;
  fnChange(onOff); 
  chara.innerHTML=msg[num];
    chara.style.left="-1000px";
   startMove(chara,{left:0});
 }
  chara.style.right="-1000px";
   startMove(chara,{right:0});
 
//左侧切换
left.onclick=function(){
  clearInterval(timer);
  onOff=true;
  fnChange(onOff); 
 tab();
   setTimeout(autoPlay,2000);
}
//右侧切换
right.onclick=function(){
  clearInterval(timer);
  onOff=false;
   fnChange(onOff);
   tab();
   setTimeout(autoPlay,2000);
}
autoPlay();
function autoPlay(){
    clearInterval(timer);
    timer=setInterval(function(){
      num++;
        if (num==con1.length-1) {
          num=0;
        }
        bg();
     tab();
    },5000)}
function bg(){
 h1[0].innerHTML=con1[num]+"<span>"+" "+con2[num]+"</span>";//分页
 header.style.background="url(images/slider/"+num+".jpg)";//图片切换
}
function tab(){ 
 h1[0].style.left="-1000px";
 startMove(h1[0],{left:0});
 p[0].style.right="-1000px";
 startMove(p[0],{right:0});
}
function fnChange(onOff){
  if(onOff){//true 左侧切换
    num--;
    if(num==-1){
      num=con1.length-1;
    }
  }else{//flase 右侧切换
    num++;
    if(num==con1.length){
      num=0;
    }
  }
 bg();
}
}