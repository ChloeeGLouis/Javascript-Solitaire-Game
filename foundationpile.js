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
     * getPile - gets the instance of the pile
     * @returns the instance of the foundation pile
     */
    getPile() {
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
     * render - render the foundation pile on screen
     * @param {String} suit 
     * @param {Card} card
     */
    render(card, suit) {
        // clear the current image from foundation pile 
        const foundationPile = document.getElementById(suit);
        foundationPile.removeChild(foundationPile.firstChild);
        // create a new photo element
        let newPhoto = document.createElement("img");
        // if there are no cards, load photo of suit
        if (this.getSize() == 0) 
            newPhoto.src = "suits images/suits-" + suit + ".png"
        else {
            let rank = this.pile.peek().getRank();
            let suit = this.pile.peek().getSize();
            newPhoto.src = "playing-cards/" + card.numberToRank(rank) + "_of_" + suit + ".png";   
        }  
        // append photo to container
        foundationPile.appendChild(newPhoto);   
    }
    /**
     * @returns foundation pile in string form
     */
    toString() {
        return this.pile.toString();
    }
}