import {Solitaire} from "./solitaire.js"

export class ButtonHandler {
    constructor(gameInstance, deck, newGame, undoBtn, restockBtn) {
        this.deck = deck;
        this.gameInstance = gameInstance;
        this.newGameBtn = newGame;
        this.undoBtn = undoBtn;
        this.restockBtn = restockBtn;
        this.addListeners();
    }

    /**
     * addListeners - adds event listeners to each button
     * @param {ButtonHandler} event1 - function 1 
     * @param {ButtonHandler} event2 - function 2
     * @param {ButtonHandler} event3 - function 3
     */
    addListeners() {
        this.newGameBtn.addEventListener('click', () => this.newGame());
        this.undoBtn.addEventListener('click', () => this.undo());
        this.restockBtn.addEventListener('click', () => this.restock());
    }

    /**
     * newGame - this method gets called to start the game when the 'new' button is pressed
     */
    newGame() {
        this.gameInstance.startGame();
    }

    undo() {
        alert("reverse previous move.");
    }

    restock(deck, discard) {
        alert("restock the pile!");
    }
}