//declaração de vetores

var A = [];
var B = new Array(5);
var p;

//alimentando os vetores

A[0] = 1;
A[1] = 2;
A[2] = 3;

for (p = 1; p <= 5; p++) {
    B[p] = parseInt(prompt("Informe o valor da posição " + p));

}

//apresentação dos vetores

document.write("A = " + A + "<br>");
document.write("B = " + B + "<br>");
