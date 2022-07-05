customElements.define("my-scoreboard", class extends HTMLElement {
    shadow;
    playerPoints;
    cpuPoints;
    drawPoints;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.playerPoints = this.getAttribute("pp");
        this.cpuPoints = this.getAttribute("cp");
        this.drawPoints = this.getAttribute("dp");
        const style = document.createElement("style");
        style.innerHTML = `
      .contenedor{
        background-color: white;
        height: 250px;
        width: 50%;
        margin: 0 auto;
        border: solid 10px black;
        border-radius: 10px;
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 20px;
      }
      .score{
        margin: 0;
        font-size: 60px;
      }
      .puntajes{
        font-size: 35px;
        text-align: right;
      }
      .puntos{
        margin: 10px auto;
      }
      `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
      <div class="contenedor">
      <h2 class="score">Score</h2>
      <div class="puntajes">
        <p class="puntos">Vos: ${this.playerPoints}</p>
        <p class="puntos">Máquina: ${this.cpuPoints}</p>
        <p class="puntos">Empate: ${this.drawPoints}</p>
      </div>
      </div>
      `;
        this.shadow.appendChild(div);
    }
});
