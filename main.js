function apparence() {
    var menu = document.getElementById("burger");
    var icone = document.getElementById("icone");
    menu.style.transition ="all 1s";

    menu.classList = (menu.classList == 'burger_invisible')
     ? "burger_visible" : "burger_invisible";

    icone.classList = (icone.classList == 'fas fa-times')
    ? "fas fa-bars" : "fas fa-times";

    // if (index == 'burger_invisible'){
        
    //     menu.setAttribute('class', 'burger_visible');
    //     icone.setAttribute('class', "fas fa-times");
    // }
    // else {
    //     menu.setAttribute('class', 'burger_invisible');
    //     icone.setAttribute('class', "fas fa-bars");
    // }
}

function slide(id){

    var slide = document.getElementById(id);
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");

    if ((id == 'slide1') && ( slide.style.opacity == 0)){
        slide1.style.opacity = 1;
        slide2.style.opacity = 0;
        slide3.style.opacity = 0;
        slide1.style.transition = "2s";
    }
    if ((id == 'slide2') && ( slide.style.opacity == 0)){
        slide1.style.opacity = 0;
        slide2.style.opacity = 1;
        slide3.style.opacity = 0;
        slide2.style.transition = "2s";
        
    }
    if ((id == 'slide3') && ( slide.style.opacity == 0)){
        slide1.style.opacity = 0;
        slide2.style.opacity = 0;
        slide3.style.opacity = 1;
        slide3.style.transition = "2s";
        
    }
}

// /////////////////////////////////////////////
    // pour le menusticky mediaquery >1050px//
// /////////////////////////////////////////////
window.onscroll = function(){
    stickyMenu();
    bar_progress();
}

// je recupere mon menu et mon header
var menu = document.getElementById('single-nav');
// var header = document.getElementsByTagName('header');

// je recupere la distance de mon header
var startSticky = window.innerHeight;

// j'ajoute mon menu a mes autres sections
// des qu'il depasse la taille de mon header
function stickyMenu(){

    if(window.scrollY >= startSticky){
            menu.classList.add('sticky');
            
    }else {
            menu.classList.remove('sticky')
    }
}

function bar_progress(){

    var div_competences = document.getElementById('about_me').offsetTop - 50;
    var quantite1 = document.getElementById('quantite1');
    var quantite2 = document.getElementById('quantite2');
    var quantite3 = document.getElementById('quantite3');

    if(window.scrollY >= div_competences){
        quantite1.style.animation = "chargement_1 5s"; 
        quantite2.style.animation = "chargement_2 5s";   
        quantite3.style.animation = "chargement_3 5s";             
    }
    // else {
    //     quantite1.style.animation = ""; 
    //     quantite2.style.animation = "";   
    //     quantite3.style.animation = "";             
    // }
    
}