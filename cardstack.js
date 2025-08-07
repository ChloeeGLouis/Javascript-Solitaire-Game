import {ArrayStack} from "./arraystack.js";
import {Card} from "./card.js";

export class CardStack extends ArrayStack {
    constructor() {
        super();
    }

    /**
     * addCard - adds card to CardStack
     * @param {Card} card - card to be added to the stack
     */
    addCard(card) {
        this.push(card);
    }

    /**
     * removeCard - removes card from CardStack
     * @returns {Card} popped card
     * @throws {Error} throws error if the stack is empty
     */
    removeCard() {
        if (this.isEmpty()) 
            throw new Error("EmptyArrayException: the CardStack is empty.");
        return this.pop();
    }

    /**
     * topCard - shows the top card of the CardStack
     * @returns {Card} the top card in the stack
     * @throws {Error} throws error if the stack is empty
     */
    topCard() {
        if (super.isEmpty()) 
            throw new Error("EmptyArrayException: the CardStack is empty.");
        return this.peek();
    }


    /**
     * isEmpty - checks if the CardStack class is empty or not
     * @returns {Boolean} true is the CardStack is empty, false otherwise
     */
    isEmpty() {
        return super.isEmpty();
    }

    /**
     * size - gets the size of the CardStack
     * @returns {Number} size of the CardStack
     */
    size() {
        return super.size();
    }

    /**
     * toString method
     * @returns {String} the CardStack in String form
     */
    toString() {
        return super.toString();
    }
}