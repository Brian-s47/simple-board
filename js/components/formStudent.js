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
        imgStudent.src = "#"
        imgStudent.alt = "student";
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
        tr.append(tdImage, tdName, tdEmail, tdPhone, tdEnrollNumber, tdDate_of_admission);
        table__student.append(tr);
    }
    // let plantilla = "";
    // for (let i = 0; i < DB.length; i++) {
    //     plantilla += `
    //         <tr>
    //             <td><img src="#" alt="student"></td>
    //             <td>Karthi</td>
    //             <td>karthi@gmmail.com</td>
    //             <td>7305477760</td>
    //             <td>1234567305477760</td>
    //             <td>08-Dec, 2021</td>
    //             <td class="td__actions">
    //                 <span class="span__edit">✏️</span>
    //                 <span class="span__delete">🗑️</span>
    //             </td>
    //         </tr>
    //     `;
    // }
    // console.log(plantilla);
}