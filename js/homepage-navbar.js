const $template = document.createElement('template');
$template.innerHTML = `
        <div class="nav">
            <div class="bruno-pizza">
                <a class="homepage" href="./index.html"><h1>Bruno's Pizza</h1></a>
            </div>
            <div class="nav-section">
                <a href="#home" class="nav-section-item">Home</a>
                <a href="#menu" class="nav-section-item">Menu</a>
                <a href="#delivery" class="nav-section-item">Delivery</a>
                <a href="#about" class="nav-section-item">About</a>
                <a href="#contact" class="nav-section-item">Contact</a>
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
export default class HomepageNavbar extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}
window.customElements.define('my-homepage-navbar' , HomepageNavbar);