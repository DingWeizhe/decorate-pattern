import { Meal } from "./meal";

export class Hamburger implements Meal {
  getName() {
    return "美味蟹堡";
  }

  getPrice() {
    return 99.0;
  }
}
