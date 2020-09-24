const quizData = [
    {
        question: 'Quais as cores da reciclagem do papel, do vidro, do metal e do plástico, respectivamente?',
        a: 'Vermelho, amarelo, verde e azul',
        b: 'Verde, vermelho, azul e amarelo',
        c: 'Amarelo, azul, vermelho e verde',
        d: 'Azul, verde, amarelo e vermelho',
        correct: 'd'
    }, {
        question: 'Quantos habitantes existem no mundo em 2020?',
        a: '5 Bi',
        b: '7 Bi',
        c: '8 Bi',
        d: '10 Bi',
        correct: 'c'
    }, {
        question: 'Quem disse a famosa frase “Penso, logo existo”?',
        a: 'Galileu Galilei',
        b: 'Sócrates',
        c: 'Descartes',
        d: 'Platão',
        correct: 'c'
    }, {
        question: 'Quais são os respectivos planetas do sistema solar?',
        a: 'Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno',
        b: 'Netuno, Vênus, Terra, Marte, Mercúrio, Saturno, Urano e Júpiter',
        c: 'Terra, Netuno, Marte, Vênus, Saturno, Júpiter, Mercúrio, e Urano',
        d: 'Urano, Mercúrio, Netuno, Júpiter, Marte, Vênus, Saturno e Terra',
        correct: 'a'
    }, {
        question: 'Qual o termo usado para designar os alimentos geneticamente modificados?',
        a: 'Transgênicos',
        b: 'Genéricos',
        c: 'Hidrogenados',
        d: 'Transdérmicos',
        correct: 'b'
    }, 
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu ${score} de ${quizData.length} questões corretamente.</h2>
                
                <button onclick="location.reload()">Jogar de novo</button>
            `;
        }
    }
});