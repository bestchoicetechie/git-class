


// about js
let fullNameElement = document.querySelector('#fullName');
let phoneNumberElement = document.querySelector('#phoneNumber');
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let emailCheck = document.querySelector('#emailCheck');
let successful = document.querySelector('#successful');
// console.log(fullNameElement);
let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    let fullNameValue = fullNameElement.value;
    let emailValue = emailElement.value;
    let phoneNumberValue = phoneNumberElement.value;
    let messageValue = messageElement.value;

    if (emailValue.includes('@')) {
        successful.innerHTML = 'Thanks for messaging Us at Best Choice Technologies'
    } else {
        emailCheck.innerHTML = 'Please Enter the valid email';
        return false;
        // emailCheck.innerHTML.style.color: red;
    }

    console.log(fullNameValue);
    console.log(emailValue);
    console.log(phoneNumberValue);
    console.log(messageValue);
    // console.log('Button clicked');
    
})