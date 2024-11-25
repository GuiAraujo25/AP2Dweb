const login = () => {
    const hash_senha = 'afd51a42537144fe0b233499d8f2bc22fb25e4998da668ef4cc7e5b9b0db13d6'
    const senha = document.getElementById('input_login').value
    
    if (hash_senha === hex_sha256(senha)) {
            sessionStorage.setItem('logado', 'sim');
    
    
            window.location = 'jogadores.html'
    
    } else {
            alert("Senha incorreta!")
    
    }
}