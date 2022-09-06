// Questions will be asked
let allResponses = [];
let allResponsesId = [];
let tmpPreviousReponse = [];
const Questions = [
    {
        id: 1,
        q: "Easy Question 1 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 2,
        q: "Easy Question 2 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 3,
        q: "Easy Question 3 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "Easy Question 4 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 5,
        q: "Easy Question 5 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 6,
        q: "Easy Question 6 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 7,
        q: "Easy Question 7 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 8,
        q: "Easy Question 8 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 9,
        q: "Easy Question 9 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 10,
        q: "Easy Question 10 ?",
        type: "easy",
        score: "1",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 11,
        q: "Medium Question 11 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 12,
        q: "Medium Question 12 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 13,
        q: "Medium Question 13 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 14,
        q: "Medium Question 14 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 15,
        q: "Medium Question 15 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 16,
        q: "Medium Question 16 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 17,
        q: "Medium Question 17 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 18,
        q: "Medium Question 18 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 19,
        q: "Medium Question 19 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 20,
        q: "Medium Question 20 ?",
        type: "medium",
        score: "2",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]

    },
    {
        id: 21,
        q: "Hard Question 21 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 22,
        q: "Hard Question 22 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 23,
        q: "Hard Question 23 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 24,
        q: "Hard Question 24 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 25,
        q: "Hard Question 25 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 26,
        q: "Hard Question 26 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 27,
        q: "Hard Question 27 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 28,
        q: "Hard Question 28 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 29,
        q: "Hard Question 29 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    },
    {
        id: 30,
        q: "Hard Question 30 ?",
        type: "hard",
        score: "3",
        a: [{ text: "Wrong Answer 1", isCorrect: false },
        { text: "Wrong Answer 2", isCorrect: false },
        { text: "Correct Answer", isCorrect: true },
        { text: "Wrong Answer 3", isCorrect: false }
        ]
    }


]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");

    // Setting the question text
    let selectedQuestions = Questions.find((item) => {
        return item.id === id;
    })
    question.innerText = selectedQuestions.q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Providing option text 
    op1.innerText = selectedQuestions.a[0].text;
    op2.innerText = selectedQuestions.a[1].text;
    op3.innerText = selectedQuestions.a[2].text;
    op4.innerText = selectedQuestions.a[3].text;

    // Providing the true or false value to the options
    op1.value = selectedQuestions.a[0].isCorrect;
    op2.value = selectedQuestions.a[1].isCorrect;
    op3.value = selectedQuestions.a[2].isCorrect;
    op4.value = selectedQuestions.a[3].isCorrect;

    op1.type = selectedQuestions.type;
    op2.type = selectedQuestions.type;
    op3.type = selectedQuestions.type;
    op4.type = selectedQuestions.type;

    op1.setAttribute("questionid", selectedQuestions.id);
    op2.setAttribute("questionid", selectedQuestions.id);
    op3.setAttribute("questionid", selectedQuestions.id);
    op4.setAttribute("questionid", selectedQuestions.id);

    op1.setAttribute("score", Questions[id].score);
    op2.setAttribute("score", Questions[id].score);
    op3.setAttribute("score", Questions[id].score);
    op4.setAttribute("score", Questions[id].score);

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", (event) => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
        let individualscore = 0;
        if (selected == "true") {
            individualscore = event.target.getAttribute('score');
        }
        tmpPreviousReponse = [];
        tmpPreviousReponse.push({ questionid: event.target.getAttribute('questionid'), type: event.target.getAttribute('type'), response: selected, score: individualscore });
    })

    // Show selection for op2
    op2.addEventListener("click", (event) => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
        let individualscore = 0;
        if (selected == "true") {
            individualscore = event.target.getAttribute('score');
        }
        tmpPreviousReponse = [];
        tmpPreviousReponse.push({ questionid: event.target.getAttribute('questionid'), type: event.target.getAttribute('type'), response: selected, score: individualscore });
    })

    // Show selection for op3
    op3.addEventListener("click", (event) => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
        let individualscore = 0;
        if (selected == "true") {
            individualscore = event.target.getAttribute('score');
        }

        tmpPreviousReponse = [];
        tmpPreviousReponse.push({ questionid: event.target.getAttribute('questionid'), type: event.target.getAttribute('type'), response: selected, score: individualscore });
    })

    // Show selection for op4
    op4.addEventListener("click", (event) => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        let individualscore = 0;
        if (selected == "true") {
            individualscore = event.target.getAttribute('score');
        }
        tmpPreviousReponse = [];
        tmpPreviousReponse.push({ questionid: event.target.getAttribute('questionid'), type: event.target.getAttribute('type'), response: selected, score: individualscore });
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate(1);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
var type = "easy";

next.addEventListener("click", () => {
    start = false;

    if (allResponses.length == 4) {
        localStorage.setItem("result", JSON.stringify(allResponses));
        window.location.href = "./result.html";


    } else {
        allResponses.push(...tmpPreviousReponse);
        allResponsesId.push(...tmpPreviousReponse.map((item) => {
            return parseInt(item.questionid, 10);
        }))
        console.log("allResponses print here...===>", allResponses);
        let lastElement = allResponses[allResponses.length - 1];

        if (lastElement.response == "true") {
            console.log('CORRECT ANSWER');
            const result = Questions.filter((item) => {
                return allResponsesId.indexOf(item.id) === -1;

            });
            const finalResult = result.find((item) => {
                if (lastElement.type == "easy") {
                    return item.type == "medium";
                } else if (lastElement.type == "medium") {
                    return item.type == "hard";
                }
                else if (lastElement.type == "hard") {
                    return item.type == "hard";
                }
            })
            console.log("remaining question id print here====>", result);
            console.log("final next question print here===>", finalResult);
            clearButtonStyle();
            iterate(finalResult.id);
        } else {
            console.log('INCORRECT answer');
            const result = Questions.filter((item) => {
                return allResponsesId.indexOf(item.id) === -1;
            }).find((item) => {
                if (lastElement.type == "easy") {
                    return item.type == "easy";
                } else if (lastElement.type == "medium") {
                    return item.type == "easy";
                }
                else if (lastElement.type == "hard") {
                    return item.type == "medium";
                }
            })
            console.log("remaining question id print here====>", result);
            clearButtonStyle();
            iterate(result.id);
        }

    }

    // if (id < 5) {
    //     id++;
    //     iterate(id);
    //     console.log(id);
    // }
});

function clearButtonStyle() {
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
}