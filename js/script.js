const password = document.getElementById('password')
const password_toggle = document.getElementById('password-toggle')

function passwordToggle() {
    if( password.type === 'password'){
        password.type = 'text'
        password_toggle.classList.remove("fa-eye-slash")
        password_toggle.classList.add("fa-eye")
    }else{
        password.type = 'password'
        password_toggle.classList.remove('fa-eye')
        password_toggle.classList.add('fa-eye-slash')
    }
}