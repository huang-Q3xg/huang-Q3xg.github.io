
// 是否添加windowOnload?_若redM获取在window.addEventListener外，则需要
// window.onload = function(){
  window.addEventListener("mousemove",(e)=>{
    var redM = document.querySelector(".redMoon");
    var per = (100-e.clientY/window.innerHeight*100); //为符合逻辑，100去减
    // redM.style.clipPath = `inset(0 ${per}% 0 0)`; //且注意是` 非 ’//See SVG element reference<clipPath>
    redM.style.clipPath = `polygon(${per+10}% 0, 100% 0, 100% 100%, ${per}% 100%)`; //且注意是` 非 ’//See SVG element reference<clipPath>
  });
// }