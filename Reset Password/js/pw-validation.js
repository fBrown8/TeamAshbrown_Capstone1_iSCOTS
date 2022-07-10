function validatePassword(){
    let password = document.getElementById("password").value;
    let confrmPassword = document.getElementById("confirm-newpw").value;

    console.log(password, confrmPassword);

    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == confrmPassword){
            message.textContent = "Passwords Match"; 
            // message.style.color = "#26D054";
        }
        else{
            message.textContent = "Passwords do not match.";
            // message.style.color = "#EA4335";
        }
    }

    else{
        alert("Password cannot be empty.");
        message.textContent = "";
    }
}