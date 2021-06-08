export function Delivery(){
    document.getElementById('delivery-address').style.display = "block";
    document.getElementById('submit').style.display = "block";
}
export function Pickup(){
    document.getElementById('delivery-address').style.display = "none";
    document.getElementById('submit').style.display = "none";
}
export function PickupPayment(){
    document.getElementById('creditcard-info').style.display = "none";
}
export function OnlinePayment(){
    document.getElementById("creditcard-info").style.display = "block";
}
export function Visa(){
    document.getElementById('visa-number').style.display = "block";
    document.getElementById('american-express-number').style.display = "none";
    document.getElementById('mastercard-number').style.display = "none";
}
export function MasterCard(){
    document.getElementById('visa-number').style.display = "none";
    document.getElementById('american-express-number').style.display = "none";
    document.getElementById('mastercard-number').style.display = "block";
}
export function AmericanExpress(){
    document.getElementById('visa-number').style.display = "none";
    document.getElementById('american-express-number').style.display = "block";
    document.getElementById('mastercard-number').style.display = "none";
}
export function Submit(){
    if(document.getElementById('delivery-address').value!=""){
        document.getElementById('billing-address').value = document.getElementById('delivery-address').value;
    } else alert('Please insert your Delivery address first')
    
}