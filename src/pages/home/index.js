export function initWelcome(goTo) {
    const div = document.createElement("div");
    div.className = "homepage";
    div.innerHTML = `
        <div class="inicio">
          <h1 class="titulo">Piedra Papel ó Tijera</h1>
          <div class="boton">
              <button-ppt>Empezar</button-ppt>
          </div>
          <div class="contenedor-manitos">
              <my-jugada item="piedra"></my-jugada>
              <my-jugada item="tijera"></my-jugada>
              <my-jugada item="papel"></my-jugada>
          </div>
        </div>
  `;
    const style = document.createElement("style");
    style.innerHTML = `
  .titulo{
    color: var(--titulo-home);
    font-size: 7em;
    font-weight: 800;
    min-width: 350px;
    max-width: 400px;
    margin: 50px auto 0 auto;
    padding:0;
    text-align: center;
    height: 400px;
  }
  .boton{
    width: 100%;
    height: 85px;
    margin: 30px auto 0 auto;
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
  `;
    div.appendChild(style);
    const button = div.querySelector(".boton");
    button.addEventListener("click", () => {
        goTo.goTo("/instrucciones");
    });
    return div;
}
