export class Card {
    /**
     * parameterized constructor 
     * @param {String} suit - the card's suit
     * @param {Number} rank - the card's rank
     * @param {String} color - the color of the card 
     * @param {Boolean} visibility - card's visibility (for tableau piles)
     */
    constructor(suit, rank, color, visibility) {
        this.suit = suit;
        this.rank = rank;
        this.color = color;
        this.visibility = visibility;
    }

    /**
     * getSuit - accessor method for the suit variable
     * @returns {String} the card's suit
     */
    getSuit() {
        return this.suit;
    }

    /**
     * getRank - accessor method for the rank variable
     * @returns {Number} the card's rank
     */
    getRank() {
        return this.numberToRank(this.rank);
    }

    /**
     * getColor - accessor method for the color variable
     * @returns {String} color
     */
    getColor() {
        return this.color;
    }

    /**
     * getVisibility - accessor method for the visibility variable
     * @returns {Boolean} - visibility
     */
    getVisibility() {
        return this.visibility;
    }

    /**
     * setVisibility - mutatior method for visibility variable
     * @param {Boolean} vis - visibility of the card
     */
    setVisibility(vis) {
        this.visibility = vis;
    }

    /**
     * numberToRank - converts a non 2-10 rank to the name of the rank
     * @param {Number} num - the rank number 
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
     * @returns {String} rank and suit in string form
     */
    toString() {
        return this.rank + " of " + this.suit + " (" + this.color + ") (" + this.visibility +")";
    }
}