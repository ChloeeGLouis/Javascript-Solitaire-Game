import {CardStack} from "./cardstack.js";
import {Card} from "./card.js";

export class FoundationPile extends CardStack {
    constructor(suit) {
        super();
        this.suit = suit;
    }

    /**
     * canAddCard - checks if a card get be added to a foundation pile
     * @param {Card} card - the card the player is attempting to move to the pile
     * @returns {Boolean} true the colors of the 'card' and the 'top' of the foundation pile
     * are the same and if the rank of 'card' is 1 value lower than that of 'top', false otherwise
     */
    canAddCard(card) {
        if (this.suit != card.getSuit())
            return false;
        else { 
            if (this.isEmpty())
                return card.getRank() == 1;
            else {
                if (this.topCard().getRank() != card.getRank() + 1)
                    return false;
            }
        }
        return true;
    }

    /**
     * getSuit - accessor method for the 'suit' variable
     * @returns {String} the suit of the foundation pile
     */
    getSuit() {
        return this.suit;
    }
}