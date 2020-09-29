$(document).ready(function() {

var doc = document.body;
var question = doc.querySelector("#question");
var button = doc.querySelector("#button1");
var items = doc.querySelector("#answersItems");
var subTitle = doc.querySelector(".subtitle");
var score = 0;
var seconds = 60;


console.log(question.textContent);

var ques = ["A very useful tool used during development and debugging for printing content to the debugger is:",
            "String values must be enclosed within ------ when being assigned to variables",
            "Arrays in JavaScript can be used to store....",
            "The condition in an if / else statement is enclosed within...",
            "Commonly used data types DO NOT include:"];

button.addEventListener("click", function () {
    question.textContent = ques[0];
    setInterval(function(){ 
        seconds--;
        doc.querySelector("#time").innerHTML = "Time " + seconds;
    }, 1000);
    createAnswers(Arr);
})

var Arr = ["JavaScript", "terminal / bash", "for loops", "console.log"];
var Arr2 = ["commas", "culy brackets", "quotes", "parenthesis"];
var Arr3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var Arr4 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var Arr5 = ["strings", "booleans", "alerts", "numbers"];
var superArr = [Arr, Arr2, Arr3, Arr4, Arr5];
var quesNext = 0;
var answerNext = 0;


console.log(Arr.length);

//This function generate the answers
function createAnswers(array) {
    button.setAttribute("style", "display: none");
    subTitle.setAttribute("style", "display: none");
    while(items.firstChild) {
        items.removeChild(items.lastChild);
    }

    for (i = 0; i < array.length; i++) {
        var a = array[i];
        var li = document.createElement("button");
        li.className = "btn-primary";
        li.setAttribute("id", "button"+i);
        li.setAttribute("style", "margin: 5px");
        li.textContent = (i + 1) + ". " + a;
        items.appendChild(li);
    }
 
    //This makes the question update

    
    doc.querySelectorAll(".btn-primary").forEach(item => {
        item.addEventListener("click", function (event) {
            quesNext++;
            answerNext++;
            question.textContent = ques[quesNext];
            var x = superArr[answerNext];
            var response = event.target.id;
            createAnswers(x);
            if(quesNext === 1){
                if(response != "button3"){
                    seconds = seconds - 10;
                    console.log(seconds);
                }
            } else if(quesNext === 2){
                if(response != "button2"){
                    seconds = seconds - 10;
                    console.log(seconds);
                }
            } else if(quesNext === 3){
                if(response != "button3"){
                    seconds = seconds - 10;
                    console.log(seconds);
                }
            } else if(quesNext === 4){
                if(response != "button2"){
                    seconds = seconds - 10;
                    console.log(seconds);
                }
            } else if(quesNext === 5){
                if(response != "button2"){
                    seconds = seconds - 10;
                    console.log(seconds);
                }
            }
    
        })
    })
}


});
