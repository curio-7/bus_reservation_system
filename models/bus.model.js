import { isValid } from "../utils/date.js";

class Bus {
    constructor(company, number, src, dest, startTime, endTime, freq, capacity) {
        this.company = company;
        this.number = number;
        this.src = src;
        this.dest = dest;
        this.startTime = startTime;
        this.endTime = endTime;
        this.freq = freq;
        this.capacity = capacity;
        this.reservations = []; //map
    }

    //methods

    isRunning(date) {
        return isValid(date, this.freq);
    }

    reserveSeats(userID, n) {
        const reservedSeats = this.reservations.reduce((acc, curr) => acc + curr.seats, 0);
        if (reservedSeats + n <= this.capacity) {
            this.reservations.push({ userID, seats: n, date: new Date() });
            return true;
        } else {
            return false;
        }
    }

    getReservations(userID) {
        return this.reservations.filter(reserve => reserve.userID === userID);
    }
}

export default Bus;
