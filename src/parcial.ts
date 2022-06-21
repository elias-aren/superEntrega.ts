let v1 : number[]= new Array (32558,36165,34240,39273,34260,21347,20869,21493,23062,31908,30369,30652);
let v2 : number[]= new Array (27520,31480,20453,34823,32942,38477,23756,21413,26699,22045,25625,26855);
let v3 : number[]= new Array (20584,33473,34300,24598,33955,24040,39173,25542,25105,26759,29790,36218);
let v4 : number[]= new Array (27243,38874,21246,30691,24542,39771,31807,31641,20850,29387,37182,28006);
let v5 : number[]= new Array (23334,32687,25217,26844,27033,35244,25702,25781,35525,34874,38842,20562);
function mostrarMaximo(vector: number[]):void{
let auxi:number= vector[0];
let max: number=0;
let indice: number=0;
for(indice=1;indice<vector.length;indice++){
  if(vector[indice]>auxi){
auxi=vector[indice]
max=auxi;
}
}
console.log(max);
}
function mostrarMinimo(vector: number[]):void{
  let aux2:number= vector[0];
  let min: number=0;
  let indice: number=0;
  for(indice=1;indice<vector.length;indice++){
    if(vector[indice]<aux2){
  aux2=vector[indice]
  min=aux2;
  }
  }
  console.log(min);
  }
let vend: number= Number(prompt("ingrese vendedor"));
switch(vend){
  case 1:
  console.log("Camila");
  console.log(mostrarMaximo(v1));
  break;
  case 2:
  console.log("Franco");
  console.log(mostrarMaximo(v2));
  break;
  case 3:
  console.log("Sofia");
  console.log(mostrarMaximo(v3));
  break;
  case 4:
  console.log("Matias");
  console.log(mostrarMaximo(v4));
  break;
  case 5:
  console.log("Agustina");
  console.log(mostrarMaximo(v5));
  break;
          
}
function mostrarSemana(venta: number): number {
return
}