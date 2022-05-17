const $createTopicBtn = document.querySelector("#createtopicbtn");
const $sendTopicBtn = document.querySelector("#sendtopicbtn");
const $createNewTopicBtn = document.querySelector("#createnewtopicbtn");
const $responses = document.querySelectorAll(".topicresponse");
const $createTopicDiv = document.querySelector("#createtopic");
const $sendTopicDiv = document.querySelector("#sendtopic");
const $createNewTopicDiv = document.querySelector("#senttopic");
const $showResponsesIcon = document.querySelector("#showResponsesIcon");
const $showMore = document.querySelector("#showmore");
const $hiddenP = document.querySelector("#resumehiddenp");
const $likebuttons = document.querySelector(".likebuttons");

let displayVerify = "none";
let hiddenPDisplay = "none";


function createTopic(){
    $createTopicDiv.style.display = "none";
    $sendTopicDiv.style.display = "flex";
    $createNewTopicDiv.style.display = "none";
}

function sendTopic(){
    $createTopicDiv.style.display = "none";
    $sendTopicDiv.style.display = "none";
    $createNewTopicDiv.style.display = "flex";
}

function createNewTopic(){
    $createTopicDiv.style.display = "flex";
    $sendTopicDiv.style.display = "none";
    $createNewTopicDiv.style.display = "none";
}

function showResponses(){

    if(displayVerify === "none"){
        for(let response of $responses){
            response.style.display = "flex";
        }
        displayVerify = "flex";
    }else if(displayVerify === "flex"){
        for(let response of $responses){
            response.style.display = "none";
        }
        displayVerify = "none"
    }
}

function hiddenP(){
    if(hiddenPDisplay === "none"){
        $hiddenP.style.display = "inline";
        hiddenPDisplay = "inline";
    }else if(hiddenPDisplay === "inline"){
        $hiddenP.style.display = "none";
        hiddenPDisplay = "none";
    }
}

$createTopicBtn.addEventListener("click", createTopic);
$sendTopicBtn.addEventListener("click", sendTopic);
$createNewTopicBtn.addEventListener("click", createNewTopic);
$showResponsesIcon.addEventListener("click", showResponses);
$showMore.addEventListener("click", hiddenP);