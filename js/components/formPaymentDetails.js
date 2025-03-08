export const loadStudent = ()=>{
    const DB = (localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : [];
    return DB;
}
// Buscar estudiande devolver datos si lo encuentra o error si no lo encuentra
export const searchStudent = (estudent)=>{
    const DB = loadStudent();
    if 
}

export const showRowsTablePayment = (DB) =>{
    for (let i = 0; i < DB.length; i++) {
        const tr = document.createElement("tr");
        // <tr>
        const tdName = document.createElement("td");
        tdName.textContent = DB[i].name;
        // <td>Karthi</td>
        const tdpaymentSchedule = document.createElement("td");
        tdpaymentSchedule.textContent = DB[i].payment_schedule;
        // <td>First</td>
        const tdbillNumber = document.createElement("td");
        tdbillNumber.textContent = DB[i].bill_number;
        // <td>00012223</td>
        const tdamount_paid = document.createElement("td");
        const spanCoinAmount = document.createElement("span");
        spanCoinAmount.textContent = DB[i].amount_paid.coin;
        tdamount_paid.textContent = DB[i].amount_paid.value;
        //<td><span>INR</span>35,000</td>
        const tdbalance_amount = document.createElement("td");
        const spanCoinBalance = document.createElement("span");
        spanCoinBalance.textContent = DB[i].balance_amount.coin;
        tdamount_paid.textContent = DB[i].balance_amount.value;
        //<td><span>INR</span>55,000</td>
        const tdDatePaid = document.createElement("td");
        tdDatePaid.textContent = DB[i].amount_paid.date;
        //   <td>08-Dec, 2021</td>
        const spanEye = document.createElement("span");
        const imgEye = document.createElement("img");
        imgEye.src = "../storage/img/eye.png"
        imgEye.alt = "eye";
        //<td><img src="../storage/img/eye.png"></td>
        spanEye.classList.add("span__eye");
        spanEye.appendChild(imgEye);//Usar appendChild() en este caso es fundamental porque define la relación padre-hijo entre los elementos HTML.

        // tdActions.append(); Para eventos de la imagen de EYE
        tr.append( tdName, tdpaymentSchedule, tdbillNumber, tdamount_paid, tdDate_of_admission, tdActions);
        table__student.append(tr);
    }
    // <tr>
    //   <td>Karthi</td>
    //   <td>First</td>
    //   <td>00012223</td>
    //   <td><span>INR</span>35,000</td>
    //   <td><span>INR</span>55,000</td>
    //   <td class="td__action">
    //         <span class="span__edit"><img id="photo" src="../storage/img/eye.png"></span>
    //       </td>
    //   <td>08-Dec, 2021</td>
    //   <td><img src="../storage/img/eye.png"></td>
    // </tr>
    // [
    //     {
    //        name: "Miguel Angel", 
    //        email: "ma@gmail.com", 
    //        phone: 123456789, 
    //        enroll_number: 3456789,
    //        payment_schedule : "First",
    //        bill_number : 00012223,
    //        amount_paid : [
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