let question = ['question A','question B'] //tableau des  questions
let response = ['A','B','C','D'] //tableau des quatres réponses possible 
let bonneRep = "D" // bonne réponse
let questionChoisi = ""
let erreur = 0
let score = 0




function replay(){
    document.getElementById("bouton_replay").addEventListener("click", function() {
       

       
      })

}

function choixQuestionRandom(){
    const indexAlea = Math.floor(Math.random() * question.length)// selection random d'un chiffre correspondant à la longueur du tableau
    questionChoisi = question[indexAlea] //affectation de la question choisi
    console.log(questionChoisi)
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