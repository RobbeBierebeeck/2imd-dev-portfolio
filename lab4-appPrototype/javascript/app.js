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
            this.getWeather(lat, long);
          });
    }
    getWeather(lat, long){
        console.log("ja");
        const appId="1c3e89a1826d749a036f49c987727437"
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appId}`;
        fetch(url).then(response => {
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data);
        }).then(err =>{
            console.log(err);
        })
    }

}
let app = new App();