import { Meal } from "./meal";

export class FriedChicken implements Meal {
  getName() {
    return "炸雞";
  }

  getPrice() {
    return 49.0;
  }
}
