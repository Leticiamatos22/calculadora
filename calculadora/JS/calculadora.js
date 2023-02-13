
function calcular(){

    //Declaração Variáveis
    let salarioBruto = window.document.getElementById("salarioBruto").value
    let dependentes = window.document.getElementById("dependentes").value
   
    console.log("SalarioBruto = "+salarioBruto)
    window.document.getElementById("salarioBrutosaida").innerHTML = "R$ " + salarioBruto;

    //calculo inss
     if (salarioBruto > 7507.49){
        inss = 877.22
    }else if(salarioBruto >= 3856.94 && salarioBruto <= 7507.49){
        inss = (salarioBruto - 3856.94) * 0.14 + 366.16
    }else if(salarioBruto > 2571.29 && salarioBruto <= 3856.94){
        inss = (salarioBruto - 2571.29) * 0.12 + 211.87
    }else if(salarioBruto > 1302.00 && salarioBruto <= 2571.29){
        inss = (salarioBruto - 1302.00) * 0.09 + 97.65
    }else{
        inss = salarioBruto * 0.075
    } 

    console.log(inss)
    window.document.getElementById("inssSaida").innerHTML = "R$ " + inss

    //calculo base do IRRF
    let baseIrrf = salarioBruto - inss - 189.59 * dependentes
    // calculo do IRRF
    if(baseIrrf<= 1903.98){
        irrf=0
    }else if(baseIrrf <= 2826.65){
        irrf= baseIrrf * (7.5 / 100) - 142.80 
    }else if(baseIrrf <= 3751.05){
        irrf= baseIrrf * (15 / 100) - 354.80
    }else if(baseIrrf <= 4664.68){
        irrf= baseIrrf * (22.5 / 100) - 626.13
    }else{
        irrf= baseIrrf * (27.5 / 100) - 869.36
    }

    console.log(irrf)
    window.document.getElementById("irrfSaida").innerHTML = "R$ " + irrf

    //calculo do vale transporte
    let valeTransporte = window.document.getElementById("checkbox").checked
    if(valeTransporte == true){
        valeTransporte = salarioBruto * 0.06
        console.log(valeTransporte)
        window.document.getElementById("valeTransporteSaida").innerHTML = "R$ " + valeTransporte
    }else{
        valeTransporte = 0.00
        console.log(valeTransporte)
        window.document.getElementById("valeTransporteSaida").innerHTML = "R$ " + valeTransporte
    }

    // calculo dos descontos e Salário Líquido
    let descontos = inss + irrf + valeTransporte
    window.document.getElementById("descontosSaida").innerHTML = "R$ " + descontos
    let salarioLiquido = salarioBruto - descontos
     window.document.getElementById("salarioLiquidosaida").innerHTML = "R$ " + salarioLiquido

    //Mostrar display
    document.getElementById("saida").style.display = "flex";
}
function ocultar(){
    document.getElementById("saida").style.display = "none";
}

