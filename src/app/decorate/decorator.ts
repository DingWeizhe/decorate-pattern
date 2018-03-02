import { Meal } from "../meal/meal";

export abstract class Decorator implements Meal {
  constructor(public meal: Meal) {}
  abstract getName(): string;
  abstract getPrice(): number;
}
