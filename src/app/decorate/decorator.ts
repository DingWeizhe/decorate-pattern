import { Meal } from "../meal/meal";

export interface Decorator extends Meal {
  meal: Meal;
  // getContent(): string;
  // getPrice(): number;
}
