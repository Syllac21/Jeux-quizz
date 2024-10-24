const reponse1 = document.getElementById('rep1');
const reponse2 = document.getElementById('rep2');
const reponse3 = document.getElementById('rep3');
const reponse4 = document.getElementById('rep4');
let quizz = [
    {
        question:"pourquoi",
        bonne_reponse:"oui",
        mauvaises_reponses:[
            "non",
            "comment",
            "jamais"
        ]
    }
]

reponse1.addEventListener('click', ()=>{
    if (reponse1.innerHTML === quizz[0].bonneReponse){
        score++;
        reponse1.classList.add('border-2 border-green')
    }else{
        score--;
        reponse1.classList.add('border-2 border-red');
    }
})

