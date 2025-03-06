import {save, edit, transformInputFormulary, loadStudent, showRowsTable} from "./components/formStudent.js";

// Creacion de variables con selector al HTML por ID
const add__student = document.querySelector("#add__student");
const dialog__add_student = document.querySelector("#dialog__add_student");
const dialog__student_edit = document.querySelector("#dialog__student_edit");
const dialog__close = document.querySelector("#dialog__close");
const dialog__close_edit = document.querySelector("#dialog__close_edit");
const form__student = document.querySelector("#form__student");
const form__student_edit = document.querySelector("#form__student_edit");
const table__student = document.querySelector("#table__student");

// showRowsTable(loadStudent());
addEventListener("DOMContentLoaded", (e)=>{
    const DB = loadStudent();
    showRowsTable(DB);
})

add__student.addEventListener("click", ()=>{
    dialog__add_student.showModal();
}) //Crear evento de escucha para abrir cuadro de dialogo para adicionar un estudiante

dialog__close.addEventListener("click", ()=> dialog__add_student.close()); //Crear evento de escucha para cerrar el cuadro de adicionar un estudiante 
dialog__close_edit.addEventListener("click", ()=> dialog__student_edit.close());

form__student.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = transformInputFormulary(e)
    const response = save(data);
    console.log(response);
    form__student.reset();
})
form__student_edit.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = transformInputFormulary(e)
    const response = edit(data);
    console.log(response);
    form__student_edit.reset();
})