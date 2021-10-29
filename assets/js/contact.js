var typed = new Typed("#typed", {
                        strings: ['Programmer', 'Engineer', 'Gamer ', 'Designer'],
                        typeSpeed: 0.5,
                        smartBackspace: true,
                        backSpeed: 0.1,
                        loop: true,
                        showCursor: false,
                    });

new WOW().init();

                    const btnScrollToTop = document.querySelector("#btnScrollToTop");
                    btnScrollToTop.addEventListener("click", function() {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        });
                    });

                        const contactBtn = document.querySelector("#contact-btn");
                        const email = document.querySelector("#email");
                        const name = document.querySelector("#name");
                        const number = document.querySelector("#number");
                        const form = document.querySelector("#contact-form");

                        contactBtn.addEventListener("click", (e) => {
                            e.preventDefault();
                            if(email.value === "" || name.value === "" || number.value === ""){
                                alert("Please fill all the details!!");
                            }
                            else if(form.checkValidity()){
                                alert("Your details are successfully submitted!!");
                                email.value = "";
                                name.value = "";
                                number.value = "";
                            }
                            else{
                                alert("Please see that your mail and phone number are correct!!");
                            }
                        });
          new WOW().init();
