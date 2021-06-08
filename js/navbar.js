const $template = document.createElement('template');
$template.innerHTML = `
        <div class="nav">
            <div class="bruno-pizza">
                <a class="homepage" href="./index.html"><h1>Bruno's Pizza</h1></a>
            </div>
            <ul class="nav-option-for-user">
                <a class="register" href="./register.html">
                    <i class="far fa-registered"></i>
                    <p class="nav-item">Register</p>
                </a>
                <a href="./order.html" class="order">
                    <i class=" fas fa-shopping-basket"></i>
                    <p class="nav-item">Order</p>
                </a>
            </ul>
        </div>
`;
export default class Navbar extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}
window.customElements.define('my-navbar' , Navbar);