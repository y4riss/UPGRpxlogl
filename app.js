

const quiz = [

    {
        question : "Which programming language is often used for developing Android applications?",
        choices : [
            "Java",
            "Python",
            "C++",
            "Ruby"
        ],
        answer : 0
    },
    {
        question : "What does CSS stand for in web development?",
        choices : [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ],
        answer : 1
    },
    {
      question : "Which data structure follows the Last-In-First-Out (LIFO) principle?",
      choices : [
        "Queue",
        "Linked List",
        "Stack",
        "Array"
      ] ,
      answer : 2
    },
    {
        question : "Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
        choices : [

            "Merge Sort",
            "Quick Sort",
            "Insertion sort",
            "Radix sort",
        ],
        answer : 2
    },
    {
        question : `What does the term "scope" refer to in programming?`,
        choices : [
            "The physical location where a variable is stored in memory",
            "The lifespan or visibility of a variable",
            "The process of converting source code into machine code",
            "The process of finding and fixing bugs in a program"
        ],
        answer : 1
    }
]

const questionNumberDiv = document.querySelector("span");
const questionDiv = document.querySelector(".question");
const finishDiv = document.querySelector(".finish");

const choicesLabel = document.querySelectorAll("label");
const choicesRadio = document.getElementsByName("radio");
const startButton = document.querySelector(".start button");
const quizBody = document.querySelector(".quiz-body");
const nextButton = document.querySelector(".ok");
const restartButton = document.querySelector(".restart");

let i = 0; // current question
let score = 0;

startButton.addEventListener("click",(e)=>{

    document.querySelector(".start").classList.add("hide");
    quizBody.classList.remove("hide");
    start();

})


const resetCheckBox = ()=>
{
    choicesRadio.forEach(choice => choice.checked = false);
}
const start = () => {


        
        nextButton.textContent = "Ok";
        questionNumberDiv.textContent = `Question ${i + 1}:`;
        questionDiv.textContent = quiz[i].question;
        let j = 0;
        choicesLabel.forEach(choice => {
            choice.textContent = quiz[i].choices[j++];
        })

        nextButton.addEventListener("click",handleClick);

}


const handleClick = (e)=>{

        if (e.target.textContent == "Ok")
        {
            // check if answer selected
            let answer = null;

            choicesRadio.forEach(choice => {
                if (choice.checked) {
                    answer = choice.id;
                    return ;
                }
            })
            if (!answer)
            {
                alert("Please answer by choosing one of the available options.");
            }
            else
            {
                if (answer == quiz[i].answer) score++;

                for(let k = 0 ; k < choicesRadio.length ; k++)
                {
                    if (choicesRadio[k].id == quiz[i].answer) choicesLabel[k].innerHTML += ` <i class="fa-solid fa-check" style="color: #00c742;"></i>`;
                    else if (choicesRadio[k].checked) choicesLabel[k].innerHTML += ` <i class="fa-solid fa-xmark" style="color: #ff3838;"></i>`;
                }


                if (i == quiz.length - 1)
                {
                    nextButton.textContent = "Finish";
                }
                else
                {
                    nextButton.textContent = "Next";
                }
            }

            // check if answer correct

            // check if this is the last question

            // display next question or score
        }
        else if (e.target.textContent == "Next")
        {
            resetCheckBox();
            i++;
            start();

        }
        else if (e.target.textContent == "Finish")
        {
           finish();
        }

}

const finish = ()=>{

    quizBody.classList.add("hide");
    finishDiv.classList.remove("hide");

    finishDiv.querySelector("p").textContent = `Score : ${score}/${quiz.length}`

    restartButton.addEventListener("click",()=>{
        location.reload();
    })

}