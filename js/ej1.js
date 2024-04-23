let password = prompt('Ingrese su contraseña');
function contrasenavalida(password){
    if (password === '2Fj(jjbFsuj)' || password === 'eoZiugBfEtg9'){
        console.log('True')
    }
    else{
        console.log('False')
    }
}

contrasenavalida(password);