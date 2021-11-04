var x = parseFloat(prompt("Informe o ângulo em radiano."));
var N = Number(prompt("Informe a quantidade de termos:"));
var s = x;
var termo = x;
var i = 1;

while (N > 0){
    i = i + 2; // i += 2;
    termo = (-1)*termo*x*x/(i*(i-1));
    s = s + termo; // s += termo;
    N --;
}
document.write("Seno = "+s.toFixed(2));