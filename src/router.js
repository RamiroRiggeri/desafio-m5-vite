import { initWelcome } from "./pages/home/index";
import { initInstructions } from "./pages/instrucciones";
import { initGame } from "./pages/game/";
import { initScoresPage } from "./pages/scores-page";
import { initResult } from "./pages/result";
const routes = [
    { path: /\/welcome/, component: initWelcome },
    { path: /\/instrucciones/, component: initInstructions },
    { path: /\/game/, component: initGame },
    { path: /\/result/, component: initResult },
    { path: /\/scores-page/, component: initScoresPage },
];
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
export function initRouter(divRoot) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(path) {
        const newRoute = isGithubPages() ? path.replace(BASE_PATH, "") : path;
        for (const r of routes) {
            if (r.path.test(path)) {
                const el = r.component({ goTo: goTo });
                if (divRoot.firstChild) {
                    divRoot.firstChild.remove();
                }
                divRoot.appendChild(el);
            }
        }
    }
    if (location.pathname == "/") {
        goTo("/welcome");
    }
    else {
        handleRoute(location.pathname);
    }
    window.onpopstate = function (event) {
        handleRoute(location.pathname);
    };
}
