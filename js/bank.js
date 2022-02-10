document.getElementById('login-submit').addEventListener('click', function () {
    console.log('button clicked..')
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    const userEmail = emailField.value;
    const userPassword = passwordField.value;

    if (userEmail == 'nahid@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    // console.log('User Email:', userEmail, userPassword);


});


//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    console.log('deposit button clicked');
});