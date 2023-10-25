// TESTES COM VAR 
/*
// declaração de variáveis x, y e z
var x = 7;
var y = 8;
var z = x + y;

// print no console
console.log(z);

// declaração dentro de bloco de código
{
	var a = 50;
}

console.log(a);

// redeclaração
{
	var nome = "Juliana";
	var nome = 'Laura';
}

console.log(nome);

*/


// TESTES COM LET
/*
// declaração dentro de bloco de código
{
	let x = 9;
	let y = 6;
	let z = x + y;
	console.log(z)
}

//console.log(z)

// redeclaração (só se em blocos de código diferentes)
{
	let nome = "Juliana";
	// let nome = "Laura";
	console.log(nome);
}
let nome = 'Laura';
console.log(nome);
*/

// TESTES COM CONST
/*
// redeclaração (não pode)
const pi = 3.14159;
// const pi = 3.14;

// alteração da variável (não pode)
// pi = pi + 10;


// TESTE COM OPERADOR ==
console.log(pi == 3);

// TIPOS DE DADOS

const g = 9.8;
let nome = "João";
let num = '5';
let num2 = 10;
console.log(num + num2)
*/

// soma de numero com numero
{
	let x = 7 + 6 + 2;
	document.getElementById("teste1").innerHTML = x;
}

// soma de string com string
{
	let x = "Juliana" + " " + "Guimarães";
	document.getElementById("teste2").innerHTML = x;
}

// soma de string com numero
{
	let x = "5" + 2 + 3;
	document.getElementById("teste3").innerHTML = x;
}

{
	let x = "5" + (2 + 3);
	document.getElementById("teste4").innerHTML = x;
}