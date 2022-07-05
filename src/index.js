import { initRouter } from "./router";
import { initManitos } from "./components/manitos/index";
import { initBtnPpt } from "./components/button/index";
import { initStar } from "./components/star";
// import { initCounter } from "./components/countdown";
import "./components/scoreboard";
(function () {
    const root = document.querySelector(".root");
    initBtnPpt();
    initManitos();
    // initCounter();
    // initScoreboard();
    initStar();
    initRouter(root);
})();
