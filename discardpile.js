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
     * getTop - retrieve the top of the discard pile
     * @returns top card of discard pile
     */
    getTop() {
        return this.pile.peek();
    }

    /**
     * getDiscard - accessor method for the discard pile
     * @returns this DiscardPile object
     */
    getDiscardPile() {
        return this.pile;
    }

    /**
     * isEmpty - checks if the discard pile is empty
     * @returns true if it is empty, false otherwise
     */
    isEmpty() {
        return this.pile.isEmpty();
    }

    /**
     * @returns the discard pile in string form
     */
    toString() {
        return this.pile.toString();
    }
}
