const elenco_botoes = document.getElementById('elencos')
const container_atletas = document.getElementById('atletas')


document.getElementById('sair').onclick = ()=>{
    window.location.href = 'index.html'
}

document.getElementById('pesquisa').addEventListener('input', (e)=>{
    const value = e.target.value
    const atletasFiltro = atletas.filter(
        (atleta) => atleta.nome.toLowerCase().includes(value.toLowerCase())
    )
    atualiza_atletas(atletasFiltro)

})


let atletas = []


const criaBotao = (title, id, elenco ) => {
    const btnM = document.createElement("button")
    btnM.textContent = title
    btnM.className = "btn"
    btnM.id = id
    btnM.onclick = async () => {
        await busca_atletas(elenco)
    }
    elenco_botoes.appendChild(btnM)
}


const criaCardAtleta = (atleta) => {
    const cardAtleta = document.createElement("div");
    cardAtleta.className = "card_atleta";

    const imagem = document.createElement("img");
    imagem.src = atleta.imagem;
    imagem.className = "imagem";

    const nome = document.createElement('h2')
    nome.textContent = atleta.nome
    nome.className = "nome"

    const saibaMais = document.createElement('button')
    saibaMais.textContent = 'Saiba mais'
    saibaMais.className = 'saibaMais'
    saibaMais.onclick = () => {
        window.location.href = `detalhes.html?id=${atleta.id}`
    }

    cardAtleta.appendChild(imagem)
    cardAtleta.appendChild(nome)
    cardAtleta.appendChild(saibaMais)

    container_atletas.appendChild(cardAtleta);
};

criaBotao('Masculino', 'masc', 'masculino')
criaBotao('Feminino', 'fem', 'feminino')
criaBotao('Todos', 'all', 'all')


const fetchData = async (endPoint) => {
    try {
      const response = await fetch("https://botafogo-atletas.mange.li/2024-1/" + endPoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

const atualiza_atletas = (atletas) => {
    container_atletas.innerHTML = ""
    atletas.forEach(element => {
        criaCardAtleta(element)
    });
}

const busca_atletas = async (elenco)=>{
    atletas = await fetchData(elenco)
    atualiza_atletas(atletas)
}

busca_atletas('all')