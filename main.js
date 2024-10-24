/* BUT :
-Afficher la structure de Yannick en js.

-La totalité du site est dans la div root.
*/

//------------------------------POUR : VERSION 2-------------------------------//
/*-regrouper tous les elements necessaires, les creer dans une seulle boucle
    et les append directement quand neccesaires.
*/

//La seulle div dans le fichier html:

const root = document.getElementById("root");

//Classes styles pour tailwind :

const tittreStyle = "";
const navStyle = "";
const navListStyle = "";
const navLiStyle= "";
const sectionStyle = "";

//creation des elements html en js:

//H1
let tittre = document.createElement("h1");

tittre.setAttribute("class","text-3xl font-bold underline"); //exemple
tittre.textContent = "Quizz"; //test : ça marche
root.appendChild(tittre);

//Nav

let nav = document.createElement("nav");

nav.setAttribute("class",navStyle);
root.appendChild(nav);

//UL

let navList = document.createElement("ul");

nav.setAttribute("class",navLiStyle);
nav.appendChild(navList);

//Li dans nav

//test boucle
let navLiNumber = 2;
let navLi = [];

for (let i = 0; i < navLiNumber; i++){
    navLi[i] = document.createElement("li");
    navLi[i].setAttribute("class",navLiStyle);
    navList.appendChild(navLi[i]);
}

//a dans li , peutetre à changer

//Div dans nav -> ul -> li2

let DivDropDown = document.createElement("div");

DivDropDown.setAttribute("class"," ");
navLi[1].appendChild(DivDropDown);

//Article

let MainArticle = document.createElement("article");

MainArticle.setAttribute("class", "");
root.appendChild(MainArticle);

//Sections ----V2 appliqué----

let sectionNumber = 2;
let section = [];

for (let i = 0; i < sectionNumber; i++){
    section[i] = document.createElement("section");
    section[i].setAttribute("class", sectionStyle);
    MainArticle.appendChild(section[i]);
}

//Divs 

let divNumber = 2;
let divs = [];

for (let i = 0; i < divNumber; i++){
    divs[i] = document.createElement("div");
}

//section 1

section[0].appendChild(divs[0]);
divs[0].textContent = "Question du quiz ici" 

//section 2

section[1].appendChild(divs[1]);
divs[1].textContent = "Reponses du quiz" //appel de la fonction peut-etre
divs[1].setAttribute("class", reponseStyle);



function MelangeQuestion(){
    

}








