import {enableFromStudentToEdit, enableFromStudentToDelete} from "./handler.js";
// Traer los datos del local storage validando de que si existe los devuelva en formato JSON y si no existe crear un objeto vacio en el local storage, y lo retorna guardado en DB
export const loadStudent = ()=>{
    const DB = (localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : [];
    return DB;
}
//
export const save = (data)=>{
    const DB = loadStudent();
    DB.push(data); // Agregar el nuevo dato proporcionado por DB al "data"
    showRowsTable([data]);
    localStorage.setItem("students", JSON.stringify(DB));
    return {status: 201, message: `El estudiante ${data.name} fue registrado exitosamente.`}
}
export const edit = (data)=>{
    const DB = loadStudent(); // [{name: "Miguel"},{name "Juan"}]
    const {id} = data;  // {id: 1, name:"JUAN"} - const id = 1
    delete data.id; // {name:"JUAN"}
    DB[id] = data; // {name "Juan"} = {name:"JUAN"}
    localStorage.setItem("students", JSON.stringify(DB));
    const row = table__student.querySelectorAll("tr")[id];
    row.children[1].textContent = data.name;
    row.children[2].textContent = data.email;
    row.children[3].textContent = data.phone;
    row.children[4].textContent = data.enroll_number;
}
// Tomar los datos del formulario convertilos a un formato de objeto y cambiar el tipo de variavble de string a numero y fecha segun correcponde
export const transformInputFormulary =  (e)=>{
    const data = Object.fromEntries(new FormData(e.target));
    data.phone = Number(data.phone)
    data.enroll_number = Number(data.enroll_number)
    data.date_of_admission = new Date().toISOString();
    return data;
}
export const showRowsTable = (DB)=>{
    for (let i = 0; i < DB.length; i++) {
        const tr = document.createElement("tr");
        const tdImage = document.createElement("td");

        const imgStudent = document.createElement("img");
        imgStudent.src = "../storage/img/photo.png"
        imgStudent.alt = "student";
        imgStudent.id = "photo";
        tdImage.append(imgStudent);

        const tdName = document.createElement("td");
        tdName.textContent = DB[i].name;

        const tdEmail = document.createElement("td");
        tdEmail.textContent = DB[i].email;

        const tdPhone = document.createElement("td");
        tdPhone.textContent = DB[i].phone;

        const tdEnrollNumber = document.createElement("td");
        tdEnrollNumber.textContent = DB[i].enroll_number;

        const tdDate_of_admission = document.createElement("td");
        tdDate_of_admission.textContent = DB[i].date_of_admission;

        const tdActions = document.createElement("td");
        const spanEdit = document.createElement("span");

        const imgPen = document.createElement("img");
        imgPen.src = "../storage/img/pen.png"
        imgPen.alt = "Pen";

        spanEdit.classList.add("span__edit");
        // spanEdit.textContent = imgPen;
        spanEdit.appendChild(imgPen); //Usar appendChild() en este caso es fundamental porque define la relación padre-hijo entre los elementos HTML.
        spanEdit.dataset.id_student = i;
        spanEdit.addEventListener("click", enableFromStudentToEdit)

        const spanDelete = document.createElement("span");
        const imgtrash = document.createElement("img");
        imgtrash.src = "../storage/img/trash.png"
        imgtrash.alt = "trash";

        spanDelete.classList.add("span__delete");
        // spanDelete.textContent = "imgtrash";
        spanDelete.appendChild(imgtrash);//Usar appendChild() en este caso es fundamental porque define la relación padre-hijo entre los elementos HTML.
        spanDelete.dataset.id_student = i;
        spanDelete.dataset.name_student = DB[i].name;
        spanDelete.addEventListener("click", enableFromStudentToDelete)
        //Variables de paid
        const amountPaid = [{
                        payment_schedule : "",
                        bill_number : "0",
                        coin : "INR",
                        value : "",
                        date : ""
        }];
        const balanceAmount = [{
            coin : "INR",
            value : "90,000",
}];
        tdActions.append(spanEdit, spanDelete);
        tr.append(tdImage, tdName, tdEmail, tdPhone, tdEnrollNumber, tdDate_of_admission, tdActions, amountPaid, balanceAmount);
        table__student.append(tr);
    }
    // <tr>
    //   <td><img src="#" alt="student"></td>
    //   <td>Karthi</td>
    //   <td>karthi@gmmail.com</td>
    //   <td>7305477760</td>
    //   <td>1234567305477760</td>
    //   <td>08-Dec, 2021</td>
    //   <td class="td__actions">
    //         <span class="span__edit"><img id="photo" src="../storage/img/pen.png"></span>
    //         <span class="span__delete"><img id="photo" src="../storage/img/trash.png"></span>
    //       </td>
    // </tr>
    //     {
    //        name: "Miguel Angel", 
    //        email: "ma@gmail.com", 
    //        phone: 123456789, 
    //        enroll_number: 3456789,
    //        amount_paid : [
    //                     payment_schedule : "First",
    //                     bill_number : 00012223,
    //                     coin : "INR",
    //                     value : 35,000,
    //                     date : "08-Dec-2021"
    //                  ],
    //        balance_amount : [
    //                 coin : "INR",
    //                 value : 55,000
    //              ],
    //     }
    //  ]
}
