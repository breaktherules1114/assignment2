export default function EmailCheck(){
    let x = document.getElementById('email').value;
    if (x=="") document.getElementById('email-warning').style.display = "block"; else document.getElementById('email-warning').style.display = "none";
    let check = false;
    for(let i=1;i<x.length-1;i++) {
        if(x[i]=='@') check = true;
    }
    if(x[0]=='@'||x[x.length-1]=='@') check = false;
    if(check==false)document.getElementById('email-warning').style.display = "block"; else document.getElementById('email-warning').style.display = "none";
}