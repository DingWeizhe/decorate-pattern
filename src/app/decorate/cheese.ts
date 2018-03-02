import { Decorator } from "./decorator";
import { Meal } from "../meal/meal";

export class Cheese extends Decorator {
  getName(): string {
    return "加起司 " + this.meal.getName();
  }

  getPrice(): number {
    return 10 + this.meal.getPrice();
  }
}
