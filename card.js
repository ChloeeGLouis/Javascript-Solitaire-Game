export class Card {
    /**
     * parameterized constructor 
     * @param {string} suit - the card's suit
     * @param {int} rank - the card's rank
     * @param {string} color - the color of the card 
     */
    constructor(suit, rank, color) {
        this.suit = suit;
        this.rank = rank;
        this.color = color;
    }

    /**
     * getSuit - accessor method for the suit variable
     * @returns the card's suit
     */
    getSuit() {
        return this.suit;
    }

    /**
     * getRank - accessor method for the rank variable
     * @returns the card's rank
     */
    getRank() {
        return this.numberToRank(this.rank);
    }

    /**
     * getColor - accessor method for the color variable
     * @returns color
     */
    getColor() {
        return this.color;
    }

    /**
     * numberToRank - converts a non 2-10 rank to the name of the rank
     * @param {int} num - the rank number 
     * @returns if the rank is 1, 11, 12, or 13, return the rank name corresponding to the number. else, return num
     */
    numberToRank(num) {
        if (num == 1)
            return "ace";
        else if (num == 11) 
            return "jack";
        else if (num == 12) 
            return "queen";
        else if (num == 13)
            return "king";
        else return num;
    }

    /**
     * toString - returns the suit and rank in string form
     * @returns rank and suit in string form
     */
    toString() {
        return this.rank + " of " + this.suit + " (" + this.color + ")";
    }
}