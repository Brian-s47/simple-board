import { users, validation } from "./credenciales.js";

const form__login = document.querySelector("#form__login");
form__login.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(validation(users, data))
})