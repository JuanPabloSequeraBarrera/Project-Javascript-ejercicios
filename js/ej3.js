let peso;
let altura;
let imc;
while (true){
    peso = prompt('Digite su peso en KG')
    if (!isNaN(peso)){
        altura = prompt('Digite su altura en M');
        if (!isNaN(altura)){
            imc = peso /(altura*altura);
           if (imc < 18.5 ){
            alert('Bajo de peso con un IMC de ' + imc);
            break; 
           }
           else if( imc >18.6 && imc<24.9){
            alert('Su estado es normla con un IMC de' + imc);
            break;
           }
           else if(imc == 25 && imc < 29.9){
            alert('SU estado es sobrepeso con un imc de' + imc);
            break;
           } 
           else{
            alert('Su estado es de obesidad con un imc de ' + imc);
            break;
           }

        }else{
            alert('Valor no valido');
        }
    }else{
        alert('Ingrese un peso valido');
    }
}