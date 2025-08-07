import {ButtonHandler} from './buttonhandler.js';
import {Card} from './card.js'
import {CardStack} from './cardstack.js'
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
        this.jsDeck = new Deck(); 
        this.jsDiscardPile = new DiscardPile(); 
        this.jsTableauPiles = Array.from({length: 7}, () => new TableauPile());
        this.jsFoundationPiles = Array.from({length: 4}, () => new FoundationPile());
        this.jsScore = 0; 
    }

    dealCardFromDeck() {
       let poppedCard = this.jsDeck.deal(1);
       this.jsDiscardPile.addCard(poppedCard);
       console.log("card dealt to discard pile: " + this.jsDiscardPile.topCard());
       this.renderDeckDiscard();
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
        console.log(this.jsDeck.toString());
        // deal out cards to tableau piles
        for (let i=0; i<this.jsTableauPiles.length; i++) {
            this.jsTableauPiles[i] = new TableauPile();
            let dealt = this.jsDeck.deal(i+1);
            this.jsTableauPiles[i].createTableauPile(dealt);
            console.log(this.jsTableauPiles[i].toString());
        }
        // render tableau, foundation, stock, and discard piles on screen
        this.renderTableauPiles();
        this.renderFoundationPiles();
        this.renderDeckDiscard();

        // make deck clickable
        document.getElementById('stock').addEventListener('click',  () => this.dealCardFromDeck());
    }

    /**
     * renderDeckDiscard - render deck and discard piles on screen
     */
    renderDeckDiscard() {
        console.log("deck:\n" + this.jsDeck.toString());
        // clear all html
        this.htmlStockPile.innerHTML = "";
        this.htmlDiscardPile.innerHTML = "";

        // handle deck
        if (!this.jsDeck.isEmpty()) {
            let deckContainer = document.createElement('div');
            let deckImg = document.createElement('img');
            deckImg.src = "images/playing-cards/card-back.png";
            deckContainer.appendChild(deckImg);
            this.htmlStockPile.appendChild(deckContainer);
            console.log("is deck top a card?: ", this.jsDeck.topCard() instanceof Card);    // returns true
            console.log("handle deck - top card's rank: " + this.jsDeck.topCard().getRank());   // returns the rank
        }

        // handle discard
        if (!this.jsDiscardPile.isEmpty()) {
            let discardContainer = document.createElement('div');
            discardContainer.id = "discard-card-container";
            let discardImg = document.createElement('img');
            let discardTopCard = this.jsDiscardPile.topCard();
            console.log("handle discard - top card: " + discardTopCard);   // returns top card successfully
            if (discardTopCard instanceof Card) {
                 console.log("is discard top a card?: ", discardTopCard instanceof Card); // returns false, but don't know why
                console.log("discard top card's RANK: " + discardTopCard.getRank()); // Uncaught TypeError
                discardImg.src = "images/playing-cards/" + "ace" + "_of_" + "spades" + ".png";
                discardContainer.appendChild(discardImg);
                this.htmlDiscardPile.appendChild(discardContainer);
            } else {
                console.log("discardTopCard is NOT an instance of a Card!");
            }
        } else {
            console.log("discard stack is empty!");
            this.restockBtn.style.display = "flex"; 
        }
    }

    /**
     * renderTableauPiles - render the HTMl tableau piles on screen
     */
    renderTableauPiles() {
        for (let i=0; i<this.jsTableauPiles.length; i++) {
            let size = this.jsTableauPiles[i].size();
            for (let j=0; j<size; j++) {   // Uncaught TypeError: this.pile.size is not a function
                // create new card container
                let cardContainer = document.createElement('div'); 
                cardContainer.classList = "tableau-card-container";
                // create image for container
                let cardImg = document.createElement('img');
                // if card is not the top card, display back of card
                if (j < this.jsTableauPiles[i].size()-1) 
                    cardImg.src = "images/playing-cards/card-back.png";
                // if card is top card, display face of card
                else 
                    cardImg.src = "images/playing-cards/" + this.jsTableauPiles[i].topCard().getRank() +  "_of_"  + this.jsTableauPiles[i].topCard().getSuit() + ".png";
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
        this.jsDeck = new Deck();
        this.jsDiscardPile = new DiscardPile();  
        this.jsTableauPiles = Array.from({length: 7}, () => new TableauPile());
        this.jsFoundationPiles = Array.from({length: 4}, () => new FoundationPile());;
        this.htmlScore.innerHTML = "0";

        // clear HTML tableau piles
        for (let i=0; i<this.htmlTableauPiles.length; i++) 
            this.htmlTableauPiles[i].innerHTML = '';

        // clear HTML foundation piles
        for (let i=0; i<this.htmlFoundationPiles.length; i++)
            this.htmlTableauPiles[i].innerHTML = '';

        // clear HTML stock/discard piles and make restock button visible
        this.htmlDiscardPile.innerHTML = '';

        // make button display "none"
        this.restockBtn.style.display = "hidden";
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