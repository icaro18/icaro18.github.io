const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Capitão Blessed quer sair de casa, dar um passeio, e decide ir a Drinks In Ice, sorveteria do senhor Ramon.   Chegando lá vê enormes labaredas de fogo saindo dela, e avista o seu causador, é o infame Dynamight, O Senhor do Fogo, e ele anuncia para quem o estiver ouvindo. - Vocês nunca mais conseguirão tomar sorvete, apenas o pote e a colher sobrarão, eu vou aquecer tanto, mais tanto, tanto que nenhum sorvete sobrará neste planeta!!! MMUUAAAHAHAHAHAHAHA!!!   Atira sua visão de calor em um dos frezzers e o derrete ZZZZZEEEEEE!!! (som de raio lazer) BLUB BLOB BLOARC BLUEHG (sons de derretimento)    ???? - IIIIHHHHH ala, não mexe com o meu sorvete não meu parcero. TUM TUM TUM TUM (som de pisadas fortes e rapidas)",
        alternativas: [
            {
                texto: "Acertar uma voadeira no vilão",
                afirmacao: "Capitão Blessed enxerga o vilão e seus atos malignos, e corre com toda sua vontade para cima dele, salta e acerta uma voadeira em cheio, bem no peito de Dynamight!!!  O vilão é empurrado para trás e cai no chão, fica deitado por um tempo, zonzo no chão, tentando recuperar seu fôlego, e se recupera com o passar do tempo. "
            },
            {
                texto: "Acertar uma rasteira no vilão",
                afirmacao: "Capitão Blessed enxerga o vilão e seus atos malignos, e corre com toda sua vontade para cima dele, tenta resbalar para acertar a rasteira, mas o piso é antiderrapante Blessed se rala um pouco, Dynamight percebe sua presença e então defere algumas flechas de chama em sua direção FUP FUP FUP (som de flechas sendo atiradas), uma delas o acerta no braço FINCHT (som de flecha cravando), Blessed sente seu sangue arder, pressiona o braço e usa seus poderes de cura divinos, o fogo se apaga e ele se prepara para a luta. "
            }
        ]
    },
    {
        enunciado: "Enfurecido, Dynamight pergunta,    - QUEM É VOCÊ!!?? O QUE FAZ AQUI!!?? Pare de me atrapalhar seu intrometido!! Ou quer ser incinerado? (acende uma chama no dedo indicador)    - Eu sou a sorte divina e um grande amante de sorvete, portanto se afaste daqui e de todos os outros sorvetes enquanto ainda consegue (fica em posição de batalha). ",
        alternativas: [
            {
                texto: "Blessed pede uma espada de luz ao seu Anjo da Guarda",
                afirmacao: "Ao ouvir as preçes de Blessed, o anjo concede a espada, Blessed parte para cima e golpeia, porém havia sorvete no chão, e não seria nesse dia que ele pisaria em um, ele faz uma nova rota, desvia do sorvete e no momento em que prestou atenção no sorvete, caiu na aramdilha de Dynamight, afinal, foi ele quem jogou o sorvete no chão esperando que Blessed desviasse, e nesse desvio, Blessed parou direto no punho acelerado e envolvido por chamas, é arremessado em direção as janelas e as quebra CRACKT (som da janela quebrando). Com esse golpe ele vai parar fora da sorveteria, com alguma dificuldade Blessed se levanta, com o ouvido zunindo e o ombro esquerdo dolorido."
            },
            {
                texto: "Blessed pede um machado de luz ao seu anjo da guarda ",
                afirmacao: "Ao ouvir as preçes de Blessed, o anjo concede o machado, uma lado com lâmina e o outro um martelo, Blessed arremessa uma casquinha de sorvete no vilão, acertando seu rosto, como o vilão odeia frio, fica se debatendo em desespero para se limpar, o que cria a oportunidade perfeita para Blessed, que golpeia com o lado do martelo na barriga, e Dynamight é arremessado para o teto, assim, batendo e voltando. Com dificuldade, Dynamight se recupera aos poucos, respira fundo e solta um grito ensurdecedor de ira UUUUUUUUHHHHHHHHGGGGGGG!!! E então seu corpo fica com chamas maiores e mais intensas.  "
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
