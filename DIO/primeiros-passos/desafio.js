/* Faça um programa para calcular o valor de uma viagem.
    Você terá 3 variáveis. Sendo elas:
    1- Preço combustível;
    2- Gasto médio de combustível;
    3- Distância em KM da viagem;

   Imprima no console o valor que será gasto para realizar a viagem.

*/

const precoCombustivel = 5.79;
let kmPorLitros = 10;
let distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2));

/* O toFixed recebe como parametro e devolve uma string,
   esses números decimais estão sendo arredondados após a virgula/ponto.
   fractionDigits(2) delimita dois números após o ponto. 
*/
