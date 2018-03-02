import { Component } from "@angular/core";
import { FriedChicken } from "./meal/friedChicken";
import { Hamburger } from "./meal/hambuger";
import { Egg } from "./decorate/egg";
import { Cheese } from "./decorate/cheese";
import { Meal } from "./meal/meal";
import { Decorator } from "./decorate/decorator";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  meals = [
    { name: "漢堡", class: Hamburger },
    { name: "炸雞", calss: FriedChicken }
  ];
  decorates = [{ name: "加蛋", class: Egg }, { name: "加起司", class: Cheese }];

  meal: Meal;

  selectMeal(meal) {
    this.meal = new meal();
  }

  addDecorate(decorate) {
    this.meal = new decorate(this.meal);
  }
}
