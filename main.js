// Créer les éléments de la navbar
const nav = document.createElement("nav");
//const titre = document.createElement("h1")
const div = document.createElement("div");
const aAcceuil = document.createElement("a");
const div1 = document.createElement("div");
const button = document.createElement("button");
const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const ul1 = document.createElement("ul");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

// Ajouter du texte aux éléments li
aAcceuil.textContent = "Accueil";
//titre.textContent = "Quizz";
li.textContent = "Thème";
li1.textContent = "Inscription";
li3.textContent = "Thème";
li4.textContent = "Inscription";

// Ajouter classes et id à chaque élément de la nav
nav.setAttribute("class", "bg-gray-800 p-4");
//titre.setAttribute("class","text-white text-xl  flex items-center justify-center");
div.setAttribute("class", "flex justify-between text-center items-center");
aAcceuil.setAttribute("class", "text-white text-lg justify-start");
div1.setAttribute("class", "md:hidden");
button.setAttribute("class", "text-white focus:outline-none");
button.setAttribute("id", "burger");

//SVG
svg.setAttribute("class", "w-6 h-6");
svg.setAttribute("fill", "none");
svg.setAttribute("stroke", "currentColor");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

//path
path.setAttribute("stroke-linecap","round");
path.setAttribute("stroke-linejoin","round"); 
path.setAttribute("stroke-width","2");
path.setAttribute("d","M4 6h16M4 12h16m-7 6h7");


ul.setAttribute("class", "hidden md:flex space-x-16 justify-end");
li.setAttribute("class", "text-white");
li1.setAttribute("class", "text-white");
ul1.setAttribute("class", "hidden md:hidden flex flex-col space-y-5 mt-4");
ul1.setAttribute("id", "menu");
li2.setAttribute("class", "border border-red-600");
li3.setAttribute("class", "text-white block mt-1");
li4.setAttribute("class", "text-white block");

// Insérer les éléments dans les parents
//nav.appendChild(titre);
nav.appendChild(div);
div.appendChild(aAcceuil);
div.appendChild(div1);
div1.appendChild(button);
button.appendChild(svg);
svg.appendChild(path);
div.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li1);
nav.appendChild(ul1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);

document.body.appendChild(nav);

 // Fonction pour le menu burger de la nav
 document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});