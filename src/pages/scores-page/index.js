import { state } from "../../state";
export function initScoresPage(goTo) {
    const currentState = state.getState();
    const ganador = state.whoWins(currentState.currentGame.playerPlay, currentState.currentGame.cpuPlay);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="inicio ${ganador}">
        <div class="contenedor-contenido">
            <result-star variant="star ${ganador}"></result-star>
            <my-scoreboard pp="${currentState.history.player}" cp="${currentState.history.cpu}"
            dp="${currentState.history.draw}"></my-scoreboard>
        </div>
        <div class="boton">
            <button-ppt>Volver a jugar</button-ppt>
        </div>
      </div>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
  .inicio{
   width: 100%;
   height: 100vh;
  }
  .win{
    background-color: rgba(136, 170, 73, 0.6);
  }
  .lose{
    background-color: rgba(170, 73, 73, 0.6);
  } 
  .draw{
    background-color: rgba(208, 197, 48, 0.6);
  } 
  .contenedor-contenido{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
  .star{
    margin: 30px auto 0 auto;
  }
  .boton{
    width: 100%;
    height: 85px;
    margin: 70px auto 0 auto;
    display: flex;
    justify-content: center;
  }
  `;
    div.appendChild(style);
    const button = div.querySelector(".boton");
    button.addEventListener("click", () => {
        goTo.goTo("/game");
    });
    return div;
}
