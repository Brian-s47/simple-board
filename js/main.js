// Importacion de Modulos 
import {findDataByForm} from "./formSignIn.js";

// Declaracion de Constantes
const form__login = document.querySelector("#form__login");
const dialog__login = document.querySelector("#dialog__login");
const dialog__login_close = document.querySelector("#dialog__login_close");


// Zona de Ejecucion de funciones y modulos
// Creacion de evento de escucha "click" al boton de formularion se ejecuta la funcion findDataByForm
form__login.addEventListener("submit", findDataByForm)
// Creacion de evento de escucha "click" a icono "X" del dialogo lo cierra 
dialog__login_close.addEventListener("click", (e) => dialog__login.close() ) 
