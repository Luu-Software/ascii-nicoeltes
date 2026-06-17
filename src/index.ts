import { preguntar } from './lib/consola.ts';




function repetirLetra(letra: string, cantidad: number): string {
  let texto:string="";
let contador:number=0
while(contador<cantidad){
texto= texto + letra;
}}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

// COMPLETAR
  while (tamaño>0){
console.log(repetirLetra(caracter,tamaño))
tamaño=tamaño-1


  }
  
