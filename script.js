let btn = document.getElementById("btn-simula")


btn.addEventListener("click", function(){

    let valor = document.querySelector(".valor");
    let prazoAno = document.querySelector(".prazoAno");
    let jurosAno = document.querySelector(".jurosAno");
    let prazoMes = document.querySelector(".prazoMes");
    let jurosMes = document.querySelector(".jurosMes");
    let jurosAcumulado = document.querySelector(".jurosAcumulados");
    let totJuros = 0;

    
    let resultadoPrazo = (prazoAno.value * 12);
    prazoMes.value = resultadoPrazo;
    
    jurosMes.value = jurosMensal(jurosAno.value);

    let body = document.getElementById("tbodyid");
     
    body.innerHTML = "";

    for(let i = 0; i < resultadoPrazo; i++){
        let row = document.createElement("tr");
        if(i <= 4){
            body.append(row);
            row.textContent = i + 1;
        }
        for(let j = 0; j < 4; j++)  {
            let col = document.createElement("td");
            row.appendChild(col);
            let amortizacao = (valor.value / prazoMes.value);
            let juros = ((valor.value - i * amortizacao) * jurosMes.value);
            let total = (+juros + +amortizacao);

            j == 0 && col.append(amortizacao.toFixed(2));
            if(j==1){
                col.append(juros.toFixed(2));
                totJuros += juros;
            }
            j == 2 && col.append(total.toFixed(2));
            
        }   
    }

    jurosAcumulado.value = totJuros.toFixed(2);
})

function jurosMensal(jurosAno){
    let jm = (1 + (+jurosAno))**(1 / 12) - 1;
    return jm;
}