window.onload=function(){
    this.console.log("ready");

    var cstmBtn=document.getElementById("cstmBtn");
    var btnLabel=document.getElementById("buttonLabel");
    var fontSize=document.getElementById("fontSize");
    var fontColor=document.getElementById("fontColor");
    var paddingTop=document.getElementById("padding-top");
    var paddingRight=document.getElementById("padding-right");
    var paddingBottom=document.getElementById("padding-bottom");
    var paddingLeft=document.getElementById("padding-left");
    var backgroundColor=document.getElementById("backgroundColor");
    var borderColor=document.getElementById("borderColor");
    var borderWidth=document.getElementById("borderWidth");
    var borderRadius=document.getElementById("borderRadius");
    var generate=document.getElementById("generate");
    var close=document.getElementById("close");
    var codeContainer=document.getElementById("code-container");
    var css=document.getElementById("css");
    var html=document.getElementById("html");

    cstmBtn.style.cssText="fontSize:16px;color:black;padding:1px 6px;margin-left:40%;border-color:#dddddd,border-width:0px;border-radius:0px"
    btnLabel.addEventListener("input",(e)=>{
        cstmBtn.innerHTML=e.target.value;
    })
    fontSize.addEventListener("input",()=>{
        cstmBtn.style.fontSize=`${fontSize.value}px`;
    })
    fontColor.addEventListener("change",(e)=>{
        cstmBtn.style.color=e.target.value;
    })
    paddingTop.addEventListener("input",(e)=>{
        cstmBtn.style.paddingTop=`${e.target.value}px`;
    })
    paddingRight.addEventListener("input",(e)=>{
        cstmBtn.style.paddingRight=`${e.target.value}px`;
    })
    paddingBottom.addEventListener("input",(e)=>{
        cstmBtn.style.paddingBottom=`${e.target.value}px`;
    })
    paddingLeft.addEventListener("input",(e)=>{
        cstmBtn.style.paddingLeft=`${e.target.value}px`;
    })
    backgroundColor.addEventListener("change",(e)=>{
        cstmBtn.style.backgroundColor=e.target.value;
    })
    borderColor.addEventListener("change",(e)=>{
        cstmBtn.style.borderColor=e.target.value;
    })
    borderWidth.addEventListener("input",(e)=>{
        cstmBtn.style.borderWidth=`${e.target.value}px`;
    })
    borderRadius.addEventListener("input",(e)=>{
        cstmBtn.style.borderRadius=`${e.target.value}px`;
    })
    generate.onclick=()=>{
        codeContainer.style.display="block";
        html.innerHTML=`&ltbutton id="cstmBtn&gt" ${cstmBtn.innerHTML} &lt/button&gt`;
        css.innerHTML=`#cstmBtn{${cstmBtn.style.cssText}}`;
    }
    close.onclick=()=>{
        codeContainer.style.display="none";
    }


}