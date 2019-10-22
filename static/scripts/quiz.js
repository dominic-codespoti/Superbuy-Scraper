/**
* Author: Dominic Codespoti
* Target: quiz.html
* Purpose: Regulate quiz
* Created: 4/24/2018
* Last updated: 4/25/2018 
* Credits: N/A
*/
"use strict";
//Main function, checks all validation and answers
function checkAnswers(){

	var errMsg = "";
	var result = true;
	var userID=document.getElementById("UserID");
	var firstName=document.getElementById("UserGivenName");
	var lastName=document.getElementById("UserSurname");
	var rubyCreationDate1=document.getElementById("RubyCreationDate1").checked;
	var rubyCreationDate2=document.getElementById("RubyCreationDate2").checked;
	var rubyCreationDate3=document.getElementById("RubyCreationDate3").checked;
	var rubyCreator1=document.getElementById("RubyCreator1").selected;
	var rubyCreator2=document.getElementById("RubyCreator2").selected;
	var rubyCreator3=document.getElementById("RubyCreator3").selected;
	var rubyCreator4=document.getElementById("RubyCreator4").selected;
	var possibleSite1=document.getElementById("PossibleSite1").checked;
	var possibleSite2=document.getElementById("PossibleSite2").checked;
	var possibleSite3=document.getElementById("PossibleSite3").checked;
	var possibleSite4=document.getElementById("PossibleSite4").checked;
	var possibleSite5=document.getElementById("PossibleSite5").checked;
	var rubyLanguage=document.getElementById("RubyLanguage").value;
	var rubyColor=document.getElementById("RubyColor");
	var attempts = localStorage.getItem('SavedAttempts')
	var mark = 0;

	if(localStorage.SavedAttempts == 3){
	alert("Too many attempts!");
    result = false;
    }	

	if(
    possibleSite1 == false &&
    possibleSite2 == false &&
    possibleSite3 == false &&
    possibleSite4 == false &&
    possibleSite5 == false){
        errMsg += "Select any check box!\n";
        result = false;
    }

    if(
    rubyCreationDate1 == false &&
    rubyCreationDate2 == false &&
    rubyCreationDate3 == false){
        errMsg += "Select any radio button!\n";
        result = false;
    }

    if(
    rubyCreator1 == false &&
    rubyCreator2 == false &&
    rubyCreator3 == false &&
    rubyCreator4 == false){
        errMsg += "Select a drop down object!\n";
        result = false;
    }
	
    if(rubyLanguage.value == ""){
		errMsg += "Enter a value into the text box!\n";
        result = false;
	}

	if(rubyCreationDate3 == true){
		mark += 2;
	}

	if(rubyCreator1 == true){
		mark += 2;
	}

	if(possibleSite1 == true){
		mark += 2;
	}

	if(possibleSite4 == true){
		mark += 2;
	}

	if(possibleSite5 == true){
		mark += 2;
	}

	if(rubyLanguage.includes("No")){
		mark += 1;
	}

	if(rubyColor.value=="#ff0000"){
		mark += 1;
	}	

	if (errMsg != ""){
    alert(errMsg);
  	}

  	if (attempts === null) {
	attempts = 0;
	}

	attempts++;  

  	if (result == true) {
    storeQuiz(userID, firstName, lastName, mark, attempts);
	}

	if(mark == 0){
	alert("Error: Score to low! Try some different answers!");
    result = false;
    }

    return result;

}
//Function that stores user inputted data to be read in other pages
function storeQuiz(userID, firstName, lastName, mark, attempts) {
	localStorage.setItem("SavedAttempts", attempts);
	localStorage.setItem("SavedUserID", userID.value);
	localStorage.setItem("SavedFirstName", firstName.value);
	localStorage.setItem("SavedLastName", lastName.value);
	localStorage.setItem("SavedMark", mark);
}

function init() {
	var submitQuiz = document.getElementById("quizform");
	submitQuiz.onsubmit = checkAnswers;  
}

window.onload = init;