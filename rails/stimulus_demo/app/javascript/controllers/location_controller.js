import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['lat', 'long', 'loading'];

    connect() {
        console.log("Hello from the Location Controller!");
        this.getPosition();
    }

    getPosition() {
        navigator.geolocation.watchPosition((position) => {
            this.latTarget.innerHTML = position.coords.latitude;
            this.longTarget.innerHTML = position.coords.longitude;
            this.loadingTarget.classList.add("d-none")
        }, (error) => {
            console.log(`There was an error grabbing the user's current position: ${error}`);
        })
    }
}