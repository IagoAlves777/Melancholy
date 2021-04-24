let i = 0;
function enviar(){
    let resposta = document.getElementById("answer");
    if(resposta.value == "desistir"){
        alert("Você acertou")
    }else{
        if(resposta.value == ""){
            alert("Resposta inválida!")
        }
        else if(i>2){
            alert("O caminho para o sucesso é não DESISTIR") 
        }else if(i==0){
            alert("O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.")
            i=i+1;    
        }
        else if(i==1){
            alert("O fracasso e o sucesso são impostores. Ninguém fracassa tanto como imagina. Ninguém tem tanto sucesso como imagina.")
            i=i+1;    
        }
        else if(i==2){
            alert("O sucesso é construído de 99 por cento de fracasso.")
            i=i+1;    
        }
        
    }
    resposta.value = ("");
    
}