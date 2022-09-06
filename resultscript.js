let result = localStorage.getItem("result");
let finalResult = JSON.parse(result);
let totalscore = 0;
let userscore = 0;
for (let i = 0; i < finalResult.length; i++) {
    totalscore = totalscore + parseInt(finalResult[i].score, 10);
    if (finalResult[i].response == "true") {
        userscore = userscore + parseInt(finalResult[i].score, 10);
    }
}
const totalResult = document.getElementById('total_score');
totalResult.innerHTML = totalscore;
const userResult = document.getElementById('user_score');
userResult.innerHTML = userscore;


console.log("result print here===>", finalResult);
let str = "<table cellpadding='5' cellspacing='5'> <th> Question ID</th><th>Question Type</th><th>Question Response</th><th>Question Score</th>";
for (let i = 0; i < finalResult.length; i++) {
    str += "<tr><td>" + finalResult[i].questionid + "</td><td>" + finalResult[i].type + "</td><td>" + finalResult[i].response + "</td><td>" + finalResult[i].score + "</td></tr>";
}
str += "</table>"
console.log("str ptint here...", str);
const resultdiv = document.getElementById('final_result');
resultdiv.innerHTML = str;