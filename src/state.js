const state = {
    data: {
        currentGame: {
            cpuPlay: "",
            playerPlay: "",
        },
        history: {
            player: 0,
            cpu: 0,
            draw: 0,
        },
    },
    listeners: [],
    getState() {
        if (JSON.parse(localStorage.getItem("saved-games"))) {
            this.data.history = JSON.parse(localStorage.getItem("saved-games"));
            return this.data;
        }
        else {
            return this.data;
        }
    },
    setState(newState) {
        this.data = newState;
        for (const callback of this.listeners) {
            callback(newState);
        }
        localStorage.setItem("saved-games", JSON.stringify(newState.history));
    },
    subscribe(callback) {
        this.listeners.push(callback);
    },
    setMove(jugada) {
        const currentState = this.getState();
        currentState.currentGame.playerPlay = jugada;
        currentState.currentGame.cpuPlay = this.cpuRandomizer(Math.trunc(Math.random() * 3));
    },
    cpuRandomizer(num) {
        const jugadaCpu = {
            0: "tijera",
            1: "papel",
            2: "piedra",
        };
        return jugadaCpu[num];
    },
    whoWins(playerPlay, cpuPlay) {
        const currentState = this.getState();
        if (playerPlay == "") {
            console.log("no se seleccionó opción");
        }
        else if (playerPlay == cpuPlay) {
            currentState.history["draw"]++;
            this.setState(currentState);
            return "draw";
        }
        else if ((playerPlay == "papel" && cpuPlay == "piedra") || (playerPlay == "tijera" && cpuPlay == "papel") || (playerPlay == "piedra" && cpuPlay == "tijera")) {
            currentState.history["player"]++;
            this.setState(currentState);
            return "win";
        }
        else {
            currentState.history["cpu"]++;
            this.setState(currentState);
            return "lose";
        }
    },
};
export { state };
