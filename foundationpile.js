import {ArrayStack} from "./arraystack.js";
import {Card} from "./card.js";

export class FoundationPile {
    constructor(suit) {
        this.pile = new ArrayStack();
        this.suit = suit;
    }

    /**
     * addCard - adds a card to the top of the foundation pile
     * @param {Card} card - the card to be added to the top of the pile
     */
    addCard(card) {
        if (this.canAddCard(card))
            this.push(card);
    }

    /**
     * canAddCard - checks if a card get be added to a foundation pile
     * @param {Card} card - the card the player is attempting to move to the pile
     * @returns true the colors of the 'card' and the 'top' of the foundation pile
     * are the same and if the rank of 'card' is 1 value lower than that of 'top', false otherwise
     */
    canAddCard(card) {
        if (this.suit != card.getSuit())
            return false;
        else if (this.rank != card.getRank() + 1)
            return false;
        return true;
    }

    /**
     * removeCard - remove one card from the foundation pile
     */
    removeCard() {
        if (this.pile.size() > 0)
            return this.pile.pop();
    }

    /**
     * getSuit - accessor method for the 'suit' variable
     * @returns the suit of the foundation pile
     */
    getSuit() {
        return this.suit();
    }

    /**
     * getFoundationPile - gets the instance of the pile
     * @returns the instance of the FoundationPile object
     */
    getFoundationPile() {
        return this.pile;
    }

    /**
     * getSize - gets the number of cards in the foundation pike
     * @returns the size of the foundation pile
     */
    getSize() {
        return this.pile.size();
    }

    /**
     * getTop - retrieve the top of the foundation pile
     * @returns top card of foundation pile
     */
    getTop() {
        return this.pile.peek();
    }

    /**
     * @returns foundation pile in string form
     */
    toString() {
        return this.pile.toString();
    }
}