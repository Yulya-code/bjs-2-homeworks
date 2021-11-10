class AlarmClock {
    constructor () {
this.alarmCollection = [];
this.timerId = null;
 }

 class Bell {
     constructor(){
 this.id = id;
 this.callback = callback;
 this.time = time;
 }
 }

 const bell = new Bell();

addClock(time, callback, id) {
if (!id) {
    throw new Error('Параметр ID не передан');
    } else if (this.alarmCollection.some(item => item.id == id)) {
        return console.error('Будильник с таким id уже существует!');
    }

    this.alarmCollection.push(bell(id, time, callback));
}


removeClock(id) {
    const filtered = this.alarmCollection.filter(item => item.id !== id) {
      return : filtered,
    };
     filtered.length < this.alarmCollection.length;
}

getCurrentFormattedTime() {
    const currentDate = new Date();
    currentDate.toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return getCurrentFormattedTime();
}


start() {
const checkClock = (alarm) => {
    if(this.getCurrentFormattedTime() == alarm.time) {
       alarm.callback();
    } 
     if (!this.timerId) {
       timerId = setInterval = (() => {
       this.alarmCollection.forEach(checkClock());
    }, 1000);
    } 
}
start();
}

stop() {
 if (this.timerId != null) {
     clearInterval();
     // не знаю как удалить значение свойства, не удалив все свойство (через delete , например)
 }
}

printAlarms() {
    const alarmInfo = (alarm) => {
      console.log(alarm.id, alarm.time);
    }
    this.alarmCollection.forEach(alarmInfo);
}

clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
}
}

const phoneAlarm = new AlarmClock();

phoneAlarm.addClock();

