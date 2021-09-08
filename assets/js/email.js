// from Code Institute lesson on emailJS and Frozan website
function sendMail(contactForm) {
    emailjs.send("service_xgft8wg", "lumiere", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_contact": contactForm.phone.value,
            "message": contactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                document.getElementById("contactForm").reset();
                showModal();
                document.getElementById("modalText").innerHTML =
                    "Thank you for your message! <br> We will get back to you as soon as possible.";
            },
            function (error) {
                console.log("FAILED", error);
                showModal();
                document.getElementById("modalText").innerHTML =
                    "Something went wrong! Please try again.";
            }
        );
    return false; // To block from loading a new page
}

/**
 * Shows modal when submitting contact form and adds click function to modal button to be able to close modal.
 */
 function showModal() {
    document.getElementById("modal-background").style.display = "block";
}

document.getElementById("modal-button").addEventListener("click", function () {
    document.getElementById("modal-background").style.display = "none";
});
