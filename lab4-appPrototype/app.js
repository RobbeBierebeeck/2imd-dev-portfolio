class App{
    constructor(){
        console.log("this is the constructor");
        this.getBatteryStatus();
    }
    getBatteryStatus(){
        navigator.getBattery().then(battery => {

            let percentage = battery.level * 100;

            console.log(`Battery level: ${percentage} %`);

            document.querySelector("#percentage").innerHTML= `${percentage} %`;

            battery.addEventListener('levelchange', ()=>{
              console.log(`Battery level: ${percentage} %`);
            });
          
          });
    }
}

let app = new App();