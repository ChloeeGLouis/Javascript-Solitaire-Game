import {CardStack} from "./cardstack.js";
import {Card} from "./card.js";

export class TableauPile extends CardStack {
  constructor() {
    super();
  }

  /**
   * createTableauPile - creates the initial tableau pile at the beginning of the game and sets the visibility of cards
   * @param {CardStack} dealt - array of cards to be dealt to the 
   */
  createTableauPile(dealt) {
    while (!dealt.isEmpty()) {
      if (dealt.size() == 1) 
        dealt.topCard().setVisibility(true);
      this.addCard(dealt.removeCard());
    }

  }

  /**
   * canAddCard - checks if a card get be added to a tableau pile
   * @param {Card} card - the card the player is attempting to move to the pile
   * @returns {Boolean} true the colors of the 'card' and the 'top' of the tableau pile
   * are different and if the rank of 'card' is 1 value lower than that of 'top', false otherwise
   */
  canAddCard(card) {
    if (card.getColor() != this.topCard().getColor() && card.getRank() == this.topCard().getRank() - 1) 
      return true;
    return false;
  }
}
