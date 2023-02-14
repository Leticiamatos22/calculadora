var btCalcular = document.getElementById("button");
btCalcular.addEventListener("click", calcular);

var btreset = document.getElementById("btreset");
btreset.addEventListener("click", ocultar);
btreset.addEventListener("click", resetar);


function calcular(){
    //Declaração Variáveis
    let salarioBruto = window.document.getElementById("salarioBruto").value
    let dependentes = window.document.getElementById("dependentes").value
    let inss, baseIrrf, irrf, valeTransporte, descontos, salarioLiquido
   
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
    window.document.getElementById("inssSaida").innerHTML = "R$ " + inss.toFixed(2)

    //calculo base do IRRF
    baseIrrf = salarioBruto - inss - (189.59 * dependentes)
    console.log("base irrf" + baseIrrf)
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
    window.document.getElementById("irrfSaida").innerHTML = "R$ " + irrf.toFixed(2);

    //calculo do vale transporte
    valeTransporte = window.document.getElementById("checkbox").checked
    if(valeTransporte == true){
        valeTransporte = salarioBruto * 0.06
        console.log(valeTransporte)
        window.document.getElementById("valeTransporteSaida").innerHTML = "R$ " + valeTransporte.toFixed(2)
    }else{
        valeTransporte = 0.00
        console.log(valeTransporte)
        window.document.getElementById("valeTransporteSaida").innerHTML = "R$ " + valeTransporte.toFixed(2)
    }

    // calculo dos descontos e Salário Líquido
    descontos = inss + irrf + valeTransporte
    window.document.getElementById("descontosSaida").innerHTML = "R$ " + descontos.toFixed(2)
    salarioLiquido = salarioBruto - descontos
    window.document.getElementById("salarioLiquidosaida").innerHTML = "R$ " + salarioLiquido.toFixed(2)

    //Mostrar display
    document.getElementById("saida").style.display = "flex"; 

    // Travar formulário
    document.getElementById("salarioBruto").readOnly = true;
    document.getElementById("dependentes").readOnly = true;

}
function resetar(){
    document.getElementById("salarioBruto").readOnly = false;
    document.getElementById("dependentes").readOnly = false;
}
function ocultar(){
    document.getElementById("saida").style.display = "none";
}


  
 


