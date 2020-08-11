const invalid = "#973535"
const valid = "#35c20e";

function checkName() {
    const name = document.getElementById("nameInput").value;
    const nameInput = document.getElementById("nameInput");
    if (name === "" || name === null) {
        nameInput.style.borderColor = "#f08181";
        document.getElementById("nameError").innerHTML = "Please tell me your name";
    } else if (name !== "") {
        document.getElementById("userName").innerHTML = name + "!";
        document.getElementById("introduction").classList.add("fadeout");
        document.getElementById("questions").classList.add("fadein");
        document.getElementById("questions").style.opacity = "100%";
    }
}

function checkAge() {
    const age = document.getElementById("ageInput").value;
    if (isNaN(age)) {
        ageInput.style.borderColor = invalid;
        document.getElementById("ageError").innerHTML = "Sorry, this is not a number";
    } else if (age === null || age === "") {
        ageInput.style.borderColor = invalid;
        document.getElementById("ageError").innerHTML = "How old are you...?";
    }
    else {
        ageInput.style.borderColor = valid;
        document.getElementById("ageError").innerHTML = "";
    }
}

function checkJob() {
    const currentJob = document.getElementById("jobInput").value;
    if (currentJob === "" || currentJob === null) {
        jobInput.style.borderColor = invalid;
        document.getElementById("jobError").innerHTML = "Do you have a job?";
    } else {
        jobInput.style.borderColor = valid;
        document.getElementById("jobError").innerHTML = "";
    }
}

function checkDreamJob() {
    const dreamJob = document.getElementById("job2Input").value;
    const currentJob = document.getElementById("jobInput").value;
    if (dreamJob === "" || dreamJob === null) {
        job2Input.style.borderColor = invalid;
        document.getElementById("jobError2").innerHTML = "Do you have dreams?";
    } else if (dreamJob !== currentJob) {
        job2Input.style.borderColor = invalid;
        document.getElementById("jobError2").innerHTML = "Why don't you chase your dreams?";
    } else {
        job2Input.style.borderColor = valid;
        document.getElementById("jobError2").innerHTML = "";
    }
}
var secretStorage = "";
function toggleSecret() {
    let status = false;
    let textInput = document.getElementById("secret").value;
    const button = document.getElementById("hide-button");
    if (button.classList.contains("visible")) {
        secretStorage = textInput;
        button.classList.remove("visible");
        document.getElementById("secret").value = hashString(textInput);
    } else {
        button.classList.add("visible");
        document.getElementById("secret").value = secretStorage;
    }
}

function hashString(input) {
    var hashedText = "";
    for (let i = 0; i < input.length; i++) {
        hashedText += "*";
    }
    return hashedText;
}

function resetForm(){
    const form = document.getElementById("questions-form"); 
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++){
        elements[i].value = "";
        elements[i].style.borderColor = "black";
    }
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("jobError").innerHTML = "";
    document.getElementById("jobError2").innerHTML = "";
}