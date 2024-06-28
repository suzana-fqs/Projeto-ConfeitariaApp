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


/*
let logar = document.getElementById("inome").value
let senha = document.getElementById("isenha").value
let mensagemdeErro = document.getElementById("iMsgErroaologar")

function abrirPaginaPrincipal(){
       
        if ( logar === '' || senha === ''){
                mensagemdeErro.textContent = 'Favor, preencha os campos.'
        } else {
                window.location.href = '/paginaprincipal.html'

        }
*/
               
       