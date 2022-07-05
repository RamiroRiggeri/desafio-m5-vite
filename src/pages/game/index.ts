import { state } from "../../state";

export function initGame(goTo) {
  const div = document.createElement("div");
  var count = 3;
  var manopiedra = "piedra";
  var manopapel = "papel";
  var manotijera = "tijera";

  div.innerHTML = `
          <div class="inicio">
          <div class="contenedor-counter">
          <div class="circle">${count}</div>
          </div>
          <div class="contenedor-manitos">
            <my-jugada item="${manopiedra}" id="piedra"></my-jugada>
            <my-jugada item="${manotijera}" id="tijera" non-selected="false"></my-jugada>
            <my-jugada item="${manopapel}" id="papel"></my-jugada>
          </div>
        </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  .contenedor-counter{
    margin: 150px auto 0 auto;
    display: flex;
    justify-content: center;
  }
  .contenedor-manitos{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0px;
    width: 100%;
    max-width: 1000px;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  .circle{
    border: 25px solid black;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150px;
  }
  `;
  const piedraPlay = div.querySelector("#piedra");
  const tijeraPlay = div.querySelector("#tijera");
  const papelPlay = div.querySelector("#papel");

  div.appendChild(style);

  piedraPlay.addEventListener("click", () => {
    state.setMove("piedra");
    (tijeraPlay as any).style.opacity = "0.5";
    (papelPlay as any).style.opacity = "0.5";
  });
  tijeraPlay.addEventListener("click", () => {
    state.setMove("tijera");
    (piedraPlay as any).style.opacity = "0.5";
    (papelPlay as any).style.opacity = "0.5";
  });
  papelPlay.addEventListener("click", () => {
    state.setMove("papel");
    (piedraPlay as any).style.opacity = "0.5";
    (tijeraPlay as any).style.opacity = "0.5";
  });

  function countDown(div, count) {
    var int = setInterval(() => {
      div.querySelector(".circle").innerHTML = count;
      count--;
      if (count < 0) {
        clearInterval(int);
        setTimeout(() => {
          goTo.goTo("/result");
        }, 800);
      }
    }, 1000);
  }

  countDown(div, count);

  return div;
}
