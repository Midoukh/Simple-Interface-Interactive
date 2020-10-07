var slider = document.querySelector("#slider");
var active = document.getElementById("active");
var line1 = document.getElementById("Line1");
var line2 = document.getElementById("Line2");
var line3 = document.getElementById("Line3");
var line4 = document.getElementById("Line4");
var heads = document.querySelector('.msg-col h1')


line1.onclick= function (){
    slider.style.transform = "translateX(0)";
    active.style.top = "11vh";
    heads.style.color = "coral";
}

line2.onclick = function () {
    slider.style.transform = "translateX(-25%)";
    active.style.top = "22vh";
    heads.style.color = "lightBlue";

}

line3.onclick = function () {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "33vh";
    heads.style.color = "coral";

}

line4.onclick = function () {
    slider.style.transform = "translateX(-75%)";
    active.style.top = "44vh";
    heads.style.color = "lightBlue";

}