import { ButtonHandler } from './buttonhandler.js';
import {Deck} from './deck.js'
import {DiscardPile} from './discardpile.js'
import {FoundationPile} from './foundationpile.js'
import {TableauPile} from './tableaupile.js' 

export class Solitaire {
    constructor() {
        // html deck, discard, tableau, foundation piles, and score
        this.htmlStockPile = document.getElementById("stock");
        this.htmlDiscardPile = document.getElementById("discard");
        this.htmlTableauPiles = Array.prototype.slice.call(document.getElementsByClassName("tableau"));
        this.htmlFoundationPiles = Array.prototype.slice.call(document.getElementsByClassName("foundation"));
        this.htmlScore = document.getElementById("score");

        // buttons
        this.newGameBtn = document.getElementById("new-game-btn");
        this.undoBtn = document.getElementById("undo-btn");
        this.restockBtn = document.getElementById("restock-btn"); 

         // create deck, discard, tableau, foundation piles, and score
        this.jsDiscardPile = new DiscardPile(); 
        this.jsDeck = new Deck(); 
        this.jsTableauPiles = new Array(7);
        this.jsFoundationPiles = new Array(4);
        this.jsScore = 0;
    }

    /**
     * startGame method 
     * 0. restart game
     * 1. shuffle deck
     * 2. deal tableau piles
     * 3. render tableau piles
     */
    startGame() {
        this.resetGame();
        // shuffle deck 3 times deal out cards 
        for (let i=0; i<3; i++)
            this.jsDeck.shuffle();
        // deal out cards to tableau piles
        for (let i=0; i<this.jsTableauPiles.length; i++) {
            this.jsTableauPiles[i] = new TableauPile();
            let dealt = this.jsDeck.deal(i+1);
            this.jsTableauPiles[i].createTableauPile(dealt);
        }
        // render tableau piles on screen
        this.renderTableauPiles();
    }

    /**
     * renderTableauPiles - render the HTMl tableau piles on screen
     */
    renderTableauPiles() {
        for (let i=0; i<this.jsTableauPiles.length; i++) {
            console.log(this.jsTableauPiles[i].toString());
            for (let j=0; j<this.jsTableauPiles[i].getSize(); j++) {
                let cardImg = document.createElement('img');
                if (j < this.jsTableauPiles[i].getSize()-1) 
                    cardImg.src = "images/playing-cards/card-back.png";
                else
                    cardImg.src = "images/playing-cards/" + this.jsTableauPiles[i].getTop().getRank() +  "_of_"  + this.jsTableauPiles[i].getTop().getSuit() + ".png";
                // cardImg.style.position = "absolute";
                cardImg.style.left = "0px";
                cardImg.style.top = `${j * 20}`;
                cardImg.style.zIndex -= `${100 - j}`;
                this.htmlTableauPiles[i].appendChild(cardImg); 
            }
        }
    }
    
    resetGame() {
         // reset deck, discard, tableau, foundation piles, and score
        this.jsDiscardPile = new DiscardPile(); 
        this.jsDeck = new Deck(); 
        this.jsTableauPiles = new Array(7);
        this.jsFoundationPiles = new Array(4);
        this.htmlScore.innerHTML = "0";

        // clear HTML tableau piles
        for (let i=0; i<this.htmlTableauPiles.length; i++) 
            this.htmlTableauPiles[i].innerHTML = '';

        // clear HTML foundation piles
        for (let i=0; i<this.htmlFoundationPiles.length; i++)
            this.htmlTableauPiles[i].innerHTML = '';

        // clear HTML stock/discard piles and make restock button visible
        this.htmlDiscardPile.innerHTML = '';
        this.htmlStockPile = '';
    }
}

window.onload = function() {
    const solitaireGame = new Solitaire();
    const buttonHandler = new ButtonHandler(
        solitaireGame, 
        solitaireGame.jsDeck,
        solitaireGame.newGameBtn, 
        solitaireGame.undoBtn, 
        solitaireGame.restockBtn
    );
}