/**
* Author: Dominic Codespoti
* Target: quiz.html
* Purpose: Regulate quiz
* Created: 4/24/2018
* Last updated: 4/25/2018 
* Credits: N/A
*/
"use strict";
//Reads and applies data stored in quiz page
function getQuiz() {

    var confirmfirstname = localStorage.getItem("SavedFirstName");
    var confirmsecondname = localStorage.getItem("SavedLastName");
    var confirmID = localStorage.getItem("SavedUserID");
    var confirmmark = localStorage.getItem("SavedMark");
    var confirmattempts = localStorage.getItem("SavedAttempts");

    document.getElementById("confirm_name").textContent = confirmfirstname + " " + confirmsecondname;
    document.getElementById("confirm_id").textContent = confirmID;
    document.getElementById("confirm_mark").textContent = confirmmark + "/12";
    document.getElementById("confirm_attempts").textContent = confirmattempts;
}

function init() {
  getQuiz();
}

window.onload = init;
