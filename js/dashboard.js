import {finAllStudent} from "./students.js";
import {finAllCourse} from "./course.js";
import {finAllPayments} from "./payments.js";

const students = document.querySelector("#students > strong")
const course = document.querySelector("#course > strong")
const payment = document.querySelector("#payments > strong")

students.innerHTML = finAllStudent()
course.innerHTML = finAllCourse()

const money = JSON.parse(finAllPayments());
payment.dataset.format = money.format;
payment.innerHTML = money.total;
