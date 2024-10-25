
const root = document.getElementById('root');
const questionDiv = document.createElement('div');
const reponse1 = document.createElement('div');
const reponse2 = document.createElement('div');
const reponse3 = document.createElement('div');
const reponse4 = document.createElement('div');
reponse1.setAttribute('class' , 'reponse');
reponse2.setAttribute('class' , 'reponse');
reponse3.setAttribute('class' , 'reponse');
reponse4.setAttribute('class' , 'reponse');
root.appendChild(questionDiv);
root.appendChild(reponse1);
root.appendChild(reponse2);
root.appendChild(reponse3);
root.appendChild(reponse4);
const begin = document.createElement('div');
begin.setAttribute('class' , 'transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 mx-auto');
begin.innerHTML = 'Jouer';
root.appendChild(begin);
const reponsesDiv = document.querySelectorAll('.reponse');
let j = false;

let brep = '';
let clicked = false;



// ___________________________________________________________________
// utiliser json
// ____________________________________________________________________

async function loadQuestions() {
    try {
        const response = await fetch('./questions-cinema-series.json');
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
    let aleaTable = [];
    for (let i = 0 ; i < 10 ; i++){
        while(aleaTable.includes(alea)){
            alea = Math.floor(Math.random()*table.length)
        }
        aleaTable.push(alea);
        tableQuestions.push(table[alea]);
    }

    
    return tableQuestions

}


begin.addEventListener('click', () =>{
    j = true;
    if(j){
        console.log(j);
        displayQuestions().then(tableQuestions => {
            brep = tableQuestions[0].bonne_reponse;
            let tabReponse = melangeReponse(brep, tableQuestions[0].mauvaises_reponses);
            console.log(tableQuestions[0]);
            afficheQuestion(tableQuestions[0].Question, tabReponse);
            
        })
    }
    afficheQuestion()
} 
    
)

function afficheLesQuestion(){
}

//______________________________________________________________________



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
}

const onClick = reponsesDiv.forEach((reponse) => 
    reponse.addEventListener('click', function() {
        if(!clicked){
            clicked = true;
            console.log(clicked);
            if(this.innerHTML === brep){
                this.classList.add('bg-green-500');
                
            }else{
                this.classList.add('bg-red-500');
                
            }
        }
    })
);










