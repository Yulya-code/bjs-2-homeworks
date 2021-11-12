class AlarmClock {
    constructor () {
this.alarmCollection = [];
this.timerId = null;
}

addClock(time, callback, id) {
if (!id) {
    throw new Error('Параметр ID не передан');
    } else if (this.alarmCollection.some(item => item.id == id)) {
        return console.error('Будильник с таким id уже существует!');
    }
this.alarmCollection.push(new Bell(id, time, callback));
}

removeClock(id) {
    const initialAlarmCollection = this.alarmCollection;
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
   
    return initialAlarmCollection.length > this.alarmCollection.length;
}

getCurrentFormattedTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
}

start() {
const checkClock = (alarm) => {
    if (this.getCurrentFormattedTime() == alarm.time) {
        alarm.callback;
    }
} 
     if (!this.timerId) {
       this.timerId = setInterval = (() => {
       this.alarmCollection.forEach(checkClock(alarm));
    });
    } 
}

stop() {
const checkTimerId = timerId => this.timerId != null;
    if (checkTimerId) {
     clearInterval();
     this.timerId = null;
 }
}

printAlarms() {
    const alarmInfo = (alarm) => {
      console.log(alarm.id, alarm.time);
    }
    this.alarmCollection.forEach(alarmInfo);
}

clearAlarms() {
    this.stop;
    this.alarmCollection = [];
}
}

const phoneAlarm = new AlarmClock();

class Bell {
    constructor(id, time, callback) {
        this.id = id;
        this.time = time;
        this.callback = callback;
    }
}
