//creation front yannick et me

//NAV










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
