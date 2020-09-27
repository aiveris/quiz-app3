const quizData = [
    {
        question: '1. Kiek dienų turi rugsėjis?',
        a: '29',
        b: '31',
        c: '30',
        d: '28',
        correct: 'c'
    },
    {
        question: '2. Vabalas šviečiantis tamsoje?',
        a: 'Musė',
        b: 'Bitė',
        c: 'Jonvabalis',
        d: 'Tarakonas',
        correct: 'c'
    },
    {
        question: '3. Kas yra Lietuvos sostinė?',
        a: 'Kaunas',
        b: 'Vilnius',
        c: 'Klaipėda',
        d: 'Ignalina',
        correct: 'b'
    },
    {
        question: '4. Kiek valandų turi savaitė?',
        a: '108',
        b: '58',
        c: '250',
        d: '168',
        correct: 'd'
    },
    {
        question: '5. Koks yra lėlės Barbės vardas?',
        a: 'Barbara Millicent Roberts',
        b: 'Barbė Devindarbė',
        c: 'Barbora Radvilaitė',
        d: 'Barbara Straizen',
        correct: 'a'
    },
    {
        question: '6. Koks yra mažiausias paukštis pasaulyje?',
        a: 'Varna',
        b: 'Kolibris',
        c: 'Žvirblis',
        d: 'Sniegena',
        correct: 'b'
    },
    {
        question: '7. Kokia yra laumžirgio gyvenimo trukmė?',
        a: '2 savaitės',
        b: 'mėnesis',
        c: 'metai',
        d: 'para',
        correct: 'd'
    },
    {
        question: '8. Kiek raidžių Lietuvių kalbos abėcėlėje',
        a: '32',
        b: '24',
        c: '34',
        d: '28',
        correct: 'a'
    },
    {
        question: '9. Kiek širdžių turi aštuonkojis?',
        a: '10',
        b: '1',
        c: '3',
        d: '5',
        correct: 'c'
    },
    {
        question: '10. Jeigu bėgi trečias ir aplenki antrą tai kelintas tu bėgi?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
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
                <h2>Teisingai atsakei ${score}/${quizData.length} klausimus.</h2>

                <button onclick="location.reload()">Iš naujo</button>
            `;
        }
    }
});