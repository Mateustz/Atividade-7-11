/* 
elabore um programa que receba uma lista de receitas, depois receba uma lista de despesas.
ao final, some todas as receitas e depesas, exiba o total a apresente a diferenca ente eles.
*/


var receitas = [];
var despesas = [];
var continuar = "s";
var total = 0;
var i = 0;

while (continuar === "s") {
    var receita = parseFloat(prompt("Digite o valor da receita:"));
    receitas.push(receita);

    continuar = prompt("Deseja continuar adicionando receitas? (s/n):").toLowerCase();
}

continuar = "s";

i = 0

while (continuar === "s") {
    var despesa = parseFloat(prompt("Digite o valor da despesa:"));
    despesas.push(despesa);

    continuar = prompt("Deseja continuar adicionando despesas? (s/n):").toLowerCase();
}

var totalDeReceitas = receitas.reduce((total, receita) => total + receita, 0);
var totalDeDespesas = despesas.reduce((total, despesa) => total + despesa, 0);
var diferenca = totalDeReceitas - totalDeDespesas;

console.log("Total de receitas: R$ " + totalDeReceitas.toFixed(2));
console.log("Total de despesas: R$ " + totalDeDespesas.toFixed(2));
console.log("Diferença: R$ " + diferenca.toFixed(2));
