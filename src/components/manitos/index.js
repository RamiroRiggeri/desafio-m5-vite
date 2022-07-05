export function initManitos() {
    class MyJugada extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const variant = this.getAttribute("item");
            const shadow = this.attachShadow({ mode: "open" });
            const div = document.createElement("div");
            div.className = variant;
            const style = document.createElement("style");
            style.innerHTML = `
      .piedra{
        bottom: 0px;
        left: 30px;
        background-image: url(./src/img/piedra.svg);
        background-size: cover;
        height: 13em;
        width: 125px;
        cursor: pointer;
      }
      .papel{
        bottom: 0px;
        right: 30px;
        background-image: url(../../img/papel.svg);
        background-size: cover;
        height: 13em;
        width: 125px;
        cursor: pointer;
      }
      .tijera{
        bottom: 0px;
        left: 180px;
        background-image: url("./img/tijera.svg");
        background-size: cover;
        height: 13em;
        width: 125px;
        cursor: pointer;
      }
      .cpu-manito{
        position: absolute;
        height: 35vh;
        width: 180px;
        top: 0px;
        transform: rotate(180deg);
        cursor: not-allowed;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
      .player-manito{
        height: 35vh;
        width: 180px;
        cursor: not-allowed;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 0px;
      }
      `;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("my-jugada", MyJugada);
}
