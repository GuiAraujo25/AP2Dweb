async function fetchAtletaPorId(id) {
    const response = await fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`);
    const data = await response.json();
    return data;
}

if (sessionStorage.getItem('logado')){
    const btn_voltar = document.createElement('button');
        btn_voltar.innerHTML = 'Voltar';
        btn_voltar.style.gridArea = 'a8';
        btn_voltar.style.padding = '1rem';
        btn_voltar.style.border = 'white 2px solid';
        btn_voltar.style.margin = '1rem';
        btn_voltar.style.borderRadius = '5px';
        btn_voltar.style.color = 'white';
        btn_voltar.style.backgroundColor = 'none';
        btn_voltar.style.background= 'none';
        btn_voltar.style.cursor = 'pointer';
        btn_voltar.style.zIndex = '999';
        btn_voltar.onclick = () => {
            window.location.href = 'jogadores.html';
        }

    const constroiCard = ( atleta ) => {
        const divCard = document.createElement('article');
        divCard.id = 'card';

        const imagem = document.createElement('img');
        imagem.style.gridArea = 'a1';
        imagem.style.height = 'fit-content';
        imagem.style.width = 'fit-content';
        imagem.style.objectFit = 'cover';
        imagem.style.margin = 'auto auto';
        imagem.src = atleta.imagem;
        imagem.alt = atleta.nome;

        const titulo = document.createElement('section');
        titulo.style.gridArea = 'a2';
        titulo.style.display = 'flex';
        titulo.style.flexDirection = 'column';
        titulo.style.alignItems = 'center';
        titulo.style.justifyContent = 'center';

        const pPosicao = document.createElement('p');
        pPosicao.style.fontWeight = 'bold';
        pPosicao.style.fontFamily = 'sans-serif';
        pPosicao.style.fontSize = '1rem';
        pPosicao.style.textTransform = 'uppercase';
        pPosicao.innerHTML = atleta.posicao;

        const pNome = document.createElement('p');
        pNome.style.fontWeight = 'bold';
        pNome.style.fontFamily = 'sans-serif';
        pNome.style.fontSize = '1.3rem';
        pNome.style.padding = '1rem';
        pNome.style.textTransform = 'uppercase';
        pNome.innerHTML = atleta.nome;

        const pDescri = document.createElement('p');
        pDescri.style.gridArea = 'a3';
        pDescri.style.paddingLeft = '1rem';
        pDescri.style.paddingRight = '1rem';
        pDescri.innerHTML = atleta.detalhes;

        const pNasci = document.createElement('p');
        pNasci.style.gridArea = 'a5';
        pNasci.style.paddingLeft = '1rem';
        pNasci.innerHTML = `Nascimento: ${atleta.nascimento}`;

        const pJogos = document.createElement('p');
        pJogos.style.gridArea = 'a4';
        pJogos.style.paddingLeft = '1rem';
        pJogos.innerHTML = `Numero de jogos: ${atleta.n_jogos}`;

        const pNatu = document.createElement('p');
        pNatu.style.gridArea = 'a6';
        pNatu.style.paddingLeft = '1rem';
        pNatu.innerHTML = `Naturalidade: ${atleta.naturalidade}`;

        const pExtra = document.createElement('p');
        pExtra.innerHTML = `id: ${atleta.id}| elenco: ${atleta.elenco}| altura: ${atleta.altura? atleta.altura : 'Não informado'}`;
        pExtra.style.paddingLeft = '1rem';
        pExtra.style.gridArea = 'a7';

        divCard.appendChild(imagem);
        
        titulo.appendChild(pNome);
        titulo.appendChild(pPosicao);
        divCard.appendChild(titulo);

        divCard.appendChild(pDescri);
        divCard.appendChild(pJogos);
        divCard.appendChild(pNatu);
        divCard.appendChild(pNasci);
        divCard.appendChild(pExtra);
        divCard.appendChild(btn_voltar);

        document.body.appendChild(divCard);
    }

    const erro = document.createElement('h1');
    erro.style.color = 'white';
    erro.innerHTML = 'Erro ao tentar buscar atleta';

    const url = new URLSearchParams(window.location.search);

    const idAtleta = url.get('id');

    if (idAtleta) {
        
        if (idAtleta > 60) {
            erro.innerHTML
            console.log('Jogador com ID', idAtleta, 'não encontrado');
            document.body.appendChild(btn_voltar);
            btn_voltar.style.color = 'black';
            btn_voltar.style.border = 'black 2px solid';
            document.body.appendChild(erro);
            erro.style.color = 'black';
        } else {
            fetchAtletaPorId(idAtleta).then(atleta => {
                constroiCard(atleta);
            });
        }
    } else {
        erro.innerHTML
        document.body.appendChild(btn_voltar);
        document.body.appendChild(erro);
    }

} else {
    const deslogado = document.createElement('h1');
    deslogado.innerHTML = 'Indisponivel, faça login';
    document.body.appendChild(deslogado);
}