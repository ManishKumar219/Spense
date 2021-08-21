function hideShowNav(){
    if(count == 1){
        navItems[1].style.display = 'none';
        navItems[2].style.display = 'none';
        document.getElementById("sec-nav").style.borderLeft = "none";
    }
    else if(count == 0){
        navItems[1].style.display = 'flex';
        navItems[2].style.display = 'flex';
        document.getElementById("sec-nav").style.borderLeft = "1px solid black";
    }
}

function counter(){
    if(count == 1){
        count = 0;
    }
    else if(count == 0){
        count = 1;
    }
    else{
        count = 0;
    }
    
    hideShowNav(); 
}


var count;
var menuBtn = document.getElementById("menu-btn");
var navItems = document.getElementsByClassName("nav-list");


menuBtn.addEventListener("click", hideShowNav);