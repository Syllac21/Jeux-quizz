// fonction pour le menu burger de la nav
document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    console.log(ThemeOpen);
    if (ThemeOpen = true){
        thememenu.classList.toggle("hidden");
        ThemeOpen = false;
    }
    if (ThemeOpen === false){
        thememenu.classList.add("hidden");
    }
});

// Kaique :

//fonction pour le menu theme
let ThemeOpen = false;

//Mobile
document.getElementById("theme_tel").addEventListener("click", function(){
    const thememenu = document.getElementById("theme");
    thememenu.classList.toggle("hidden");
    ThemeOpen = true;
})

//Desktop
document.getElementById("theme_desk").addEventListener("click", function(){
    const thememenu = document.getElementById("theme");
    thememenu.classList.toggle("md:hidden");
    ThemeOpen = true;
})



// créer les éléments de la navbar
document.createElement('header');
document.