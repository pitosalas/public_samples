asdx
import { Controller } from '@hotwired/stimulus'

console.log("*****reset_form")

export default class extends Controller {
    reset() {
        console.log("********Controller")
        this.element.reset()
    }
}