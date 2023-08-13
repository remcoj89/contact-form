// Initializing the EmailJs libary
(function() {
    emailjs.init("Youre pulbic key");
})();

//  Getting elements
const form = document.getElementById('contact__form');
const userName = document.getElementById('user_name').value;
const userEmail = document.getElementById('user_email').value;
const userMessage = document.getElementById('user_message').value;
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false

const templateParams = {
    name: userName,
    email: userEmail,
    message: userMessage,
}

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(isValid === false) {
        message.textContent ="Please fil out all the fields";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    } else if(isValid === true) {
        message.textContent ="Your message is being sent";
        message.style.color = 'Orange';
        messageContainer.style.borderColor = 'Orange';
    }
}

 function processFormData(e) {
    e.preventDefault()
    
    // Validating form 
    validateForm();

    // Sending the formdata
    if(isValid === true) {
    emailjs.send('Youre_Email_Service_ID', 'Youre_Template_ID', templateParams)
    .then(function(response){
        message.textContent ="Thank you very much we will reply to you as soon as possible";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        console.log('SUCCES', response.status, response.text);
    }, function(error){
        console.log("FAILED", error);
    })
    }
 }
 
 //  Add eventlisteners
form.addEventListener('submit', processFormData);
   

