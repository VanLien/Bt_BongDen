function congTac() {
    this.status=false;
    this.congTacturnOn=function () {
        this.status=true;
        this.lamp.turnOn();
    };
    this.congTacturnOff=function () {
        this.status=false;
        this.lamp.turnOff();
    };
    this.connectToLamp =function (lamp) {
        this.lamp=lamp;
    };
}
function bongDen() {
    this.status=false;
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    };
}

let lamp=new bongDen();
let congTac1=new congTac();
congTac1.connectToLamp(lamp);
function switchButton() {
    if  (congTac1.status)
    {
        congTac1.congTacturnOff();
        document.getElementById("sttSwitch").innerHTML="TurnOn";
        document.getElementById("sttLamp").innerHTML="Đèn Sáng";
    }
    else
    {
        congTac1.congTacturnOn();
        document.getElementById("sttSwitch").innerHTML="TurnOff";
        document.getElementById("sttLamp").innerHTML="Đèn Tắt";
    }

}