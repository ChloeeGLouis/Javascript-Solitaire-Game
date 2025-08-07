import {Card} from './card.js'

export class ArrayStack {
    constructor() {
        this.contents = new Array();
        this.top = -1;
    }

    /**
     * isEmpty method - checks if the stack is empty
     * @returns {Boolean} true if top == -1, false otherwise
     */
    isEmpty() {
        return this.top == -1;
    }

    /**
     * push - adds a card to the stack
     * @param {Card} card - the card that will be added to the stack
     */
    push(card) {
        this.top++;
        this.contents.push(card);
    }

    /**
     * pop - removed the top Card from the stack
     * @returns {Card} popped - the Card removed from the list
     */
    pop() {
        if (this.isEmpty()) 
            throw new Error("EmptyArrayException: the stack is empty.");
        let popped = this.contents[this.top];
        this.top--;
        return popped;
    }

    /**
     * peek - returns the top Card in the array
     * @returns {Card} the top Card
     */
    peek() {
        if (this.isEmpty()) 
            throw new Error("EmptyArrayException: the stack is empty.");
        console.log("is the peek an instance of a card? ", this.contents[this.top] instanceof Card);
        return this.contents[this.top];
    }

    /**
     * size - calculates the size of the stack
     * @returns {Integer} top + 1 - the size of the stack
     */
    size() {
        return this.top + 1;
    }

    /**
     * toString - returns the Card stack in string form
     * @returns {String} str - the Card stack in string form
     */
    toString() {
        let str = new String();
        for (let i=this.top; i>=0; i--) {
            str += this.contents[i].toString() + "\n";
        }
        return str;
    }
}