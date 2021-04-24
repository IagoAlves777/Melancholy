let i = 0;
function enviar(){
    let resposta = document.getElementById("answer");
    if(resposta.value == "desistir"){
        alert("Você acertou")
    }else{
        if(i>2){
            alert("O caminho para o sucesso é não DESISTIR") 
        }else if(i==0){
            alert("O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.")    
        }
        else if(i==1){
            alert("Cada fracasso ensina ao homem algo que ele precisava aprender.")    
        }
        else if(i==2){
            alert("O sucesso é construído de 99 por cento de fracasso.")    
        }
    }
    resposta.value = ("");
    i=i+1;
}