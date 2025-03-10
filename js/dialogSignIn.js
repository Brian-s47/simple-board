const dialog__message = document.querySelector("#dialog__message");

export const dialogMessage = (response)=>{ // segun la respuesta de la validacion muestra el mensaje de erors o redirecion si los datos del formulario son los mismos que en el json
    if(response.status != 200){
        dialog__login.showModal();
        dialog__message.innerHTML = response.message; //se usa para insertar ese mensaje dentro del elemento dialog__message, lo que lo muestra al usuario en el cuadro de diálogo
    }else{
        location.href = "views/dashboard.html" //se utiliza para cambiar la ubicación de la página actual, lo que significa que el navegador será redirigido a la URL proporcionada,
    }
}