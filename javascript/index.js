import { data } from "./data.js"

// get svg template
const template = document.querySelector("template")
const icon = template.content.querySelector("svg")

//add question box for each question/answer pair from data
data.forEach(item => {
    let container = document.createElement("div");
    container.classList.add("question-box");
    let question = document.createElement("p");
    question.classList.add("question");;
    question.textContent = item.question;
    let answer = document.createElement("p");
    answer.classList.add("answer", "hide");
    answer.textContent = item.answer;
    let newIcon = document.importNode(icon, true);
    container.append(question, newIcon, answer);
    document.getElementById("questions").append(container);

})

const questionDivs = document.querySelectorAll(".question-box");


for (let i = 0; i < questionDivs.length; i++){
    questionDivs[i].addEventListener("click", (e) => {

        if(e.target == questionDivs[i]){
            let answer = e.target.querySelector(".answer");
            answer.classList.toggle("hide");
            let question = e.target.querySelector(".question");
            question.classList.toggle('bold');
        }else{
            e.target.parentElement.querySelector(".answer")
            .classList.toggle("hide");
            e.target.parentElement.querySelector(".question")
            .classList.toggle("bold");
        }
        return;
    })


}
