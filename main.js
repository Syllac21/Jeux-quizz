// génération de variables
const listThemes = ['cinema-series', 'foot'];
let themeChosen = 'foot';
let chooseTheme = 'true';
let nbQuest = 0;
let oneAnswer = true;
let tableAnswer = [];
let score = 0;
let newTableQuizz = [];

// class
let classThemes = 'mx-auto mb-2 px-4 py-2';
const classThemesChoose = 'mx-auto bg-slate-600 ';
const classBanner = 'bg-slate-900 text-white rounded-t-xl';
const classTitle ='text-center text-3xl mb-5';
let classNav ='flex justify-center items-center';
let classZoneQuizz = 'container center-item text-center ';
let classZoneQuestion = 'border border-slate-900 around bg-slate-400 rounded-b-xl hidden'
let ClassBtn = 'transition duration-300 ease-in-out bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded w-1/6 mx-auto my-7';
let classAnswer = 'answer bg-slate-600 text-white max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-5 py-3 hover:bg-sky-700';
let classQuestion = 'max-w-sm card-title mb-5 mx-auto';
let classScore = 'text-center text-3xl text-black hidden';

// récupération de la div root
const root = document.getElementById('root');

// création des éléments HTML
const banner = document.createElement('header');
const title = document.createElement('div');
title.innerHTML = 'Le Quizz des semi-croustillants';
const navThemes = document.createElement('nav');
const btnBegin = document.createElement('button');
btnBegin.innerHTML = 'Commencer';
const btnNext = document.createElement('button');
btnNext.innerHTML = 'Question Suivante';
const zoneQuizz =  document.createElement('section');
const zoneQuestion = document.createElement('aside');
const artQuestion =  document.createElement('article');
const artAnswer1 = document.createElement('article');
const artAnswer2 = document.createElement('article');
const artAnswer3 = document.createElement('article');
const artAnswer4 = document.createElement('article');
const afficheScore = document.createElement('article');



// ajout de class
banner.setAttribute('class' , classBanner);
title.setAttribute('class', classTitle);
navThemes.setAttribute('class' , classNav);
zoneQuizz.setAttribute('class' , classZoneQuizz);
root.setAttribute('class' , 'md:w-3/6 mx-auto mt-5');
zoneQuestion.setAttribute('class' , classZoneQuestion);
artQuestion.setAttribute('class' , classQuestion);
artAnswer1.setAttribute('class' , classAnswer);
artAnswer2.setAttribute('class' , classAnswer);
artAnswer3.setAttribute('class' , classAnswer);
artAnswer4.setAttribute('class' , classAnswer);
btnBegin.setAttribute('class', ClassBtn);
btnNext.setAttribute('class' , ClassBtn);
btnNext.classList.add('hidden');
afficheScore.setAttribute('class' , classScore);

// affichage des éléments HTML
root.appendChild(zoneQuizz);
banner.appendChild(title);
banner.append(navThemes);
for(let i =0 ; i < listThemes.length ; i++){
  const newBtn = document.createElement('button');
  newBtn.innerHTML = listThemes[i];
  newBtn.setAttribute('class' , classThemes);
  if(newBtn.innerHTML === themeChosen){
    newBtn.setAttribute('class' , classThemesChoose)
  }
  navThemes.appendChild(newBtn);
}
zoneQuizz.appendChild(banner);
zoneQuizz.appendChild(zoneQuestion);
zoneQuestion.appendChild(artQuestion);
zoneQuestion.appendChild(artAnswer1);
zoneQuestion.appendChild(artAnswer2);
zoneQuestion.appendChild(artAnswer3);
zoneQuestion.appendChild(artAnswer4);
zoneQuizz.appendChild(btnBegin);
zoneQuizz.appendChild(btnNext);
zoneQuizz.appendChild(afficheScore);

//récupération des boutons thèmes dans la navbar
const btnThemes = banner.querySelectorAll('button');

const onclickTheme = btnThemes.forEach((theme) => 
  {theme.addEventListener('click',function(){
      if(chooseTheme){
        
          btnThemes.forEach((theme) => {theme.setAttribute('class' , classThemes)});
          themeChosen = this.innerHTML;
          this.setAttribute('class' , classThemesChoose);
          console.log(`./questions-${themeChosen}.json`);
      }
  })}
);


function init(){
  
  themeChosen = 'foot';
  navThemes.classList.remove('hidden');
  nbQuest = 0;
  oneAnswer = true;
  tableAnswer = [];
  score = 0;
  afficheScore.classList.add('hidden');
  allAnswer.forEach((answer) => {
    answer.setAttribute('class' , classAnswer);
  })
  btnNext.innerHTML='suivant';
  }

/**
 * La fonction génère un tableau de 10 nombres aléatoires sans doublons
 * @param {*} max 
 * @returns array
 */
function generateNbAlea(max){
  let tableAlea = [];
  for(let i = 0 ; i < 10 ; i++){
    let alea = '';
    while(tableAlea.includes(alea) || typeof(alea) !== 'number'){
      alea = Math.floor(Math.random()*max)
    }
    tableAlea.push(alea);
  }
  return tableAlea;
}

/**
 * la fonction parcours l'objet et retourne un tableau. Chaque ligne contient un objet avec les propriétés Question, bonne_reponse 
 * et mauvaises_reponses (un tableau de 3 mauvaises réponses)
 * @param {*} data 
 * @returns array 
 */

function extractQuestions(data) {
   console.log(data);
  let tableMap = data.quiz.map(
      item => ({
          Question : item.question,
          bonne_reponse : item.bonne_reponse,
          mauvaises_reponses : item.mauvaises_reponses
      })
  );
  return tableMap;
}

/**
 * La fonction génére un tableau contenant la bonne réponse et les 3 mauvaises placées de manières aléatoires.
 * @param {*} goodA 
 * @param {*} badA 
 * @returns 
 */
function generateArrayAnswer(goodA, badA){
  let alea = "";
  let aleatable = [];
  let tableAnswer = [];
  for(let i = 0 ; i < 4 ; i++){
    while(aleatable.includes(alea) || typeof(alea) !== 'number'){
      alea = Math.floor(Math.random()*4);
    }
    aleatable.push(alea);
    if(alea === 3){
      tableAnswer.push(goodA);
    }else{
      tableAnswer.push(badA[alea]);
    }
  }
  return tableAnswer;
}
  
function viewQuestion(question){
  tableAnswer = generateArrayAnswer(question.bonne_reponse , question.mauvaises_reponses);
  
  artQuestion.innerHTML = question.Question ;
  artAnswer1.innerHTML = tableAnswer[0];
  artAnswer2.innerHTML = tableAnswer[1];
  artAnswer3.innerHTML = tableAnswer[2];
  artAnswer4.innerHTML = tableAnswer[3];

  btnBegin.classList.add('hidden');
  zoneQuestion.classList.remove('hidden');

  
}



async function loadQuestions() {
  let path = `questions-${themeChosen}.json`
  try {
    const response = await fetch(path);

    if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON');
    
    const jsonData = await response.json(); // Lit le contenu JSON
    
    return extractQuestions(jsonData); // Extrait les questions
    
  } catch (error) {
    console.error(error);
  }
}

// lancer le jeu au clique sur commencer
const onClikBegin = btnBegin.addEventListener('click' , () => {
  loadQuestions().then((tableQuestion) => {
    chooseTheme = false;
    init();
    let tableAlea = generateNbAlea(tableQuestion.length);
    let tableQuizz = [];
    for(let i = 0 ; i < tableAlea.length ; i++){
      tableQuizz.push(tableQuestion[tableAlea[i]]);
    }
    
    // return(tableQuizz);
  // }).then((tableQuizz) =>{
    newTableQuizz = tableQuizz;
    viewQuestion(newTableQuizz[nbQuest]);
    console.log(newTableQuizz[nbQuest]);
    // click réponse
    const onClikAnswer = allAnswer.forEach((answer) => 
      
      answer.addEventListener('click' , function() {
        
        if(oneAnswer){
          if(nbQuest === 9){
            btnNext.innerHTML = 'Terminer';
          }
          console.log(this.innerHTML , newTableQuizz[nbQuest].bonne_reponse);
          if(this.innerHTML === newTableQuizz[nbQuest].bonne_reponse){
            this.classList.add('bg-green-400');
            this.classList.add('hover:bg-green-700');
            score++;
          }else{
            this.classList.add('bg-red-400');
            this.classList.add('hover:bg-red-700');
          }
          btnNext.classList.remove('hidden');
          nbQuest++;
          
          oneAnswer = false;
        }
        
      })
    ) 


    // bouton suivant
    const onClickNext = btnNext.addEventListener('click' , ()=>{
      if(nbQuest !== 10){
        oneAnswer = true;
        allAnswer.forEach((answer)=>{
          answer.setAttribute('class' , classAnswer);
        })
        btnNext.classList.add('hidden');
        viewQuestion(tableQuizz[nbQuest]);

      } else {
        zoneQuestion.classList.add('hidden');
        afficheScore.innerHTML = `vous avez eu une note de ${score}/10`;
        afficheScore.classList.remove('hidden');
        btnNext.classList.add('hidden');
        btnBegin.classList.remove('hidden');
        chooseTheme = true;
      }
    })
  })

})

// récupération des éléments réponse
const allAnswer = document.querySelectorAll('.answer');

// on écoute le click de réponse et on vérifie si la réponse est juste ou fausse


