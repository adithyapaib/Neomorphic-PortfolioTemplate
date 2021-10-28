
var typed = new Typed("#typed", {
    strings: ['Programmer', 'Engineer', 'Gamer ', 'Designer'],
    typeSpeed: 0.5,
    smartBackspace: true,
    backSpeed: 0.1,
    loop: true,
    showCursor: false,
};

new WOW().init();


const btnScrollToTop = document.querySelector("#btnScrollToTop");
                                    btnScrollToTop.addEventListener("click", function () {
                                        window.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth"
                                        });
                                    });
                                    

                                    var typed = new Typed("#typed", {
                                        strings: ['Programmer', 'Engineer', 'Gamer ', 'Designer'],
                                        typeSpeed: 0.5,
                                        smartBackspace: true,
                                        backSpeed: 0.1,
                                        loop: true,
                                        showCursor: false,
                                    }


                                    const btnScrollToTop = document.querySelector("#btnScrollToTop");
                                        btnScrollToTop.addEventListener("click", function () {
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth"
                                            });
                                        });


var typed = new Typed("#typed", {
    strings: ['Programmer', 'Engineer', 'Gamer ', 'Designer'],
    typeSpeed: 0.5,
    smartBackspace: true,
    backSpeed: 0.1,
    oop: true,
    showCursor: false,
}); 


const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function (){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
    });
});


new WOW().init();
const forScroll = document.getElementById('btnScrollToTop')

forScroll.addEventListener('click', () => {
				window.scrollTo({
					top: 0, 
					left : 0, 
					behavior : "smooth"
    })
})


            const contactBtn = document.querySelector("#contact-btn");
            const email = document.querySelector("#email");
            const name = document.querySelector("#name");
            const number = document.querySelector("#number");
            const form = document.querySelector("#contact-form");
            function validateEmail()
            {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email.value);
            }

            function validatePhone()
            {
                const re = /^[\+]?[(]?[1-9]{1}[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                return re.test(number.value);
            }
            function validateName()
            {
                return (name.value.length >= 3 && name.value.length <= 40);
            }
            contactBtn.addEventListener("click", (e) =>
            {
                e.preventDefault();
                if (email.value === "" || name.value === "" || number.value === "")
                {
                    alert("Please fill all the details!!");
                }
                else if (!validateEmail())
                {
                    alert("Email is invalid! Please enter a valid email")
                }
                else if (!validateName())
                {
                    alert("Name should be between 3 and 40 characters!")
                }

                else if (!validatePhone())
                {
                    alert("Phone number is invalid!")
                }

                else
                {
                    alert("Your details are successfully submitted!!");
                    email.value = "";
                    name.value = "";
                    number.value = "";
                }
            });