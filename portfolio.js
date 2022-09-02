/* aaaakh that was so difficult but I'm so happy it worked. Bro that's so clean what the heck :'D */
var menu_condition = "closed";
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme","ocean");
}

function openmenu() {
    if (menu_condition==="closed"){
        document.getElementById("menu-logo").className="fa-solid fa-xmark";
        document.getElementById("menu-display").style.display="block";
        menu_condition = "opened";
    } else {
        document.getElementById("menu-logo").className="fa-solid fa-bars";
        document.getElementById("menu-display").style.display="none";
        menu_condition="closed";
    }
}
function themefunction() {
    if (localStorage.getItem("theme") == "ocean") {
        blacktheme();
        document.getElementById("theme-text").innerHTML="Ocean Theme";
        localStorage.setItem("theme","black")
    } else {
        oceantheme();
        document.getElementById("theme-text").innerHTML="B&W Theme";
        localStorage.setItem("theme","ocean")
    }
}
function blacktheme() {
    document.documentElement.style.setProperty('--color1', 'rgb(255,255,255');
    document.documentElement.style.setProperty('--color2', 'rgb(189,189,189)');
    document.documentElement.style.setProperty('--color3', 'rgb(126,126,126)');
    document.documentElement.style.setProperty('--color4', 'rgb(63,63,63)');
    document.documentElement.style.setProperty('--color5', 'gray');
    document.documentElement.style.setProperty('--color6', 'rgb(30,30,30)');
    document.documentElement.style.setProperty('--color7', 'black');
    document.documentElement.style.setProperty('--name', 'rgb(100,100,100)');
    document.documentElement.style.setProperty('--color8', 'rgb(50,50,50)');
    document.documentElement.style.setProperty('--color9', 'rgb(10,10,10)');
    document.getElementById("me").style.display="none";
    document.getElementById("me").style.position="absolute";
    document.getElementById("dark-me").style.display="block";
    document.getElementById("dark-me").style.position="static";
}
function oceantheme() {
    document.documentElement.style.setProperty('--color1', '#DDE8F0');
    document.documentElement.style.setProperty('--color2', '#97cbdc');
    document.documentElement.style.setProperty('--color3', '#018abd');
    document.documentElement.style.setProperty('--color4', '#004581');
    document.documentElement.style.setProperty('--color5', 'rgb(100,100,200)');
    document.documentElement.style.setProperty('--color6', 'rgb(30,250,250)');
    document.documentElement.style.setProperty('--color7', 'rgb(0,50,100)');
    document.documentElement.style.setProperty('--color8', 'rgb(0,50,100)');
    document.documentElement.style.setProperty('--color9', 'rgb(0,30,75)');
    document.documentElement.style.setProperty('--name', '#0396a6');
    document.getElementById("dark-me").style.display="none";
    document.getElementById("dark-me").style.position="absolute";
    document.getElementById("me").style.display="block";
    document.getElementById("me").style.position="static";
}
function loadtheme() {
    if (localStorage.getItem("theme") == "ocean") {
        oceantheme();
        document.getElementById("theme-text").innerHTML="B&W Theme";
        document.getElementById("dark-me").style.display="none";
        document.getElementById("dark-me").style.position="absolute";
        document.getElementById("me").style.display="block";
        document.getElementById("me").style.position="static";
    } else {
        blacktheme();
        document.getElementById("theme-text").innerHTML="Ocean Theme";
        document.getElementById("dark-me").style.display="block";
        document.getElementById("dark-me").style.position="static";
        document.getElementById("me").style.display="none";
        document.getElementById("me").style.position="absolute";
    }
}
document.addEventListener("DOMContentLoaded", loadtheme)
//It can switch theme and stay the way it was left! I'm sooooooo glaaaaaaaaaad finallyyyyyyyyyyyyyyy
