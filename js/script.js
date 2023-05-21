const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const createAccountButton = document.getElementById('create_account_button');
const errorMessage = document.getElementById('error_message');
/*
let passwordChecker = function (pass1, pass2) {
    if (pass1 != pass2) {
        console.log('passwords do not match')
    } else if (pass1 == pass2) {
        console.log('passwords match')
    }
*/

createAccountButton.addEventListener('click', () => {
    let p1 = password.value;
    let p2 = confirmPassword.value;
    
    
    console.log(`${p1} ${p2}`)
    if (p1 != p2) {
        console.log('they dont match')
        password.classList.add('error');
        confirmPassword.classList.add('error')
        errorMessage.style.display = 'block';
        
        
    } else {
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
        errorMessage.style.display = 'none'
    }
})



/*
let pass1 = 'hello';

let pass2 = 'hellofuck';

let checker = function(p1, p2) {
    if (p1 != p2) {
        console.log('passwords dont match')
    } else if (p1 == p2) {
        console.log('passwords match')
    }
}

checker(pass1, pass2);
*/



