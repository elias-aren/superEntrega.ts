function cargarProductos(prod: string[]): void {
  for (let i: number = 0; i < prod.length; i++) {
    prod[i] = String(prompt("ingrese producto"));
  }
}
function cargarPrecios(arreglo: number[]): void {
  for (let i: number = 0; i < arreglo.length; i++) {
    let precio: number = Number(prompt("ingrese el precio de " + productos[i]));
    arreglo[i] = precio;
  }
}
function stockDeProductos(vector: number[]): void {
  for (let i: number = 0; i < vector.length; i++) {
    let cant: number=Number(prompt("ingrese la cantidad de " + productos[i]));
    vector[i] = cant;
  }
}
function subTotalD(precioUnit: number[], stockD: number[]): number {
let subcantidad: number=0;
for (let i: number = 0; i < stockD.length; i++){
subcantidad= (precioUnit[i]*stockD[i])+subcantidad;
}
return subcantidad
}
function mostrarticket():void{
for (let i: number = 0; i < precioUnit.length; i++){
console.log("producto" + productos[i]);
console.log("a precio $" + precioUnit[i]);
console.log("cantidad x" + stockD[i]);
}
console.log(" el total de su compra es $");
}
let cantDeProductos: number = Number(prompt("ingrese cantidad"));
let productos: string[] = new Array(cantDeProductos);
let precioUnit: number[] = new Array(cantDeProductos);
let stockD: number[] = new Array(cantDeProductos);
let total: number=0;
cargarProductos(productos);
cargarPrecios(precioUnit);
stockDeProductos(stockD);
mostrarticket();
total= subTotalD(precioUnit,stockD);
console.log(total);
if(total<=1000){
console.log("gracias por su compra");
}else{
if((total>1000) && (total<2000)){
console.log("felicidades, usted participa por el sorteo de un tv led");
}else{
if((total>2000) && (total<3000)){
console.log("felicidades, usted participa por el sorteo de una moto");
}else{
  if((total>3000){
  console.log("felicidades, usted participa por el sorteo de un okm");
}
}
}
}


