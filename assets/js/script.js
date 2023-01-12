const jogadorAtual = document.querySelector(".jogadorAtual");
const reset = document.querySelector(".reset");

let selected;
let player = "X";

let posicaoVit =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function start(){
  selected = [];

  jogadorAtual.innerHTML = `VEZ DO JOGADOR: ${player}`;

  document.querySelectorAll(".jogo button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

function newMove(event){
  const index = event.target.getAttribute("data-cel");
  event.target.innerHTML = player;
  event.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
    
  }, [100]);
  
  player = player === "X" ? "O" : "X";
  jogadorAtual.innerHTML = `VEZ DO JOGADOR: ${player}`;
}

function check(){
  let ultimaJogada = player === "X" ? "O" : "X";

   const items = selected
     .map((item, cel) => [item, cel])
     .filter((item) => item[0] === ultimaJogada)
     .map((item) => item[1]);

  for (pos of posicaoVit) {
   if (pos.every((item) => items.includes(item))){
     alert("O '" + ultimaJogada + "' GANHOU!");
     return;
   }
 }

  if (selected.filter((item) => item).length === 9){
    alert('DEU VELHA!');
    return;
  }
}

 start();

reset.addEventListener("click", start);
