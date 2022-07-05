const imgUrl = require("../../img/estrella-roja.svg") as string;

export function initStar() {
  class Estrella extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const variant = this.getAttribute("variant");

      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.className = variant;
      if (variant == "star win") {
        div.textContent = "¡Ganaste!";
      } else if (variant == "star draw") {
        div.textContent = "Empate";
      } else if (variant == "star lose") {
        div.textContent = "Perdiste";
      } else {
        div.textContent = "Pasó algo raro";
      }

      const style = document.createElement("style");
      style.innerHTML = `
      .star{
        font-size: 55px;
        color: black;
        height: 300px;
        width: 300px;
        margin: 30px auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lose{
        background-image: ${imgUrl};
        background-size: cover;
        color: white;
      }
      .win{
        background-image: url("/assets/img/estrella.svg");        
        background-size: contain;
        background-repeat: no-repeat;
        color: white;
      }
      `;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("result-star", Estrella);
}
