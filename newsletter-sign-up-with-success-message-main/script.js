document.addEventListener("DOMContentLoaded", function() { 
    const signUpForm = document.getElementById("signForm"); 
    const errorMessage = document.getElementById("errorMSG");
    const successMessage = document.getElementById("registered");
    const emailInput = document.getElementById("email");
    const userEmailDisplay = document.querySelector(".userReg");
    const dismissButton = document.querySelector(".closeBTN");
    const subscribeButton = document.querySelector("button[type='submit']");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        const emailtxtBox = emailInput.value.trim();

        if (validateEmail(emailtxtBox)) {
            userEmailDisplay.innerText = emailtxtBox;
            signUpForm.classList.add("hidden");
            successMessage.classList.remove("hidden"); 
            emailInput.style.border = "1px solid #ddd"; 
            errorMessage.innerText = "";
        } else {
            errorMessage.innerText = "Valid email required";
            emailInput.style.border = "1px solid hsl(4, 100%, 67%)"; 
        }
    });

    dismissButton.addEventListener("click", function() {
        successMessage.classList.add("hidden"); 
        signUpForm.classList.remove("hidden"); 
        emailInput.value = "";
        errorMessage.innerText = ""; 
        emailInput.style.border = "1px solid #ddd";
    });

});
