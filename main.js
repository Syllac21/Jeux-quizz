const root1 = document.getElementById('root');
// Créer les éléments de la navbar
const nav = document.createElement("nav");
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
li.textContent = "Thème";
li1.textContent = "Inscription";
li3.textContent = "Thème";
li4.textContent = "Inscription";

// Ajouter classes et id à chaque élément de la nav
nav.setAttribute("class", "bg-gray-800 p-4");
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

//pour le menu simle
ul.setAttribute("class", "hidden md:flex space-x-16 justify-end");
li.setAttribute("class", "text-white");
li.setAttribute("id","theme_desk")
li1.setAttribute("class", "text-white");

//pour le menu burger
ul1.setAttribute("class", "hidden md:hidden flex flex-col space-y-5 mt-4");
ul1.setAttribute("id", "menu");
li2.setAttribute("class", "border border-red-600");
li3.setAttribute("class", "text-white block mt-1");
li3.setAttribute("id","theme_tel");
li4.setAttribute("class", "text-white block");

// Insérer les éléments dans les parents
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

root1.appendChild(nav);

/* -------------------------------------- */

//image Quizz
// Créer une nouvelle div
const divImage = document.createElement("div");
// Ajouter des classes à la div
divImage.setAttribute("class", "flex justify-center bg-[#f2e6d7]");
// Créer un nouvel élément image
const imgQuizz = new Image();
// Définir la source de l'image
imgQuizz.src = "img/Designer1.jpeg";
// Ajouter l'image à la div
divImage.appendChild(imgQuizz);
// Ajouter la div au body ou à un autre élément parent
root1.appendChild(divImage);

/* -------------------------------------- */

// Créer les élément du main 
const main = document.createElement("main");
const divMain = document.createElement("div");

//1er article theme cinéma
const articleMain = document.createElement("article");
const divMain1 = document.createElement("div");
const sectionMain = document.createElement("section");
const h2Section = document.createElement("h2");
const h2Section1 = document.createElement("h2");
const ulSection = document.createElement("ul");
const liSection = document.createElement("li");
const liSection1 = document.createElement("li");
const liSection2 = document.createElement("li");
//2eme article theme sport
const articleMain1 = document.createElement("article");
const divMain2 = document.createElement("div");
const sectionMain1 = document.createElement("section");
const h2Section2 = document.createElement("h2");
const h2Section3 = document.createElement("h2");
const ulSection1 = document.createElement("ul");
const liSection3 = document.createElement("li");
const liSection4 = document.createElement("li");
const liSection5 = document.createElement("li");

// Ajouter du texte aux éléments h2 et li
h2Section.textContent = "Cinéma";
h2Section1.textContent = "Difficulté:";
liSection.textContent = "Facile";
liSection1.textContent = "Moyen";
liSection2.textContent = "Difficile";

h2Section2.textContent = "Sport";
h2Section3.textContent = "Difficulté:";
liSection3.textContent = "Facile";
liSection4.textContent = "Moyen";
liSection5.textContent = "Difficile";

// Ajouter classes et id à chaque élément du Main
main.setAttribute("class", "border border-gray-800 border-t-4 bg-stone-100");
divMain.setAttribute("class", "hidden md:hidden md:flex md:flex-row md:justify-center bg-[#ccbcaa]");
divMain.setAttribute("id","theme")
// 1er article avec le 1er theme
articleMain.setAttribute("class", "flex justify-center text-center items-center");
divMain1.setAttribute("class", "bg-[url('./img/theme-cinema.jfif')] border-4 border-gray-800 bg-cover rounded-2xl m-5");
sectionMain.setAttribute("class", "rounded overflow-hidden shadow-lg flex flex-col text-center justify-center m-5");
h2Section.setAttribute("class", "text-3xl text-white font-bold  underline flex justify-center  text-center m-5");
h2Section1.setAttribute("class", "m-5 text-xl text-white font-semibold text-center justify-center");
ulSection.setAttribute("class", "flex flex-row justify-center m-5");
let liStyleTheme = "bg-gray-800 rounded-md text-xl font-semibold text-gray-200 m-3 p-2" // style des li
liSection.setAttribute("class", liStyleTheme);
liSection1.setAttribute("class", liStyleTheme);
liSection2.setAttribute("class", liStyleTheme);

// 2eme article avec le 2eme theme
articleMain1.setAttribute("class", "flex justify-center text-center items-center");
divMain2.setAttribute("class", "bg-[url('./img/theme-sport.png')] border-4 border-gray-800 bg-cover rounded-2xl m-5");
sectionMain1.setAttribute("class", "rounded overflow-hidden shadow-lg flex flex-col text-center justify-center m-5");
h2Section2.setAttribute("class", "text-3xl text-white font-bold  underline flex justify-center  text-center m-5");
h2Section3.setAttribute("class", "m-5 text-xl text-white font-semibold text-center justify-center");
ulSection1.setAttribute("class", "flex flex-row justify-center m-5");
liSection3.setAttribute("class", liStyleTheme);
liSection4.setAttribute("class", liStyleTheme);
liSection5.setAttribute("class", liStyleTheme);

// Insérer les éléments dans les parents
//article1 theme cinema
main.appendChild(divMain);
divMain.appendChild(articleMain);
articleMain.appendChild(divMain1);
divMain1.appendChild(sectionMain);
sectionMain.appendChild(h2Section);
sectionMain.appendChild(h2Section1);
sectionMain.appendChild(ulSection);
ulSection.appendChild(liSection);
ulSection.appendChild(liSection1);
ulSection.appendChild(liSection2);
//article2 theme sport
divMain.appendChild(articleMain1);
articleMain1.appendChild(divMain2);
divMain2.appendChild(sectionMain1);
sectionMain1.appendChild(h2Section2);
sectionMain1.appendChild(h2Section3);
sectionMain1.appendChild(ulSection1);
ulSection1.appendChild(liSection3);
ulSection1.appendChild(liSection4);
ulSection1.appendChild(liSection5);

root1.appendChild(main);

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

const thememenu = document.getElementById("theme");
/* console.log(thememenu) */
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

//js Sylvain

const listThemes = ['cinema-series', 'foot']
const classThemes = 'mx-auto';
const classThemesChoose = 'mx-auto bg-slate-600';
const banner = document.createElement('header');
const classBanner = 'bg-slate-900 text-white';
banner.setAttribute('class' , classBanner);

const navThemes = document.createElement('nav');
const classNav ='flex justify-center items-center';
navThemes.setAttribute('class' , classNav);

const title = document.createElement('div');
title.innerHTML = 'Le Quizz des semi-croustillants';

let themeChosen = 'cinema';
let chooseTheme = 'true'

const root = document.getElementById('root');
const zoneQuizz =  document.createElement('section');
const questionDiv = document.createElement('div');
const reponse1 = document.createElement('div');
const reponse2 = document.createElement('div');
const reponse3 = document.createElement('div');
const reponse4 = document.createElement('div');
const begin = document.createElement('div');
const btnSuivant = document.createElement('div');
classReponseQuizz = 'reponse class bg-slate-600 text-white text-center max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-5 py-3 hover:bg-sky-700';
classQuestion = 'card-title';
classZoneQuizz = 'card border-2 border-slate-900 bg-slate-300 w-3/6 mx-auto hidden mt-5 rounded shadow-xl'
classTitle ='text-center text-3xl mb-5';

reponse1.setAttribute('class' , 'reponse');
reponse2.setAttribute('class' , 'reponse');
reponse3.setAttribute('class' , 'reponse');
reponse4.setAttribute('class' , 'reponse');
title.setAttribute('class', classTitle);
zoneQuizz.setAttribute('class' , classZoneQuizz);
questionDiv.setAttribute('class' , 'reponse w-1/2 mx-auto bg-transparent mb-5');

zoneQuizz.appendChild(questionDiv);
zoneQuizz.appendChild(reponse1);
zoneQuizz.appendChild(reponse2);
zoneQuizz.appendChild(reponse3);
zoneQuizz.appendChild(reponse4);
banner.appendChild(title);
for(let i =0 ; i < listThemes.length ; i++){
    const newBtn = document.createElement('button');
    newBtn.innerHTML = listThemes[i];
    newBtn.setAttribute('class' , classThemes);
    navThemes.appendChild(newBtn);
}
banner.appendChild(navThemes);
root.appendChild(banner);
root.appendChild(zoneQuizz);
root.appendChild(begin);
root.appendChild(btnSuivant);

const btnThemes = banner.querySelectorAll('button');

const onclickTheme = btnThemes.forEach((theme) => 
    {theme.addEventListener('click',function(){
        if(chooseTheme){
            btnThemes.forEach((theme) => {theme.setAttribute('class' , classThemes)});
            themeChosen = this.innerHTML;
            this.setAttribute('class' , classThemesChoose);
        }
    })}
);



let classBtn = 'transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 mx-auto my-7 '
let derniereQuest = false;

begin.setAttribute('class' , classBtn);
btnSuivant.setAttribute('class' , classBtn + 'hidden');



begin.innerHTML = 'Jouer';
btnSuivant.innerHTML = "suivant";

const reponsesDiv = document.querySelectorAll('.reponse');
let j = false;
let nbQuest = 0;
let brep = '';
let clicked = false;
let score = 0;
let aleaTable = [];

// ________________________________________________________________________________________
// utiliser json
// ________________________________________________________________________________________



async function loadQuestions() {
    let path = `./questions-${themeChosen}.json`
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON');
        
        const jsonData = await response.json(); // Lit le contenu JSON
        return extractQuestions(jsonData); // Extrait les questions
        
    } catch (error) {
        console.error(error);
    }
}

function extractQuestions(data) {
    
    let tableMap = data.quiz.map(
        item => ({
            Question : item.question,
            bonne_reponse : item.bonne_reponse,
            mauvaises_reponses : item.mauvaises_reponses
        })
    );
    return tableMap;
}

async function displayQuestions() {
    let table = await loadQuestions();
    let tableQuestions = [];
    let alea = Math.floor(Math.random()*table.length);
    while(aleaTable.includes(alea)){
        alea = Math.floor(Math.random()*table.length)
    }
    aleaTable.push(alea);
    tableQuestions.push(table[alea]);
    return tableQuestions
}


begin.addEventListener('click', () =>{
    j = true;
    chooseTheme = false;
    if(j){
        console.log(j);
        displayQuestions().then(tableQuestions => {
            brep = tableQuestions[0].bonne_reponse;
            let tabReponse = melangeReponse(brep, tableQuestions[0].mauvaises_reponses);
            console.log(tableQuestions[0]);
            afficheQuestion(tableQuestions[0].Question, tabReponse);
            begin.classList.add('hidden');
        })
    }   
})

btnSuivant.addEventListener('click', () =>{
    j = true;
    clicked = false;
    reponse1.setAttribute('class' , 'reponse');
    reponse2.setAttribute('class' , 'reponse');
    reponse3.setAttribute('class' , 'reponse');
    reponse4.setAttribute('class' , 'reponse');
    if(derniereQuest){
        zoneQuizz.classList.add('hidden');
        btnSuivant.classList.add('hidden');
        root.innerHTML = `vous avez eu ${score} bonnes réponses`;
    } else if(j){
        
        displayQuestions().then(tableQuestions => {
            brep = tableQuestions[0].bonne_reponse;
            let tabReponse = melangeReponse(brep, tableQuestions[0].mauvaises_reponses);
            console.log(tableQuestions[0]);
            afficheQuestion(tableQuestions[0].Question, tabReponse);
            begin.classList.add('hidden');
        })
    }   
    if(nbQuest === 9){
        derniereQuest = true;
    }
})

//_____________________________________________________________________________________________



function melangeReponse(brep, mrep){
    let alea = Math.floor(Math.random()*4);
    let reponses = [];
    let dejachoisi = [];
    for(let i = 0 ; i < 4 ; i++){
        while (dejachoisi.includes(alea)){
            alea = Math.floor(Math.random()*4);
        }
        dejachoisi.push(alea);
        if(alea === 3){
            reponses.push(brep);
        }else{
            
            reponses.push(mrep[alea]);
        }
    }

    return reponses;
}

function afficheQuestion(question, rep){
    console.log(rep);
    questionDiv.innerHTML = question;
    
    reponse1.innerHTML = rep[0];
    reponse2.innerHTML = rep[1];
    reponse3.innerHTML = rep[2];
    reponse4.innerHTML = rep[3];
    reponse1.setAttribute('class' , classReponseQuizz);
    reponse2.setAttribute('class' , classReponseQuizz);
    reponse3.setAttribute('class' , classReponseQuizz);
    reponse4.setAttribute('class' , classReponseQuizz);
    zoneQuizz.classList.remove('hidden');
}

const onClick = reponsesDiv.forEach((reponse) => 
    reponse.addEventListener('click', function() {
        if(!clicked){
            clicked = true;
            
            if(this.innerHTML === brep){
                this.classList.add('bg-green-500');
                btnSuivant.classList.remove('hidden');
                if(derniereQuest){
                    btnSuivant.innerHTML ='terminé'
                }
                nbQuest++;
                j = false;
                score++;
                
            }else{
                this.classList.add('bg-red-500');
                btnSuivant.classList.remove('hidden');
                if(derniereQuest){
                    btnSuivant.innerHTML ='terminé'
                }
                nbQuest++;
                j = false;
                
            }
        }
        
    })
);










