class App {
    constructor(){
        console.log("start");
        this.getLocation();
        
    }
    getLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long= position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
          });
    }

}
let app = new App();