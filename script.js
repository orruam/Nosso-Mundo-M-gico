var b = document.getElementById('button')
b.addEventListener('click', clicar)
b.addEventListener('entrar', entrou)
b.addEventListener('sair', sair)
function clicar(){
    b.innerText = "EU TE AMOOOO MUITO EMILY!!!!"
    b.style.background = 'red'
}
function entrar(){
    b.innerText = 'Você entrou no meu mundo!'
    b.style.background = 'crimson'
}

function sair (){
    b.innerText = "Você saiu do mundo"
    b.style.background = 'crimson'
}
function mostrarNovaMensagem() {
// Seu código atual aqui
}const mensagens = [
"Que nosso amor seja eterno como as estrelas.",
"Leal e fiel, você é a minha luz.",
// ... adicione suas mensagens aqui
];

let msg1 = "EU TE AMOOOO MUITO EMILY!!!!";
document.getElementById("minhaMensagem").innerHTML = msg;

let msg = ["Mensagem 1", "Mensagem 2", "Mensagem 3"];
for (let index = 0; index < mensagens.length; index++) {
  document.getElementById("minhaLista").innerHTML += "<li>" + mensagens[index] + "</li>";
}

 function enviar(){
     let n = document.getElementById('textn')
     let res = document.getElementById('res')
     if(n.value.length === 0 ){
         alert('[ERRO] Por favor digite algo')
     } else{
         res.innerHTML += `<p>Sabia que vc iria vim aq meu amor, seja bem vinda! <br>
          ${n.value} </p>`
     }
}
function prefere() {
    const filme = document.getElementById('filme');
    const jogo = document.getElementById('jogo');
    const res2 = document.getElementById('res2');
  
    const filmes = [' Ainda estou aqui,Before sunrise,Easy a,Como se fosse a primeira vez ,500 dias com ela,O lado bom da vida ,Soul,Aftersun,Amor a primeira vista,Capitão fantástico ,A invenção de Hugo Cabret,10 coisas que eu odeio em você ,Meu pé de laranja lima ,Todo tempo que temos,Por lugares incríveis ,A incrível história de Adelaine,Stand by me,Para todos os garotos que ja amei'];
    const jogos = ['8 Ball Poll', 'Free fire', 'pintar', 'Roblox'];
  
    res2.innerHTML = ''; // Limpar o conteúdo anterior
  
    if (filme.checked) {
      const listaFilmes = document.createElement('ul');
      filmes.forEach(filme => {
        const itemLista = document.createElement('li');
        itemLista.textContent = filme;
        listaFilmes.appendChild(itemLista);
      });
      res2.appendChild(listaFilmes);
    } else if (jogo.checked) {
        const listajogos = document.createElement('ul');
        jogos.forEach (jogo => {
          const itemLista = document.createElement('li')
          itemLista.textContent = jogo
          listajogos.appendChild(itemLista)

        })
        res2.appendChild(listajogos)
      // Código similar para criar a lista de jogos
    } else {
      res2.textContent = 'Por favor, escolha uma opção.';
    }
  }

// function prefere (){
//     let f = document.getElementById('filme')
//     let j = document.getElementById('jogo')
//     let res = document.getElementById('res2')
//     if (f.checked) {
//         let f = (` Ainda estou aqui
//   Before sunrise,
//   Easy a,
//   Como se fosse a primeira vez ,
//  500 dias com ela,
//   O lado bom da vida ,
//  Soul,
//  Aftersun,
//  Amor a primeira vista,
//  Capitão fantástico ,
//   A invenção de Hugo Cabret,
// 10 coisas que eu odeio em você ,
//  Meu pé de laranja lima ,
//  Todo tempo que temos,
//   Por lugares incríveis,
//   A incrível história de Adelaine,
//   Stand by me,
//   Para todos os garotos que ja amei`)
//   res.innerHTML = f
//     } else if(j.checked){
//         let j = (`8 Ball Poll
//             Free fire
//             pintar
//             Roblox`)
//             res.innerHTML = ` ${j}`
//     }else{
//         res.innerHTML = (`Por favor escolha uma opção`)
//     }
// }
        
  




