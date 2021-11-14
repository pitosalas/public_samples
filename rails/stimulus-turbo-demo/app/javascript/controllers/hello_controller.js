import { Controller } from "stimulus"

console.log("*****hello!")

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
