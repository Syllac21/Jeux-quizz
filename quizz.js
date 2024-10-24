let quizz = [] //tableau des  questions
//let response = ['A','B','C','D'] //tableau des quatres réponses possible 
let goodResponses = "D" // bonne réponse
let questionChoisi = ""
let erreur = 0
let score = 0

async function loadQuiz() {
    try {
      
      const response = await fetch('quiz.json');
      
     
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du fichier JSON');
      }
      
        quizz = await response.json();
      if (typeof quizz === 'object' && !Array.isArray(quizz)) {
       
        for (let key in quizz) {
          if (quizz.hasOwnProperty(key)) {
             questionObj = quizz[key];  
            
           console.log(questionObj.question);
            console.log(`Question: ${questionObj.question}`);
            console.log('Bonne réponse:', questionObj.bonne_reponse);
            console.log(`Mauvaise réponse: ${questionObj.mauvaises_reponses}`);
            console.log('----------------------------------');
          }
        }
      } else {
    
        throw new TypeError('Le fichier JSON n\'est pas un objet');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  }loadQuiz();






function replay(){
    document.getElementById("bouton_replay").addEventListener("click", function() {
       

       
      })

}

function choixQuestionRandom(){
    const indexAlea = Math.floor(Math.random() * quizz.length)// selection random d'un chiffre correspondant à la longueur du tableau
    questionChoisi = quizz[indexAlea] //affectation de la question choisi
    //console.log(questionChoisi)
}choixQuestionRandom()

function goodResp(){
    document.getElementById("goodResp").addEventListener("click", function() {
       score = score + 1

       
    })

}

function badResp(){
    document.getElementById("badResp").addEventListener("click", function() {
       error = error + 1 

       
    })

}