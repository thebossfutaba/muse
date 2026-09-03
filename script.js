// ========================================
// PRIMEIRA TELA
// ========================================

function comecar() {

    explosaoDeCoracoes();

    document.getElementById("inicio").style.display = "none";

    const declaracao =
        document.getElementById("declaracao");

    declaracao.style.display = "block";

    transicaoFofa(declaracao);

    const musicaFundo =
        document.getElementById("musicaFundo");

    if (musicaFundo) {
        musicaFundo.play();
    }

}


// ========================================
// ACEITOU
// ========================================

function aceitou() {

    document.getElementById("declaracao").style.display = "none";

    const pagina2 =
        document.getElementById("pagina2");

    pagina2.style.display = "block";

    transicaoFofa(pagina2);

}


// ========================================
// NÃO ACEITOU
// ========================================

// ========================================
// BOTÃO NÃO
// ========================================

let quantidadeNao = 0;

function naoAceitou() {

    const musicaFundo =
        document.getElementById("musicaFundo");

    if (musicaFundo) {
        musicaFundo.pause();
        musicaFundo.currentTime = 0;
    }

    quantidadeNao++;

    const botao =
        document.getElementById("botaoNao");

    if (quantidadeNao === 1) {

        const musicaNao =
            document.getElementById("musicaNao");

        musicaNao.currentTime = 0;
        musicaNao.volume = 1;

        musicaNao.play();
    }



    // ========================================
    // PRIMEIRO NÃO
    // ========================================

    if (quantidadeNao === 1) {

        const musicaNao =
            document.getElementById("musicaNao");

        musicaNao.currentTime = 0;
        musicaNao.volume = 1;

        musicaNao.play();

    }


    // ========================================
    // PRIMEIRO ATÉ QUARTO NÃO
    // ========================================

    if (quantidadeNao < 5) {

        const largura =
            window.innerWidth - botao.offsetWidth;

        const altura =
            window.innerHeight - botao.offsetHeight;


        const novaEsquerda =
            Math.random() * largura;

        const novoTopo =
            Math.random() * altura;


        botao.style.position = "fixed";

        botao.style.left =
            novaEsquerda + "px";

        botao.style.top =
            novoTopo + "px";


        if (quantidadeNao === 2) {

            botao.textContent =
                "Tem certeza? 🥺";

        }

        if (quantidadeNao === 3) {

            botao.textContent =
                "Pensa melhor 😭";

        }

        if (quantidadeNao === 4) {

            botao.textContent =
                "NÃÃÃÃO 😭❤️";

        }

        return;

    }


    // ========================================
    // QUINTO NÃO
    // ========================================

    mostrarMorgana();

}

// ========================================
// MOSTRAR MORGANA
// ========================================

function mostrarMorgana() {

    const cena =
        document.getElementById("cenaMorgana");

    const botao =
        document.getElementById("botaoNao");

    const musicaNao =
        document.getElementById("musicaNao");


    botao.style.display = "none";

    

    cena.style.display = "flex";


    const mensagens = [

        "Você realmente quer dizer não? 🥺",

        "Tem certeza disso? 😭",

        "Pensa com carinho... ❤️",

        "Essa é sua última chance... 👀",

        "Tem certeza ABSOLUTA? 😭❤️"

    ];


    let mensagemAtual = 0;

    const texto =
        document.getElementById("mensagemMorgana");


    texto.textContent =
        mensagens[0];


    const intervalo =
        setInterval(function() {

            mensagemAtual++;


            if (mensagemAtual >= mensagens.length) {

                clearInterval(intervalo);

                return;

            }


            texto.style.opacity = 0;


            setTimeout(function() {

                texto.textContent =
                    mensagens[mensagemAtual];

                texto.style.opacity = 1;

            }, 400);


        }, 2500);

}


// ========================================
// VOLTAR PARA A PERGUNTA
// ========================================

function voltarPergunta() {

    document
        .getElementById("cenaMorgana")
        .style.display = "none";


    const botao =
        document.getElementById("botaoNao");


    botao.style.display = "inline-block";

    botao.style.position = "static";

    botao.style.left = "";

    botao.style.top = "";

    botao.textContent =
        "Não 😢💔";


    quantidadeNao = 0;

}

// ========================================
// IR PARA PLAYLIST
// ========================================

function proximaParte() {

    document.getElementById("pagina2").style.display = "none";

    const playlist =
        document.getElementById("playlist");

    playlist.style.display = "block";

    transicaoFofa(playlist);

    const musicaFundo =
        document.getElementById("musicaFundo");

    if (musicaFundo) {

        musicaFundo.pause();

        musicaFundo.currentTime = 0;

    }

}


// ========================================
// TRANSIÇÃO FOFA
// ========================================

function transicaoFofa(elemento) {

    elemento.classList.remove("transicao-pagina");

    void elemento.offsetWidth;

    elemento.classList.add("transicao-pagina");

}


// ========================================
// PLAYLIST
// ========================================

const musicas = [

    {
        nome: "He Is",
        artista: "Ghost",
        arquivo: "music/He-Is.mp3",
        capa: "pictures/Ghost_He_Is.jpg"
    },

    {
        nome: "Life Eternal",
        artista: "Ghost",
        arquivo: "music/Ghost - Life Eternal.mp3",
        capa: "pictures/w.jpeg"
    },

    {
        nome: "All I Need",
        artista: "Radiohead",
        arquivo: "music/All I Need - Radiohead.mp3",
        capa: "pictures/e.jpeg"
    },

    {
        nome: "Beneath the Mask",
        artista: "Lyn",
        arquivo: "music/Beneath the Mask - Lyn.mp3",
        capa: "pictures/i.jpeg"
    },

    {
        nome: "Your Reality",
        artista: "Doki Doki Literature Club!",
        arquivo: "music/Doki Doki Literature Club! OST - Your Reality.mp3",
        capa: "pictures/h.jpg"
    },

    {
        nome: "Everlong",
        artista: "Foo Fighters",
        arquivo: "music/Foo Fighters- Everlong.mp3",
        capa: "pictures/g.jpg"
    },

    {
        nome: "Memories of You",
        artista: "Persona 3 Reload",
        arquivo: "music/Memories of You - Persona 3 Reload.mp3",
        capa: "pictures/a.jpg"
    },

    {
        nome: "Fly Me to the Moon",
        artista: "Neon Genesis Evangelion",
        arquivo: "music/Neon Genesis Evangelion - Fly me to the moon.mp3",
        capa: "pictures/j.jpeg"
    },

    {
        nome: "Red Swan",
        artista: "YOSHIKI feat. HYDE",
        arquivo: "music/Red Swan.mp3",
        capa: "pictures/f.jpeg"
    },

    {
        nome: "UNDER THE TREE",
        artista: "SiM",
        arquivo: "music/SiM - UNDER THE TREE.mp3",
        capa: "pictures/h.jpeg"
    },

    {
        nome: "Snake Eater",
        artista: "Cynthia Harrell",
        arquivo: "music/Snake.mp3",
        capa: "pictures/d.jpg"
    },

    {
        nome: "Enchanted",
        artista: "Taylor Swift",
        arquivo: "music/Taylor Swift - Enchanted.mp3",
        capa: "pictures/b.jpg"
    },

    {
        nome: "You Are In Love",
        artista: "Taylor Swift",
        arquivo: "music/You Are In Love - Taylor Swift.mp3",
        capa: "pictures/c.jpg"
    }

];


let musicaAtual = 0;


// ========================================
// ELEMENTOS DO PLAYER
// ========================================

const player =
    document.getElementById("playerMusica");

const botaoPlay =
    document.getElementById("botaoPlay");

const botaoAnterior =
    document.getElementById("botaoAnterior");

const botaoProximo =
    document.getElementById("botaoProximo");

const barraMusica =
    document.getElementById("barraMusica");

const tempoAtual =
    document.getElementById("tempoAtual");

const duracaoMusica =
    document.getElementById("duracaoMusica");

const volumeMusica =
    document.getElementById("volumeMusica");

const capaMusica =
    document.getElementById("capaMusica");

const nomeMusica =
    document.getElementById("nomeMusica");

const artistaMusica =
    document.getElementById("artistaMusica");


// ========================================
// FORMATAR TEMPO
// ========================================

function formatarTempo(segundos) {

    if (isNaN(segundos)) {
        return "0:00";
    }

    const minutos =
        Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60);

    return minutos + ":" +
        (segundosRestantes < 10 ? "0" : "") +
        segundosRestantes;

}


// ========================================
// CARREGAR MÚSICA
// ========================================

function carregarMusica(indice) {

    musicaAtual = indice;

    const musica =
        musicas[musicaAtual];

    player.src =
        musica.arquivo;

    player.load();

    capaMusica.src =
        musica.capa;

    nomeMusica.textContent =
        musica.nome;

    artistaMusica.textContent =
        musica.artista;

    barraMusica.value = 0;

    tempoAtual.textContent =
        "0:00";

    duracaoMusica.textContent =
        "0:00";

    botaoPlay.textContent =
        "▶";

}


// ========================================
// PLAY / PAUSE
// ========================================

botaoPlay.addEventListener("click", function() {

    if (player.paused) {

        player.play();

    } else {

        player.pause();

    }

});


// ========================================
// MÚSICA ANTERIOR
// ========================================

botaoAnterior.addEventListener("click", function() {

    musicaAtual--;

    if (musicaAtual < 0) {

        musicaAtual =
            musicas.length - 1;

    }

    carregarMusica(musicaAtual);

});


// ========================================
// PRÓXIMA MÚSICA
// ========================================

botaoProximo.addEventListener("click", function() {

    musicaAtual++;

    if (musicaAtual >= musicas.length) {

        musicaAtual = 0;

    }

    carregarMusica(musicaAtual);

});


// ========================================
// MÚSICA CARREGADA
// ========================================

player.addEventListener("loadedmetadata", function() {

    barraMusica.max =
        player.duration;

    barraMusica.value = 0;

    duracaoMusica.textContent =
        formatarTempo(player.duration);

});


// ========================================
// ATUALIZAR TEMPO
// ========================================

player.addEventListener("timeupdate", function() {

    barraMusica.value =
        player.currentTime;

    tempoAtual.textContent =
        formatarTempo(player.currentTime);

});


// ========================================
// ARRASTAR BARRA
// ========================================

barraMusica.addEventListener("input", function() {

    player.currentTime =
        barraMusica.value;

});


// ========================================
// VOLUME
// ========================================

volumeMusica.addEventListener("input", function() {

    player.volume =
        volumeMusica.value;

});


// ========================================
// PLAY
// ========================================

player.addEventListener("play", function() {

    botaoPlay.textContent =
        "⏸";

});


// ========================================
// PAUSE
// ========================================

player.addEventListener("pause", function() {

    botaoPlay.textContent =
        "▶";

});


// ========================================
// QUANDO A MÚSICA TERMINAR
// ========================================

player.addEventListener("ended", function() {

    musicaAtual++;

    if (musicaAtual >= musicas.length) {

        musicaAtual = 0;

    }

    carregarMusica(musicaAtual);

    player.play();

});


// ========================================
// CARREGAR PRIMEIRA MÚSICA
// ========================================

carregarMusica(0);


// ========================================
// CORAÇÕES
// ========================================

function criarCoracao() {

    const coracao =
        document.createElement("div");

    coracao.classList.add("coracao");

    coracao.textContent =
        "❤️";

    coracao.style.left =
        Math.random() * 100 + "vw";

    coracao.style.animationDuration =
        (2 + Math.random() * 2) + "s";

    coracao.style.fontSize =
        (15 + Math.random() * 30) + "px";

    document.body.appendChild(coracao);

    setTimeout(function() {

        coracao.remove();

    }, 4000);

}


function explosaoDeCoracoes() {

    for (let i = 0; i < 25; i++) {

        setTimeout(function() {

            criarCoracao();

        }, i * 40);

    }

}


// ========================================
// FINAL
// ========================================

function finalizarSite() {

    const playlist =
        document.getElementById("playlist");

    const final =
        document.getElementById("final");

    playlist.style.display = "none";

    final.style.display = "flex";

    transicaoFofa(final);

    const musicaFinal =
        document.getElementById("musicaFinal");

    musicaFinal.currentTime = 0;

    musicaFinal.volume = 1;

    musicaFinal.play();

}
