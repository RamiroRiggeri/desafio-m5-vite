import { state } from "../../state";
export function initResult(goTo) {
    const div = document.createElement("div");
    const currentState = state.getState();
    const jugadaPlayer = currentState.currentGame.playerPlay;
    const jugadaCpu = currentState.currentGame.cpuPlay;
    div.innerHTML = `
          <div class="inicio">
          <my-jugada item="${jugadaCpu} cpu-manito"></my-jugada>
          <my-jugada item="${jugadaPlayer} player-manito"></my-jugada>
        </div>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
  .titulo{
    color: var(--titulo-instrucciones);
    font-size: 4em;
    font-weight: 800;
    text-align: center;
    position: absolute;
    top: 40%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
  `;
    div.appendChild(style);
    setTimeout(() => {
        goTo.goTo("/scores-page");
    }, 2000);
    return div;
}
