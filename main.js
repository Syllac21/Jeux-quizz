//init sylv elements

const root = document.getElementById('root'); //first thing
const zoneQuizz =  document.createElement('section');
const questionDiv = document.createElement('div');
const reponse1 = document.createElement('div');
const reponse2 = document.createElement('div');
const reponse3 = document.createElement('div');
const reponse4 = document.createElement('div');
const begin = document.createElement('div');
const btnSuivant = document.createElement('div');

//creation front yannick et me


//NAV
const NavBar = document.createElement("nav");
const NavBarStyle = "bg-gray-800 p-4";
NavBar.setAttribute("class", NavBarStyle);
root.appendChild(NavBar);

//Divs 

//creation divs
const DivAmount = 3;
let div = [];
for (let i= 0; i < DivAmount; i++){
    //console.log(i);
    div[i] = document.createElement("div");
    div[i].setAttribute("class", "");
}

//UL elements

//creation ul
const ulAmount = 2;
let ul = [];
for ( let i = 0;i <ulAmount; i++){
    ul[i] =  document.createElement("ul");
    ul[i].setAttribute("class", "");
}

//LI elements

//creation Lis
const liAmount = 5;
let li = [];
for ( let i = 0; i < liAmount; i++){
    li[i] = document.createElement("li");
    li[i].setAttribute("class", "");
}

// appending elements

//inside the nav bar
NavBar.appendChild(div[0]);
const navdivStyle = "flex justify-between text-center items-center";
div[0].setAttribute("class", navdivStyle);

NavBar.appendChild(ul[0]);
const ul0Style = "hidden md:hidden flex flex-col space-y-5 mt-4";
ul[0].setAttribute("class", ul0Style);
ul[0].setAttribute("id", "menu");



//inside div________________________________________________________________________________//

//Anchor elment
const aAcceuil = document.createElement("a");
aAcceuil.textContent = "Accueil";
aAcceuil.setAttribute("class", "text-white text-lg justify-start");
div[0].appendChild(aAcceuil)

//div1 inside nav/div/div1
div[1].setAttribute("class", "md:hidden");
div[0].appendChild(div[1]);

//boutton 
const buttonburger = document.createElement("button");
buttonburger.setAttribute("id", "burger");
buttonburger.setAttribute("class", "text-white focus:outline-none");
div[1].appendChild(buttonburger);

//SVG
const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
svg.setAttribute("class", "w-6 h-6");
svg.setAttribute("fill", "none");
svg.setAttribute("stroke", "currentColor");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
buttonburger.appendChild(svg);

//Path
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("stroke-linecap","round");
path.setAttribute("stroke-linejoin","round"); 
path.setAttribute("stroke-width","2");
path.setAttribute("d","M4 6h16M4 12h16m-7 6h7");
svg.appendChild(path);


//ul inside nav/div/ul
const ul1Style = "hidden md:flex space-x-16 justify-end";
ul[1].setAttribute("class", ul1Style);
div[0].appendChild(ul[1]);

//elements from UL1
ul[1].appendChild(li[0]);
ul[1].appendChild(li[1]);
const ul1LiStyle = "text-white"

li[0].setAttribute("id", "theme_desk");

li[0].setAttribute("class", ul1LiStyle);
li[1].setAttribute("class", ul1LiStyle);

li[0].textContent = "Thème"
li[1].textContent = "Inscription"

//__________________________________________________________________________________________//

//inside NAV/UL  (li2 - li5)

ul[0].appendChild(li[2]);
ul[0].appendChild(li[3]);
ul[0].appendChild(li[4]);

li[2].setAttribute("class", "border border-red-600");
li[3].setAttribute("class", "text-white block mt-1");
li[3].setAttribute("id", "theme_tel");
li[4].setAttribute("class", "text-white block");

li[3].textContent = "Thème"
li[4].textContent = "Inscription"

//____________________________________________________________________________________________//

const thememenu = document.getElementById("theme");

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
//______________________________________________________________________________________________//
//Image centre

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
root.appendChild(divImage);

//__________________________________________________________________________________________________//



//Back end code Sylv. et jerem
const listThemes = ['cinema', 'foot']
const classThemes = 'mx-auto';
const classThemesChoose = 'mx-auto bg-slate-600';
const banner = document.createElement('header');
const classBanner = 'bg-slate-900 text-white';
banner.setAttribute('class' , classBanner);

const divpickThemes = document.createElement('div'); //modif from nav to div
const classdivThemes ='flex justify-center items-center';
divpickThemes.setAttribute('class' , classdivThemes);

const title = document.createElement('div');


let themeChosen = 'cinema';
let chooseTheme = 'true'

classReponseQuizz = 'reponse class bg-slate-600 text-white text-center max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-5 py-3 hover:bg-sky-700';
classQuestion = 'card-title';
classZoneQuizz = 'card border-2 border-slate-900 bg-slate-300 w-full md:w-3/6 mx-auto hidden mt-5 rounded shadow-xl'
classTitle ='text-center text-3xl mb-5';

reponse1.setAttribute('class' , 'reponse');
reponse2.setAttribute('class' , 'reponse');
reponse3.setAttribute('class' , 'reponse');
reponse4.setAttribute('class' , 'reponse');
title.setAttribute('class', classTitle);
zoneQuizz.setAttribute('class' , classZoneQuizz);
questionDiv.setAttribute('class' , 'text-pretty reponse w-1/2 mx-auto bg-transparent mb-5 md:text-wrap');

zoneQuizz.appendChild(questionDiv);
zoneQuizz.appendChild(reponse1);
zoneQuizz.appendChild(reponse2);
zoneQuizz.appendChild(reponse3);
zoneQuizz.appendChild(reponse4);

for(let i =0 ; i < listThemes.length ; i++){
    const newBtn = document.createElement('button');
    newBtn.innerHTML = listThemes[i];
    newBtn.setAttribute('class' , classThemes);
    divpickThemes.appendChild(newBtn);
}
banner.appendChild(divpickThemes);
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



let classBtn = 'text-center transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-1/6 mx-auto my-7 '
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
    let path = `./${themeChosen}DATA.json`
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

    //Quizz function : ending
    if(derniereQuest){
        zoneQuizz.classList.add('hidden');
        btnSuivant.classList.add('hidden');
        //Need to change ending, and reset game.
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
