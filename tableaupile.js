import {ArrayStack} from "./arraystack.js";
import {Card} from "./card.js";

export class TableauPile {
  constructor() {
    this.pile = new ArrayStack();
    // visible = false;
  }

  /**
   * createTableauPile - creates the initial tableau pile at the beginning of the game
   * @param {ArrayStack} dealt - array of cards to be dealt to the 
   */
  createTableauPile(dealt) {
    while (!dealt.isEmpty())
      this.pile.push(dealt.pop());
  }

  /**
   * addCard - adds a card to the top of the tableau pile
   * @param {Card} card - the card to be added to the top of the pile
   */
  addCard(card) {
    (this.canAddCard(card)) 
      this.push(card);
    // render
  }

  /**
   * canAddCard - checks if a card get be added to a tableau pile
   * @param {Card} card - the card the player is attempting to move to the pile
   * @returns true the colors of the 'card' and the 'top' of the tableau pile
   * are different and if the rank of 'card' is 1 value lower than that of 'top', false otherwise
   */
  canAddCard(card) {
    if (card.getColor() != this.getTop().getColor() && card.getRank == this.getTop().getRank - 1) 
      return true;
    return false;
  }

  /**
   * removeCard - removed the top card from the tableau pile
   * @returns the popped card from the tableau pile
   */
  removeCard() {
    return this.pile.pop();
  }

  /**
   * getTop - acessor method for the top of the tableau pile
   * @returns the top of the pile
   */
  getTop() {
    return this.pile.peek();
  }

  /**
     * getTableauPile - accessor method for the tableau pile
     * @returns this TableauPile object
     */
    getTableauPile() {
        return this.pile;
    }

  /**
   * isEmpty - checks if the tableau pile is empty
   * @returns true if the tableau pile is empty, false otherwise
   */
  isEmpty() {
    if (this.pile.getSize() == 0) return true;
    return false;
  }

  /**
   * getSize - returns the size of the tableau pile
   * @returns - tableau pile size
   */
  getSize() {
    return this.pile.size();
  }

  /**
   * @returns the tableau pile in string form
   */
  toString() {
    return this.pile.toString();
  }
}
