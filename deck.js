import {ArrayStack} from "./arraystack.js";
import {Card} from "./card.js";

const suits = ["diamonds", "clubs", "hearts", "spades"];
const rank = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export class Deck {
    // constructor that creates a new 52-card deck 
    constructor() {
        this.deck = new ArrayStack();
        for (let i=0; i<suits.length; i++) {
            for (let j=0; j<rank.length; j++) {
                let color = suits[i] == "clubs" || suits[i] == "spades" ? "black" : "red";
                this.deck.push(new Card(suits[i], rank[j], color));
            }
        }
    }

    /**
     * getDeck - accessor method for the deck
     * @returns this Deck object
     */
    getDeck() {
        return this.deck;
    }
    
    /**
     * isEmpty - checks if the deck is empty or not
     * @returns true if deck size is 0, false otherwise
     */
    isEmpty() {
        return this.deck.size() == 0;
    }

    /**
     * shuffle - randomly shuffles the deck
     */
    shuffle() {
        let temp = new ArrayStack();
        while (!this.deck.isEmpty()) {
            temp.push(this.deck.pop());
        }
        for (let i = temp.size() - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp.contents[i], temp.contents[j]] = [temp.contents[j], temp.contents[i]];
        }
        this.deck = temp;
    }

    /**
     * deal - deals a certain number of cards from the deck and returns them
     * @param {int} num - the number of cards to be dealt
     * @returns an ArrayStack of dealt cards
     */
    deal(num) {
        let dealt = new ArrayStack();
        for (let i=0; i<num; i++) {
            dealt.push(this.deck.pop());
        }
        return dealt;
    }

    /**
     * render - render deck on screen
     * @param {ArrayStack} discard - discard pile
     */
    render(discard) {
        if (this.deck.isEmpty()) {
            if (!discard.isEmpty()) {
                let button = document.getElementById("restock-btn");
                button.style.display = "flex";   
            }
        } else {
            button.style.display = "none";
            let stock = document.getElementById("stock");
            let rank = this.peek().getRank();
            let suit = this.peek().getSuit();
            stock.src = "playing-cards/" + this.peek().numberToRank(rank) + "_of_" + suit + ".png";
        }
    }
    
    /**
     * @returns the deck in string form
     */
    toString() {
        return this.deck.toString();
    }
}