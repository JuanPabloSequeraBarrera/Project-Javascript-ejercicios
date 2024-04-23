let arreglo = Array()
function imprimir(){
    arreglo.push(1,'Hola',2,'Mundo'); //push es para agregar elementos a un arreglo, es como un update de python
    arreglo.forEach((item) => console.log(item));
}
imprimir()