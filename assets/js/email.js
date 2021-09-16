/**
 * Sends message from customers using information from the contact form using 
 *    EmailJs functionality.
 * @param {object} contactForm containing form data.
 * @returns {boolean} blocks from loading a new page.
 */

function sendMail(contactForm) {
    emailjs.send("service_xgft8wg", "lumiere", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "from_contact": contactForm.phone.value,
            "message": contactForm.message.value,
        })
        .then(
            function (response) {
                document.getElementById("contactForm").reset();
                showModal();
                document.getElementById("modalText").innerHTML =
                    "Thank you for your message! <br> We will get back to you as soon as possible.";
            },
            function (error) {
                showModal();
                document.getElementById("modalText").innerHTML =
                    "Something went wrong! Please try again.";
            }
        );
    return false; 
}

/**
 * Shows modal when submitting contact form and adds click function to modal
 *     button to be able to close modal.
 */
function showModal() {
    document.getElementById("modal-background").style.display = "block";
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("modal-button").addEventListener("click", function () {
        document.getElementById("modal-background").style.display = "none";
    });
});