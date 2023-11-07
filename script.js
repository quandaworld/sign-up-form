const pw_input = document.getElementById('password');
const cpw_input = document.getElementById('confirm-password');
const error_div = document.getElementById('error');

function checkPassword() {
  if (pw_input.value !== cpw_input.value) {
    error_div.textContent = 'Passwords do not match';
    pw_input.classList.add('error');
    cpw_input.classList.add('error');
  } else {
    error_div.textContent = '';
    pw_input.classList.remove('error');
    cpw_input.classList.remove('error');
  } 
}

pw_input.addEventListener('input', checkPassword);
cpw_input.addEventListener('input', checkPassword);


