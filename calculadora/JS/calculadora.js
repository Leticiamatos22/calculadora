//Declaração Variáveis
var salarioBruto = window.document.getElementById("salarioBruto").value
var dependentes = window.document.getElementById("dependentes").value
var valeTransporte = window.document.getElementById("checkbox").checked


var inss

if (salarioBruto<= 1,302.00){
    inss = (7,5 / 100)*salarioBruto
}else if(salarioBruto<=2,571.29){
    inss = (9 / 100)*salarioBruto
}else if(salarioBruto<=3,856.94){
    inss = (12/ 100)*salarioBruto
}else if(salarioBruto<=7.507,49){
    inss = (14 / 100)*salarioBruto
}else{
    inss = (14 / 100)*salarioBruto
}

var baseIrrf = salarioBruto - inss - 189.59 * dependentes
var irrf

if(baseIrrf<= 1.903,98){
    irrf=0
}else if(baseIrrf<=2.826,65){
    irrf= baseIrrf * (7.5 / 100) - 142.80 
}else if(baseIrrf<=3,751.05){
    irrf= baseIrrf * (15 / 100) - 354.80
}else if(baseIrrf<=4,664.68){
    irrf= baseIrrf * (22.5 / 100) - 626.13
}else{
    irrf= baseIrrf * (27.5 / 100) - 869.36
}

var valeTransporte= (6/100)*salarioBruto 

var salarioLiquido = salarioBruto - inss - irrf -valeTransporte