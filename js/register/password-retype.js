export default function PasswordRetypeCheck(){
    let x = document.getElementById('password-retype').value;
    if (x!= document.getElementById('password').value) document.getElementById('password-retype-warning').style.display = "block"; else document.getElementById('password-retype-warning').style.display = "none";
}