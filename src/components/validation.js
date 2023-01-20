//let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validation = (userData) =>{
    let errors ={}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email no es valido"
    }
    if(!userData.username){
        errors.username = "Este campo no debe estar vacio"
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede ser mayor a 35 caracteres"
    }
    if (!userData.password.match(/\d/)) {
        errors.password = "La contraseña debe tener al menos 1 numero"
    }
    if(userData.password.length < 6 || userData.password.length >10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors;


}

export default validation