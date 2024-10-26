let quizz = [] //tableau des  questions
let tableObj = []
let goodResponses = "" // bonne réponse
let objChoisi = []
let erreur = 0
let score = 0

async function loadQuiz() {
    try {
      const response = await fetch('quiz.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du fichier JSON');
      }
      
        quizz = await response.json();
        //console.log("console du quizz :"+quizz)
      if (typeof quizz === 'object' && !Array.isArray(quizz)) {
       
        for (let key in quizz) {
          //console.log("avant :"+key)  
          if (quizz.hasOwnProperty(key)) {
             questionObj = quizz[key];
             //console.log("après :"+key)  
            tableObj.push(questionObj);
            
            // console.log("Objet "+questionObj['mauvaises_reponses']);
            //console.log(`Question: ${questionObj.question}`);
            //console.log('Bonne réponse:', questionObj.bonne_reponse);
            //console.log(`Mauvaise réponse: ${questionObj.mauvaises_reponses}`);
            //console.log('----------------------------------');
            
          }
        }
      } else{
        throw new TypeError('Le fichier JSON n\'est pas un objet');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
    return tableObj
  }
loadQuiz().then(
    (tableObj) => {
    console.log(tableObj)
     
    const indexAlea = Math.floor(Math.random() * tableObj.length)// selection random d'un chiffre correspondant à la longueur du tableau
    objChoisi = tableObj[17] //affectation de la question choisi
    console.log(objChoisi['question'])
  
    let repMelanger = objChoisi['mauvaises_reponses']+","+ objChoisi['bonne_reponse'];
    
    console.log("avant split :"+repMelanger)
    let splitTab = repMelanger.split(',');
        let tabvarr = []
          for(i = 0; i <=3;i++){
            varr = splitTab[i].replace(/\(|\)/g, "")//changement de caractère
            tabvarr.push(varr)
            console.log("après split et formatage :" +varr)
          }

          console.log("réponse avant mélange :"+tabvarr)
          shuffle(tabvarr); 
          console.log("réponse après mélange :"+tabvarr)
    });

           
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index de 0 a i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
     let t = array[i]; 
    array[i] = array[j]; 
    array[j] = t
    //[array[i], array[j]] = [array[j], array[i]];
    //lien du site pour la compréhension https://fr.javascript.info/task/shuffle
  }

}


function replay(){
    document.getElementById("bouton_replay").addEventListener("click", function() {
       

       
      })

}
 

function goodResp(){
    document.getElementById("goodResp").addEventListener("click", function() {
       score = score + 1

       
    })

}

async function badResp(){
    document.getElementById("badResp").addEventListener("click", function() {
       error = error + 1 

       
    })

}