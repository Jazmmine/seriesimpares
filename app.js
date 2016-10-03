var ingreso = "Coloque un numero";
var limit = parseInt(prompt(ingreso));
function serie(limit){
	for(n = 1; n <= limit; n++){
		if (n % 2 != 0) {
		document.write(n + " ");
		}
	}
}
serie(limit);	
