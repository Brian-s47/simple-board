// import {save, transformInputFormulary, loadStudent, showRowsTable} from "./formPaymentDetails.js";

const dialog__close = document.querySelector("#dialog__close")
const add__paid = document.querySelector("#add__paid");
const dialog__add_paid = document.querySelector("#dialog__add_paid");



add__paid.addEventListener("click", ()=>{
    dialog__add_paid.showModal();
})

dialog__close.addEventListener("click", ()=> dialog__add_paid.close());








// // Evento para cargar tabla al abrir pagina
// addEventListener("DOMContentLoaded", (e)=>{
//     const DB = loadStudent();
//     showRowsTablePayment(DB);
// })
//  //Crear evento de escucha para abrir cuadro de dialogo para adicionar un pago
//  add__paid.addEventListener("click", ()=>{
//     dialog__add_paid.showModal();
// })

// dialog__close.addEventListener("click", ()=> dialog__add_paid.close());


