let quizz = [] //tableau des  questions
let tableObj = []
let goodResponses = "" // bonne réponse
let objChoisi = []
let erreur = 0
let score = 0
let tableQuiz=""

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
    console.log(objChoisi['question']);
    //------------envoi sur la page HTML------------
    let quest = document.getElementById("question");
    let question = document.createTextNode(objChoisi['question']);
        quest.appendChild(question);
        
    //----------------------------------------------
    let repMelanger = objChoisi['mauvaises_reponses']+","+ objChoisi['bonne_reponse'];
    
    console.log("avant split :"+repMelanger)
    let splitTab = repMelanger.split(',');
        let tabvarr = []
        let respElem=[]
          for(let i = 0; i <=3;i++){
            varr = splitTab[i].replace(/\(|\)/g, "")//changement de caractère
            tabvarr.push(varr)
            console.log("après split et formatage :" +varr)
          }

          console.log("réponse avant mélange :"+tabvarr)
          shuffle(tabvarr); 
          console.log("réponse après mélange :"+tabvarr)
          for(let i = 0; i <=3 ;i++){
            
            respElem = document.getElementById("reponse"+i);
            let resp = document.createTextNode(tabvarr[i]);
                respElem.appendChild(resp);
                
          }

          
});


 let reponseCliquer="";
loadQuiz().then(()=>{
      
         for(j=0;i=j<=3;j++){
           document.getElementById("trreponse"+j).addEventListener("click", function() { 

            reponseCliquer = document.getSelection('reponse'+j).anchorNode.textContent;
            console.log(reponseCliquer);
            
           }) 
           
        }
       
       
});

function main(){
      let main = document.createElement("main");
          main.setAttribute("class", "bg-blue-500 h-68 text-white border-2 border-black")
      let divMain = document.createElement("div");
          divMain.setAttribute("class", "container mx-auto text-xl italic font-bold mt-3 pt-2 pb-2 text-center")
          tableQuiz = document.createElement("table");
      let trQuestion = document.createElement("tr");
          trQuestion.setAttribute("id", "tr_question");
      let tdQuestion = document.createElement("td");
          tdQuestion.setAttribute("class", "border-4 border-white px-2 py-2");
          tdQuestion.setAttribute("id", "question");


        let body = document.querySelector("body");
          
          trQuestion.appendChild(tdQuestion);
          tableQuiz.appendChild(trQuestion);
          divMain.appendChild(tableQuiz);
          main.appendChild(divMain);
          body.appendChild(main);

          let trReponse="";
          let tdReponse=""; 
          for(let i = 0; i <=3; i++){
            trReponse = document.createElement("tr");
            trReponse.setAttribute("id", "trreponse"+i);
            tdReponse = document.createElement("td");
                tdReponse.setAttribute("id","reponse"+i);
                tdReponse.setAttribute("class","border-4 border-black py-2");
                trReponse.appendChild(tdReponse);
                tableQuiz.appendChild(trReponse);
          }  
       
}main();   

           
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
 


  


