class App {
    constructor(){
        console.log("start");
        
        this.getLocation();
        this.lat; 
        this.long;

    }
    getLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.long= position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
            this.localStorageCheck();
            
          });
    }
    localStorageCheck(){
        if(localStorage.getItem("temps") === null){
            this.getWeather();
            this.adjustingHTML();
        }
        else{
            let temperatures = localStorage.getItem("temps");
            temperatures = JSON.parse(temperatures);
            let newTimeStamp = Math.round(new Date().getTime()/1000);
            this.adjustingHTML();
            if(newTimeStamp - temperatures.time > 7200){
                localStorage.clear();
                this.getWeather();
                this.adjustingHTML();
            }

            
        }
    }
    getWeather(){
        const appId="1c3e89a1826d749a036f49c987727437";
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${appId}&units=metric`;
        fetch(url).then(response => {
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data);
            let temperatures = {"description": data.weather[0].description, "temperature": data.main.temp, "time": Math.round(new Date().getTime()/1000)};
            localStorage.setItem('temps', JSON.stringify(temperatures));
        }).then(err =>{
            console.log(err);
        })
    }

    itunesTrack1(){
        
        let url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=nelly`;
        fetch(url).then(response => {
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data);
            console.log(data.results[4].artworkUrl100);
            console.log(data.results[4].collectionViewUrl);
            console.log(data.results[4].trackName);
            console.log(data.results[4].artistName);
        }).then(err =>{
            console.log(err);
        })
    }

    itunesTrack2(){
        
        let url = `https://itunes.apple.com/search?term=vanilla+ice`;

        fetch(url).then(response => {
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data.results[4].artworkUrl100);
            console.log(data.results[4].collectionViewUrl);
            console.log(data.results[4].trackName);
            console.log(data.results[4].artistName);
        }).then(err =>{
            console.log(err);
        })
    }
    adjustingHTML(){
        let temperatures = localStorage.getItem("temps");
        temperatures = JSON.parse(temperatures);
        if(temperatures.temperature > 5){
            this.itunesTrack1();
            
        }
        else{
            this.itunesTrack2();
        }
    }
    
}
let app = new App();