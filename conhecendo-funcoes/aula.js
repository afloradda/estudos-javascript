// Funções são trechos de códigos os quais podem ser instanciados a qualquer momento

// Como declarar uma função:

function teste() {
    console.log("teste");
}

/* Uma vez que a função é criada podemos chamar ela de diversas forma,
   sendo uma delas: nomeDaFuncao();
*/

teste();

/* Durante a declaração de cada função podemos adicionar parâmetros,
   os quais serão necessários para instanciar a mesma.
*/

function sayMyName(name){
    console.log("Your name: " + name);
}

sayMyName("Ana");

/* Em funções de operação usamos return para devolver um valor */

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/* Outra forma de dinamizar uma função e adicionado a ela  */

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));

/* Podemos organizar nossas funções numa pseudo hierarquia,
   onde teremos uma função main (principal) que usára/instanciará as demais.
   Sendo assim, principais e auxiliares. 
 */

function calcularJuros(){

}

function main(){
    console.log("Função principal");
    calcularJuros();
}

main();

/* No JavaScript as funções são como se fossem objetos,
   assim podemos manipular como se fossem valores.
*/

main = function(){
    console.log(1);
}

main();