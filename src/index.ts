import { initRouter } from "./router";
import { initManitos } from "./components/manitos/index";
import { initBtnPpt } from "./components/button/index";
import { initStar } from "./components/star";
// import { initCounter } from "./components/countdown";
import "./components/scoreboard";
import { initWelcome } from "./pages/home/index";
import { initInstructions } from "./pages/instrucciones";
import { initGame } from "./pages/game/";
import { initScoresPage } from "./pages/scores-page";
import { state } from "./state";
import { initResult } from "./pages/result";

(function () {
  const root = document.querySelector(".root");
  initBtnPpt();
  initManitos();
  initStar();
  initRouter(root);
})();
