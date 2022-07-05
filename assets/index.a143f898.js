var x=Object.defineProperty;var b=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var c=(e,t,n)=>(b(e,typeof t!="symbol"?t+"":t,n),n);const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};v();function w(e){const t=document.createElement("div");t.className="homepage",t.innerHTML=`
        <div class="inicio">
          <h1 class="titulo">Piedra Papel \xF3 Tijera</h1>
          <div class="boton">
              <button-ppt>Empezar</button-ppt>
          </div>
          <div class="contenedor-manitos">
              <my-jugada item="piedra"></my-jugada>
              <my-jugada item="tijera"></my-jugada>
              <my-jugada item="papel"></my-jugada>
          </div>
        </div>
  `;const n=document.createElement("style");return n.innerHTML=`
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
  `,t.appendChild(n),t.querySelector(".boton").addEventListener("click",()=>{e.goTo("/instrucciones")}),t}function j(e){const t=document.createElement("div");t.className="homepage",t.innerHTML=`
          <div class="inicio">
          <h1 class="titulo">Presion\xE1 jugar
          y eleg\xED: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
          <div class="boton"><button-ppt>\xA1Jugar!</button-ppt></div>
          <div class="contenedor-manitos">  
          <my-jugada item="piedra"></my-jugada>
            <my-jugada item="tijera"></my-jugada>
            <my-jugada item="papel"></my-jugada>
            </div>
        </div>
  `;const n=document.createElement("style");return n.innerHTML=`
  .titulo{
    color: var(--titulo-instrucciones);
    font-size: 4em;
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
  `,t.appendChild(n),t.querySelector(".boton").addEventListener("click",()=>{e.goTo("/game")}),t}const s={data:{currentGame:{cpuPlay:"",playerPlay:""},history:{player:0,cpu:0,draw:0}},listeners:[],getState(){return JSON.parse(localStorage.getItem("saved-games"))?(this.data.history=JSON.parse(localStorage.getItem("saved-games")),this.data):this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("saved-games",JSON.stringify(e.history))},subscribe(e){this.listeners.push(e)},setMove(e){const t=this.getState();t.currentGame.playerPlay=e,t.currentGame.cpuPlay=this.cpuRandomizer(Math.trunc(Math.random()*3))},cpuRandomizer(e){return{0:"tijera",1:"papel",2:"piedra"}[e]},whoWins(e,t){const n=this.getState();if(e=="")console.log("no se seleccion\xF3 opci\xF3n");else return e==t?(n.history.draw++,this.setState(n),"draw"):e=="papel"&&t=="piedra"||e=="tijera"&&t=="papel"||e=="piedra"&&t=="tijera"?(n.history.player++,this.setState(n),"win"):(n.history.cpu++,this.setState(n),"lose")}};function E(e){const t=document.createElement("div");var n=3,i="piedra",o="papel",a="tijera";t.innerHTML=`
          <div class="inicio">
          <div class="contenedor-counter">
          <div class="circle">${n}</div>
          </div>
          <div class="contenedor-manitos">
            <my-jugada item="${i}" id="piedra"></my-jugada>
            <my-jugada item="${a}" id="tijera" non-selected="false"></my-jugada>
            <my-jugada item="${o}" id="papel"></my-jugada>
          </div>
        </div>
  `;const r=document.createElement("style");r.innerHTML=`
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
  `;const d=t.querySelector("#piedra"),l=t.querySelector("#tijera"),u=t.querySelector("#papel");t.appendChild(r),d.addEventListener("click",()=>{s.setMove("piedra"),l.style.opacity="0.5",u.style.opacity="0.5"}),l.addEventListener("click",()=>{s.setMove("tijera"),d.style.opacity="0.5",u.style.opacity="0.5"}),u.addEventListener("click",()=>{s.setMove("papel"),d.style.opacity="0.5",l.style.opacity="0.5"});function h(f,p){var y=setInterval(()=>{f.querySelector(".circle").innerHTML=p,p--,p<0&&(clearInterval(y),setTimeout(()=>{e.goTo("/result")},800))},1e3)}return h(t,n),t}function S(e){const t=s.getState(),n=s.whoWins(t.currentGame.playerPlay,t.currentGame.cpuPlay),i=document.createElement("div");i.innerHTML=`
      <div class="inicio ${n}">
        <div class="contenedor-contenido">
            <result-star variant="star ${n}"></result-star>
            <my-scoreboard pp="${t.history.player}" cp="${t.history.cpu}"
            dp="${t.history.draw}"></my-scoreboard>
        </div>
        <div class="boton">
            <button-ppt>Volver a jugar</button-ppt>
        </div>
      </div>
  `;const o=document.createElement("style");return o.innerHTML=`
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
  `,i.appendChild(o),i.querySelector(".boton").addEventListener("click",()=>{e.goTo("/game")}),i}function k(e){const t=document.createElement("div"),n=s.getState(),i=n.currentGame.playerPlay,o=n.currentGame.cpuPlay;t.innerHTML=`
          <div class="inicio">
          <my-jugada item="${o} cpu-manito"></my-jugada>
          <my-jugada item="${i} player-manito"></my-jugada>
        </div>
  `;const a=document.createElement("style");return a.innerHTML=`
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
  `,t.appendChild(a),setTimeout(()=>{e.goTo("/scores-page")},2e3),t}const C=[{path:/\/welcome/,component:w},{path:/\/instrucciones/,component:j},{path:/\/game/,component:E},{path:/\/result/,component:k},{path:/\/scores-page/,component:S}],m="/desafio-m5-vite";function g(){return location.host.includes("github.io")}function L(e){function t(i){g()&&m+i,history.pushState({},"",i),n(i)}function n(i){g()&&i.replace(m,"");for(const o of C)if(o.path.test(i)){const a=o.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}location.pathname=="/"?t("/welcome"):n(location.pathname),window.onpopstate=function(i){n(location.pathname)}}function T(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("item"),i=this.attachShadow({mode:"open"}),o=document.createElement("div");o.className=n;const a=document.createElement("style");a.innerHTML=`
      .piedra{
        bottom: 0px;
        left: 30px;
        background-image: url("../../img/piedra.svg");
        background-size: cover;
        height: 13em;
        width: 125px;
        cursor: pointer;
      }
      .papel{
        bottom: 0px;
        right: 30px;
        background-image: url("../../img/papel.svg");
        background-size: cover;
        height: 13em;
        width: 125px;
        cursor: pointer;
      }
      .tijera{
        bottom: 0px;
        left: 180px;
        background-image: url("../../img/tijera.svg");
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
      `,i.appendChild(o),i.appendChild(a)}}customElements.define("my-jugada",e)}function M(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.attachShadow({mode:"open"}),i=document.createElement("button"),o=document.createElement("style");i.className="btn-ppt",o.innerHTML=`
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
      `,i.textContent=this.textContent,n.appendChild(i),n.appendChild(o)}}customElements.define("button-ppt",e)}function P(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("variant"),i=this.attachShadow({mode:"open"}),o=document.createElement("div");o.className=n,n=="star win"?o.textContent="\xA1Ganaste!":n=="star draw"?o.textContent="Empate":n=="star lose"?o.textContent="Perdiste":o.textContent="Pas\xF3 algo raro";const a=document.createElement("style");a.innerHTML=`
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
        background-image: url("../../img/estrella-roja.svg");
        background-size: cover;
        color: white;
      }
      .win{
        background-image: url("../../img/estrella.svg");        
        background-size: contain;
        background-repeat: no-repeat;
        color: white;
      }
      `,i.appendChild(o),i.appendChild(a)}}customElements.define("result-star",e)}customElements.define("my-scoreboard",class extends HTMLElement{constructor(){super();c(this,"shadow");c(this,"playerPoints");c(this,"cpuPoints");c(this,"drawPoints");this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.playerPoints=this.getAttribute("pp"),this.cpuPoints=this.getAttribute("cp"),this.drawPoints=this.getAttribute("dp");const t=document.createElement("style");t.innerHTML=`
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
      `,this.shadow.appendChild(t),this.render()}render(){const t=document.createElement("div");t.innerHTML=`
      <div class="contenedor">
      <h2 class="score">Score</h2>
      <div class="puntajes">
        <p class="puntos">Vos: ${this.playerPoints}</p>
        <p class="puntos">M\xE1quina: ${this.cpuPoints}</p>
        <p class="puntos">Empate: ${this.drawPoints}</p>
      </div>
      </div>
      `,this.shadow.appendChild(t)}});(function(){const e=document.querySelector(".root");M(),T(),P(),L(e)})();
