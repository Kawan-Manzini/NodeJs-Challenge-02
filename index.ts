

console.log('Desafio 002 senhoras!');


 type newUbuntus = {
  name: string,
  sobrenome: string
  idade: number,
  peso: number,
  altura: number,
  isDev: boolean
}



const Ubuntu1: newUbuntus = {
  name: 'kawan',
  sobrenome: 'silva',
  idade: 17,
  peso: 85,
  altura: 1.75  ,
  isDev: true
}
const Ubuntu2: newUbuntus = {
  name: 'Luan',
  sobrenome: 'costa',
  idade: 20,
  peso: 85,
  altura: 1.85,
  isDev: true
}
const Ubuntu3: newUbuntus = {
  name: 'Lucas',
  sobrenome: 'silva',
  idade: 19,
  peso: 60,
  altura: 1.90,
  isDev: true
}


//R01
const sum = Ubuntu1.idade + Ubuntu2.idade + Ubuntu3.idade;
console.log(sum )
console.log('---->');

//R02
let ubuntuNames:string[] = [Ubuntu1.name, Ubuntu2.name, Ubuntu3.name];
console.log(`Os novos ubuntus são ${ubuntuNames}`);
console.log('---->');

//R03
function calculaImc(this:any, altura:any, peso:any){

  let imc = peso / altura**2;
  

  let texto = ', Classificação:';

  if( imc < 18.5){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Abaixo do peso`);
  }else if( imc  >= 18.5 && imc <=24.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} peso Normal`);
  }else if( imc >= 25 && imc <=29.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Sobre peso`);
  }else if( imc >= 30 && imc <=34.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 1`);
  }else if(imc >= 35 && imc <=39.9){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 2`);
  }else if(imc >=40){
    console.log(`Seu imc é: ${imc.toFixed(2)} ${texto} Obesidade Grau 3 ou Mórbida`);
}
}

console.log(`olá ${Ubuntu1.name}`)
console.log(calculaImc(Ubuntu1.altura, Ubuntu1.peso));

console.log(`olá ${Ubuntu2.name}`)
console.log(calculaImc(Ubuntu2.altura, Ubuntu2.peso));

console.log(`olá ${Ubuntu3.name}`)
console.log(calculaImc(Ubuntu3.altura, Ubuntu3.peso));
console.log('---->');

//R04
const arr = [Ubuntu1.isDev, Ubuntu2.isDev, Ubuntu3.isDev];
const count = arr.filter((value) => value).length;

console.log(`existem ${count} devs nessa equipe!`);
console.log('---->');

//R05
function Silva(sobrenome: string){
  if(sobrenome == 'silva'){ return true;}

  else
  return false;
}

const arr2 = [Silva(Ubuntu1.sobrenome),Silva( Ubuntu2.sobrenome),Silva(Ubuntu3.sobrenome)];
const count2 = arr2.filter((value2) => value2).length;

console.log(`temos ${count2} Ubuntus com sobrenome Silva!`);