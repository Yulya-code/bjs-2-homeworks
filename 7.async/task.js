class AlarmClock {
    constructor () {
this.alarmCollection = [];
this.timerId = null;
 }

addClock = (time, callback, id) => {
if (!id) {
    throw new Error('Параметр не передан');
    } else if (id == this.alarmCollection[id]) {
        return console.error('Будильник с таким id уже существует!');
    }

    this.alarmCollection.push(AlarmClock(id, time, callback));
}

removeClock = (id) => {
    const startAlarmCollection = this.alarmCollection;
    this.alarmCollection.filter(item => item.id !== id);
    return startAlarmCollection.length > this.alarmCollection.length;
}

getCurrentFormattedTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    
    return `${hours} : ${minutes}`;
}


start = () => {
const checkClock = (alarm) => {
    if(this.getCurrentFormattedTime() == alarm.time) {
       alarm.callback();
    } else if (!this.timerId) {
        this.timerId = setInterval = (() => {
            this.alarmCollection.forEach(checkClock);
        }, 1000);
    } 
}
}

printAlarms = () => {
    const alarmInfo = (alarm) => {
      console.log(alarm.id, alarm.time);
    }
    this.alarmCollection.forEach(alarmInfo);
}

clearAlarms = () => {
    clearInterval(this.timerId);
    delete this.alarmCollection;
}
}

const alarmClock = new AlarmClock();

alarmClock.addClock(alarmClock.getCurrentFormattedTime, alarmClock.printAlarms, 1);

alarmClock.addClock((alarmClock.getCurrentFormattedTime) + 60000, alarmClock.printAlarms, 
alarmClock.clearAlarms(1000));


