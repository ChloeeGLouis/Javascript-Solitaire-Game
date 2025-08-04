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
        this.restockBtn.style.display = "none";

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
        // render tableau, foundation, stock, and discard piles on screen
        this.renderTableauPiles();
        this.renderFoundationPiles();
        this.renderDeckDiscard();
    }

    /**
     * renderDeckDiscard - render deck and discard piles on screen
     */
    renderDeckDiscard() {
        // clear all html
        this.htmlStockPile.innerHTML = "";
        this.htmlDiscardPile.innerHTML = "";
        // if the deck isn't empty
        if (!this.jsDeck.isEmpty()) {
            // display back of card onto stock pile
            let deckContainer = document.createElement('div');
            deckContainer.id = "deck-card-container";
            let deckImg = document.createElement('img');
            deckImg.src = "images/playing-cards/card-back.png";
            deckContainer.appendChild(deckImg);
            this.htmlStockPile.appendChild(deckContainer);
            // if the discard pile is not empty
            if (!this.jsDiscardPile.isEmpty()) {
                // display top card of discard pile
                let discardContainer = document.createElement('div');
                discardContainer.id = "discard-card-container";
                let discardImg = document.createElement('img');
                discardImg.src = "images/playing-cards/" + this.jsDiscardPile.getTop().getRank() + "_of_" + this.jsDiscardPile.getTop().getSuit() + ".png";
                discardContainer.appendChild(discardImg);
                this.htmlStockPile.appendChild(discardContainer);
            } else {
                // display nothing
                this.htmlStockPile.innerHTML = "";
            }
        // if deck is empty
        } else {
            // display top card of discard pile
            let discardImg = document.createElement('img');
            discardImg.src = "images/playing-cards/" + this.jsDiscardPile.getTop().getRank() + "_of_" + this.jsDiscardPile.getTop().getSuit() + ".png";
            this.htmlStockPile.appendChild(discardImg);
            // display restock button on stock pile
            this.restockBtn.style.display = "flex";
        }
    }

    /**
     * renderTableauPiles - render the HTMl tableau piles on screen
     */
    renderTableauPiles() {
        for (let i=0; i<this.jsTableauPiles.length; i++) {
            for (let j=0; j<this.jsTableauPiles[i].getSize(); j++) {
                // create new card container
                let cardContainer = document.createElement('div'); 
                cardContainer.classList = "tableau-card-container";
                // create image for container
                let cardImg = document.createElement('img');
                // if card is not the top card, display back of card
                if (j < this.jsTableauPiles[i].getSize()-1) 
                    cardImg.src = "images/playing-cards/card-back.png";
                // if card is top card, display face of card
                else
                    cardImg.src = "images/playing-cards/" + this.jsTableauPiles[i].getTop().getRank() +  "_of_"  + this.jsTableauPiles[i].getTop().getSuit() + ".png";
                // adjust vertical position of card so cards overlap
                cardContainer.style.top = (j) * 25 + "px";
                // append card image onto card container
                cardContainer.appendChild(cardImg);
                // append card container onto HTMl tableau pile
                this.htmlTableauPiles[i].appendChild(cardContainer); 
            }
        }
    }

    /**
     * renderFoundationPiles - render the foundation piles on screen
     */
    renderFoundationPiles() {
        for (let i=0; i<this.htmlFoundationPiles[i].length; i++) {
            this.jsFoundationPiles[i].innerHTML = '';
            // if the foundation pile is empty, display image of suit
            if (this.jsFoundationPiles[i].isEmpty()) {
                this.jsFoundationPiles[i].src = "images/suits images/suits-" + this.jsFoundationPiles[i].getSuit() + ".png";
            // if the foundation pile is not empty, display top of foundation pile
            } else {
                let foundationContainer = document.createElement('div');
                foundationContainer.className("foundation-card-container");
                let foundationImg = document.createElement('img');
                foundationImg.src = "images/playing-cards/" + this.jsFoundationPiles[i].getRank() + "_of_" + this.jsFoundationPiles[i].getSuit() + ".png";
                foundationContainer.appendChild(foundationImg);
                jsFoundationPiles[i].appendChild(foundationContainer);
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
        this.htmlStockPile = document.getElementById("stock");

        // make button display "none"
        this.restockBtn.style.display = "none";
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