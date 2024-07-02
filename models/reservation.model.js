class Reservation{
    constructor(userID,busNo,seats){
        this.userID = userID;
        this.busNo = busNo;
        this.seats = seats;
        this.date = new Date();
    }
}

export default Reservation;