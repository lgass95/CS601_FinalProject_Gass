//Wait for DOM
window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM is ready");
});

//Clear error messages when 
document.getElementById("resetButton").addEventListener("click", function(){
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    console.log("Reset button clicked");
});

//Clear all fields and set to defaults when page is reloaded
window.addEventListener("load", function(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("firstName").style = "border: 1px solid black";
    document.getElementById("lastName").style = "border: 1px solid black";
    document.getElementById("email").style = "border: 1px solid black";
    document.getElementById("other").checked=true;
    document.getElementById("football").checked=false;
    document.getElementById("basketball").checked=false;
    document.getElementById("baseball").checked=false;
    document.getElementById("hockey").checked=false;
    document.getElementById("soccer").checked=false;
    document.getElementById("tennis").checked=false;
});

//Validate form
function validateForm() {
    let isValid = true; 
        console.log("Validating form...");
    //validate firstName and lastName are only letters and greater than 2 characters
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let firstNameError = document.querySelector("#firstNameError");
    let lastNameError = document.querySelector("#lastNameError");
    let firstNameValid = true;
    let lastNameValid = true; 
    
    //validate firstName
    if (firstName.length < 2) {
        isValid = false;
        firstNameError.innerHTML = "First name must be at least 2 characters.";
        firstNameValid = false;
        console.log("Error: First name must be at least 2 characters.");
        document.getElementById("firstName").style = "border: 2px solid red";
        
    }
    else {
        firstNameError.innerHTML = "";
        document.getElementById("firstName").style = "border: 1px solid black";
    }
    if (firstName.length > 1){
        let patt = new RegExp("[A-Za-z-]+");
        let name = patt.exec(firstName);
        if (name != firstName) {
        isValid = false;
        firstNameError.innerHTML = "Names must only include letters and hyphens.";
        document.getElementById("firstName").style = "border: 2px solid red";
     }
        else {
        firstNameError.innerHTML = "";
        document.getElementById("firstName").style = "border: 1px solid black";
    }
}

    //validate lastName
    if (lastName.length < 2) {
        isValid = false;
        lastNameError.innerHTML = "Last name must be at least 2 characters.";
        lastNameValid = false;
        console.log("Error: Last name must be at least 2 characters.");
        document.getElementById("lastName").style = "border: 2px solid red";
    }
    else {
        lastNameError.innerHTML = "";
        document.getElementById("lastName").style = "border: 1px solid black";
    }

    if (lastName.length > 1){
        let patt = new RegExp("[A-Za-z-]+");
        let name = patt.exec(lastName);
        if (name != lastName) {
        isValid = false;
        lastNameError.innerHTML = "Names must only include letters and hyphens.";
        document.getElementById("lastName").style = "border: 2px solid red";
     }
        else {
            lastNameError.innerHTML = "";
            document.getElementById("lastName").style = "border: 1px solid black";
        }
    }

   
    //declare variables for email
    let email = document.querySelector("#email").value;
    let emailError = document.querySelector("#emailError");
    let emailValid = true;
    let valid = /[^@]+@[^@]+.[^.]/.test(email);

    //validate email
        if (!valid) {
            isValid = false;
            emailError.innerHTML = "This is not a valid email address.";
            emailValid = false;
            console.log("Error: This is not a valid email address.");
            document.getElementById("email").style = "border: 2px solid red";
        }
    // if(email !== 'Jen' && email !== 'Chris' && email !== 'Christian' && email !== 'Josh' && email !== 'Behdad'){
    //     isValid = false;
    //     emailError.innerHTML = "This is not a valid email address.";
    //     emailValid = false;
    //     console.log("Error: This is not a valid email address.");
    //     document.getElementById("email").style = "border: 2px solid red";
    // }
        else {
            emailError.innerHTML = "";
            document.getElementById("email").style = "border: 1px solid black";
        }
        
        if(isValid === true){
            alert("Thanks for reaching out!");
        }
    return isValid;
   
}