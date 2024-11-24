import { hex_sha256 } from './sha256-min.mjs'

const password = "d92bd848b840b2933bc86e1eb1229865d66e8752d1fcdbda984c8fe673c229ea"
const complement = "CHAVE"

sessionStorage.setItem('logado', 'false')


document.getElementById("button_login").onclick =
    ()=>{
        const password_inputed = document.getElementById("input_login").value
        const password_hashed = hex_sha256(password_inputed + complement)
        if(password_hashed == password){
            window.location.href = "jogadores.html"
            sessionStorage.setItem('logado', 'true')
            
        }
        else{
            alert("Senha Incorreta")
            }
    }