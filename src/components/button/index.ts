export function initBtnPpt() {
  class ButtonPpt extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const button = document.createElement("button");
      const style = document.createElement("style");
      button.className = "btn-ppt";
      style.innerHTML = `
      .btn-ppt{
        font-size: 45px;
        color: white;
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 8px;
        padding: 10px;
        width: 90vw;
        max-width: 450px;
        height: 90px;
        font-family: "Odibee Sans", cursive;
        cursor: pointer;
      }
      `;
      button.textContent = this.textContent;
      shadow.appendChild(button);
      shadow.appendChild(style);
    }
  }
  customElements.define("button-ppt", ButtonPpt);
}
