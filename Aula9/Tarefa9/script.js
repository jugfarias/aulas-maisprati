{
	let x = 6 + 20 - 12 * 2;
	document.getElementById("conta1").innerHTML = x
}

{
	/*let x = 10 + (2 + 3);
	let y = 30 / x;*/
	let y = 30 / (10 + (2 + 3));
	document.getElementById("conta2").innerHTML = y;
}

{
	/*let x = 18 + 3 * 2;
	let y = x  / 8 + 5 * 3;
	let z = y / 6;*/
	let z = ((18 + 3 * 2) / 8 + 5 * 3) / 6;
	document.getElementById("conta3").innerHTML = z;
}

{
	/*let x = 64 - 16 * 4;
	let y = 48 * 10 - 180;
	let z = (x + y) * 5;*/
	let z = ((64 - 16 * 4) + (48 * 10 - 180)) * 5;
	document.getElementById("conta4").innerHTML = z; 
}

{
	/*let x = 8 * 4 + 3;
	let y = 3 + 15 / 5;
	let z = x / 7 + y * 3;
	let a = z * 2 - (19 - 7) / 6;
	let b = a * 2 + 12;*/
	let b = (((8 * 4 + 3) / 7 + (3 + 15 / 5) * 3) * 2 - (19 - 7) / 6) * 2 + 12;
	document.getElementById("conta5").innerHTML = b;
}