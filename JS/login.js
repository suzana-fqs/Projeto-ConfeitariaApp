var telaprincipal = document.getElementById("iprinc")
var telalogin = document.getElementById("iform")
var telaRecuperarSenha = document.getElementById("iform2")
var esqueciSenha = document.getElementById("irecuperarSenha")

function exibirOcultarLogin(){
     if (telaprincipal.style.display === "none"){
            telaprincipal.style.display = "block"
            telalogin.style.display = "none"
            

    } else{
            telaprincipal.style.display = "none"
            telalogin.style.display = "block"
        
     }
}