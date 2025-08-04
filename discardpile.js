import {ArrayStack} from "./arraystack.js";
import {Card} from "./card.js";

export class DiscardPile {
    constructor() {
        this.pile = new ArrayStack();
    }

    /**
     * addCard - adds card to pile
     * @param {Card} card 
     */
    addCard(card) {
        this.push(card);
    }

    /**
     * removeCard - removed top card from pile
     * @returns popped card from discard pile
     */
    removeCard() {
        return this.pop();
    }

    /**
     * isEmpty - checks if the discard pile is empty
     * @returns true if it is empty, false otherwise
     */
    isEmpty() {
        return this.isEmpty();
    }

    /**
     * render - render the discard pile on screen 
     * @param {Card} discardedCard - top card of discard pile
     */
    render(discardedCard) {
        let discardImg = document.getElementById("discard");
        let suit = discardedCard.getSuit();
        let rank = discardedCard.getRank();
        discardImg.src = "playing-cards/" + discardedCard.numberToRank(rank) + "_of_" + suit + ".png";
    }

    /**
     * @returns the discard pile in string form
     */
    toString() {
        return this.pile.toString();
    }
}
