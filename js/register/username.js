export default function UserCheck(){
    if (document.getElementById('username').value=="") document.getElementById('username-warning').style.display = "block"; else document.getElementById('username-warning').style.display = "none";
}