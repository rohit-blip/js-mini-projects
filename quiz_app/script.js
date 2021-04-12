const quizData = [

    {
        question: 'How old is Rohit',
        a: '10',
        b: '20',
        c: '25',
        d: '91',
        correct: 'b'
    },
    {
        question: 'Who is the Prime Minister of India',
        a: 'Narendra Modi',
        b: 'Manmohan singh',
        c: 'Amit Shah',
        d: 'Mamata Banerjee',
        correct: 'a'
    },
    {
        question: 'What was the most used programming language in 2019',
        a: 'C',
        b: 'Python',
        c: 'Javascript',
        d: 'Java',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for',
        a: 'Hypertext markup language',
        b: 'Hello tom martha lewis',
        c: 'Application Programming interface',
        d: 'Jason object notation',
        correct: 'a'
    },
    {
        question: 'What was the least used programming language in 2019',
        a: 'C',
        b: 'Python',
        c: 'Ruby',
        d: 'Java',
        correct: 'c'
    }

]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];
    
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} 
        questions correctly</h2> <button onclick="location.reload()">
        Reload</button>`
    }
  
    }

});

