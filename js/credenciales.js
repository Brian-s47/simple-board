const ENV = async()=>{ // Obtener todos los usuarios del archivo json
    let peticion = await fetch("../environment.json"); // Hacer una solicitud a un archivo JSON
    let data = await peticion.json();// Convertir la respuesta a formato JSON
    return data // Retornar los datos obtenidos del archivo JSON
}
export const users = await ENV(); // Ejecutar la función ENV y almacenar el resultado en 'users'

export const validation = (data)=>{ // validar los usuarios del archivo json segun los datos obtenidos del formulario
    for (let i = 0; i < users.length; i++) {
        if (users[i].USER === data.email) {
            if(users[i].PWD === data.password) {
                const {USER:email_user, ROL:type_user} = users[i];
                return {status:200, email_user, type_user}
            }
            else  return {status: 401, message: "Contraseña incorrecta"};
        }
    }
    return {status: 404, message: "Usuario incorrecto"};
}