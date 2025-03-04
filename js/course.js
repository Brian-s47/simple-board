export const finAllCourse = () =>{
    const DB = (localStorage.getItem("course")) ? localStorage.getItem("course") : 0;
    return DB;
}