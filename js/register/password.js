export default function PasswordCheck(){
    let x = document.getElementById('password').value;
    if (x.length<8) document.getElementById('password-warning').style.display = "block"; else document.getElementById('password-warning').style.display = "none";
}