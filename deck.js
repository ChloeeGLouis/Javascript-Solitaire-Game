import {Card} from "./card.js";
import {CardStack} from "./cardstack.js";

const suits = ["diamonds", "clubs", "hearts", "spades"];
const rank = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export class Deck extends CardStack {
    // constructor that creates a new 52-card deck 
    constructor() {
        super();
        for (let i=0; i<suits.length; i++) {
            for (let j=0; j<rank.length; j++) {
                let color = suits[i] == "clubs" || suits[i] == "spades" ? "black" : "red";
                this.addCard(new Card(suits[i], rank[j], color, false)); 
            }
        }
    }

    shuffle() {
        let tempArr = [...this.contents];
        let shuffledArr = new Array (tempArr.length);
        for (let i=0; i<tempArr.length; i++) {
            let randNum = Math.floor(Math.random() * 52);
            while (shuffledArr[randNum] != undefined) 
                randNum = Math.floor(Math.random() * 52);
            shuffledArr[randNum] = tempArr[i];
        }
        this.contents = [];
        for (let i=0; i<tempArr.length; i++) 
            this.contents.push(shuffledArr[i]);
    }

    /**
     * deal - deals a certain number of cards from the deck and returns them
     * @param {Number} num - the number of cards to be dealt
     * @returns {CardStack} an CardStack of dealt cards
     */
    deal(num) {
        let dealt = new CardStack();
        for (let i=0; i<num; i++) 
            dealt.addCard(this.removeCard());
        return dealt;
    }
}