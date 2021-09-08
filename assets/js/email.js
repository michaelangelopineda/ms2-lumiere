
// from Code Institute
function sendMail(contactForm) {
    emailjs.send("service_xgft8wg", "lumiere", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_contact": contactForm.phone.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}