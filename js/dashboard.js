import {loadStudent, showRowsTablePayment} from "./components/formPaymentDetails.js";

// Creacion de variables con selector al HTML por ID
const add__paid = document.querySelector("#add__paid");
const dialog__add_paid = document.querySelector("#dialog__add_paid");

// Evento para cargar tabla al abrir pagina
addEventListener("DOMContentLoaded", (e)=>{
    const DB = loadStudent();
    showRowsTablePayment(DB);
})
 //Crear evento de escucha para abrir cuadro de dialogo para adicionar un pago
 add__paid.addEventListener("click", ()=>{
    dialog__add_paid.showModal();
})

