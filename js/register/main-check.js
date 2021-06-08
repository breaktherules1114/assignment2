import UserCheck from "./username.js"
import PhoneNumberCheck from "./phonenumber.js"
import EmailCheck from "./email.js"
import PasswordCheck from "./password.js"
import PasswordRetypeCheck from "./password-retype.js"

export default function RegisterCheck() {
    UserCheck();
    PhoneNumberCheck();
    EmailCheck();
    PasswordCheck();
    PasswordRetypeCheck();
}