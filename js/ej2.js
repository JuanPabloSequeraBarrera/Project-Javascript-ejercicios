let edad;
let ingresos;
while (true){
    edad = prompt("Ingrese su edad");
    if (!isNaN(edad)){
        ingresos = prompt("Ingrese sus ingresos");
        if (!isNaN(ingresos)){
            if ((edad >= 18) && (ingresos >= 1000)){
                let operacion = (ingresos*0.4);
                let mensaje = "Su valor a pagar de impuestos netos es " + operacion;
                alert(mensaje);
                break;
            }else{
                alert('No debe pagar impuestos')
                break;
            }
        }else{
            alert('Ingrese un valor valido para los ingresos');
        }
    }else{
        alert('Ingrese una edad valida');
    }
}
