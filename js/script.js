const quizData = [
    {
        question: '1. Septyni broliai turi po vieną seserį. Kiek iš viso seserų?',
        a: '7',
        b: '14',
        c: '1',
        d: '10',
        correct: 'c'
    },
    {
        question: '2. Kuris iš šių žinduolių deda kiaušinius?',
        a: 'Kengūra',
        b: 'Panda',
        c: 'Koala',
        d: 'Ančiasnapis',
        correct: 'd'
    },
    {
        question: '3. Kiek valandų per parą miega katė?',
        a: '4',
        b: '10',
        c: '16',
        d: '24',
        correct: 'c'
    },
    {
        question: '4. Kiek kojų turi voras?',
        a: '2',
        b: '6',
        c: '8',
        d: '10',
        correct: 'c'
    },
    {
        question: '5. Kas kiek laiko žiurkė gali atsivesti jauniklius?',
        a: '10 dienų',
        b: '4 savaitės',
        c: '3 mėnesiai',
        d: 'matai',
        correct: 'b'
    },
    {
        question: '6. Kiek žmogus turi kaulų?',
        a: '87',
        b: '151',
        c: '206',
        d: '380',
        correct: 'c'
    },
    {
        question: '7. Kaip vadinasi nacionalinis Lietuvos medis?',
        a: 'Beržas',
        b: 'Uosis',
        c: 'Liepa',
        d: 'Ąžuolas',
        correct: 'd'
    },
    {
        question: '8. Koks nacionalinis Lietuvos paukštis?',
        a: 'Varna',
        b: 'Žvirblis',
        c: 'Gandras',
        d: 'Pelėda',
        correct: 'c'
    },
    {
        question: '9. Kiek spalvų yra vaivorykštėje?',
        a: '10',
        b: '5',
        c: '7',
        d: '8',
        correct: 'c'
    },
    {
        question: '10. Kiek foloverių turi A4 TikToke',
        a: '1mln',
        b: '2mln',
        c: '5mln',
        d: '6mln',
        correct: 'd'
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