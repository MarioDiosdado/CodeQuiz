$(document).ready(function () {

    //Here we have our global variables
    var doc = document.body;
    var question = doc.querySelector("#question");
    var button = doc.querySelector("#button1");
    var items = doc.querySelector("#answersItems");
    var subTitle = doc.querySelector(".subtitle");
    var container = doc.querySelector(".container");
    var submit = doc.querySelector("#submitButton");
    var initials = doc.querySelector("#name");
    var highscore = doc.querySelector("#highscore");
    var forma = doc.querySelector("#forma");
    var bla = doc.querySelector("#rightWrong");
    var seconds = 60;
    var timer;

    doc.querySelector("#forma").setAttribute("style", "display: none");

    //An array with all questions
    var ques = [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "String values must be enclosed within ------ when being assigned to variables",
        "Arrays in JavaScript can be used to store....",
        "The condition in an if / else statement is enclosed within...",
        "Commonly used data types DO NOT include:"];

    //Here is what happens when start button is clicked
    button.addEventListener("click", function () {
        question.textContent = ques[0];
        //Here the timer is generated
        timer = setInterval(function () {
            seconds--;
            doc.querySelector("#time").innerHTML = "Time " + seconds;
        }, 1000);
        createAnswers(Arr);
    })
    //Here we have the answers on arrays and then array holding all arrays
    var Arr = ["JavaScript", "terminal / bash", "for loops", "console.log"];
    var Arr2 = ["commas", "culy brackets", "quotes", "parenthesis"];
    var Arr3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
    var Arr4 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
    var Arr5 = ["strings", "booleans", "alerts", "numbers"];
    var superArr = [Arr, Arr2, Arr3, Arr4, Arr5];
    var quesNext = 0;
    var answerNext = 0;



    //This function generate the answers
    function createAnswers(array) {
        button.setAttribute("style", "display: none");
        subTitle.setAttribute("style", "display: none");

        // This clears the previous answers
        while (items.firstChild) {
            items.removeChild(items.lastChild);
        }
        //This generate the buttons
        if (quesNext != 5) {

            for (i = 0; i < array.length; i++) {
                var a = array[i];
                var li = document.createElement("button");
                li.className = "btn-primary";
                li.setAttribute("id", "button" + i);
                li.setAttribute("style", "margin: 5px");
                li.textContent = (i + 1) + ". " + a;
                items.appendChild(li);
            }
        } else {
            question.textContent = "All done!"
            subTitle.setAttribute("style", "display: block");
            subTitle.setAttribute("style", "text-align: center");
            subTitle.textContent = "Your final score is: " + seconds;
            doc.querySelector("#forma").setAttribute("style", "display: block");
            clearInterval(timer);


        }
        //This makes the question update and tell us if answers were correct
        doc.querySelectorAll(".btn-primary").forEach(item => {
            item.addEventListener("click", function (event) {
                quesNext++;
                answerNext++;
                question.textContent = ques[quesNext];
                var x = superArr[answerNext];
                var response = event.target.id;
                var bla = doc.querySelector("#result");


                if (quesNext === 1) {
                    if (response != "button3") {
                        seconds = seconds - 10;
                        var hr = document.createElement("hr");
                        hr.setAttribute("id", "hr");
                        container.appendChild(hr);
                        var result = document.createElement("h4");
                        container.appendChild(result);
                        result.setAttribute("id", "rightWrong");
                        result.textContent = "Wrong!"
                    } else {
                        var hr = document.createElement("hr");
                        container.appendChild(hr);
                        var result = document.createElement("h4");
                        container.appendChild(result);
                        result.setAttribute("id", "rightWrong");
                        result.textContent = "Correct!"
                    }
                } else if (quesNext === 2) {
                    if (response != "button2") {
                        seconds = seconds - 10;
                        rightWrong.innerHTML = "";
                        rightWrong.textContent = "Wrong!";
                    } else {
                        rightWrong.textContent = "Correct!";
                    }
                } else if (quesNext === 3) {
                    if (response != "button3") {
                        seconds = seconds - 10;
                        rightWrong.innerHTML = "";
                        rightWrong.textContent = "Wrong!";
                    } else {
                        rightWrong.textContent = "Correct!";
                    }
                } else if (quesNext === 4) {
                    if (response != "button2") {
                        seconds = seconds - 10;
                        rightWrong.innerHTML = "";
                        rightWrong.textContent = "Wrong!";
                    } else {
                        rightWrong.textContent = "Correct!";
                    }
                } else if (quesNext === 5) {
                    if (response != "button2") {
                        seconds = seconds - 10;
                        rightWrong.innerHTML = "";
                        rightWrong.textContent = "Wrong!";
                    } else {
                        rightWrong.textContent = "Correct!";
                    }
                }
                createAnswers(x);
            })
        })
    }

    var storage;
    //This submit the highscore and put it in local storage
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        forma.setAttribute("style", "display: none");
        question.textContent = "Thank you!";
        subTitle.textContent = "";
        doc.querySelector("#rightWrong").innerHTML = "";
        container.removeChild(hr);
        var n = seconds.toString();
        var user = initials.value.trim() + " " + seconds;
        localStorage.setItem("user", user);
        storage = localStorage.getItem("user");
    })
    //This show us the high score
        
        highscore.addEventListener("click", function (event) {
        storage = localStorage.getItem("user");
        event.preventDefault();
        question.textContent = "Highscores";
        button.setAttribute("style", "display: none");
        forma.setAttribute("style", "display: none");
        subTitle.setAttribute("style", "display: none");
        doc.querySelector("#answersItems").setAttribute("style", "display: none");
        doc.querySelector("#rightWrong").innerHTML = "";
        var t = document.createElement("div");
        t.setAttribute("style", "text-align: center");
        t.textContent = "";
        t.textContent = storage;
        container.appendChild(t);
    })

}

);
