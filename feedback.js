let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let emailInput = document.querySelector("input[type='email']").value;
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (gmailPattern.test(emailInput)) {
        alert("Thank you for sharing your feedback! We truly appreciate your input and will use it to improve our services.");
    } else {
        alert("Please enter a valid Gmail address.");
    }
});