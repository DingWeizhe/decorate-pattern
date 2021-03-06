import { Decorator } from "./decorator";
import { Meal } from "../meal/meal";

export class Egg extends Decorator {
  getName(): string {
    return "加蛋 " + this.meal.getName();
  }

  getPrice(): number {
    return 5 + this.meal.getPrice();
  }
}
