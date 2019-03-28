var menu = document.getElementById("menu");
var burger = document.getElementById("burger-bars");
var index, flex, none;

function menuBurger() {
    index = menu.className;
    flex = 'flex';
    none = 'none';

    switch (index) {
        case none:
            menu.className = 'flex';
            burger.style.fontSize = "50px";
            break;
        case flex:
            menu.className = 'none';
            burger.style.fontSize = "60px";
            break;
        default:
            break;
    }
} 
