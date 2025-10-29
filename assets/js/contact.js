// Contact form validation and submission
const contactBtn = document.querySelector("#contact-btn");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const number = document.querySelector("#number");
const form = document.querySelector("#contact-form");

if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (email.value === "" || name.value === "" || number.value === "") {
            alert("Please fill all the details!!");
        } else if (form.checkValidity()) {
            alert("Your details are successfully submitted!!");
            email.value = "";
            name.value = "";
            number.value = "";
        } else {
            alert("Please see that your mail and phone number are correct!!");
        }
    });
}
