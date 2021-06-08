export default function PhoneNumberCheck(){
    if (document.getElementById('phonenumber').value=="") document.getElementById('phonenumber-warning').style.display = "block"; else document.getElementById('phonenumber-warning').style.display = "none";
}