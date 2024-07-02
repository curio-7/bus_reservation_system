import buses from "../utils/busRepo.js"

export const reserveSeats = (req,res) => {
    try {
        const { busNo,seats,userID } = req.body;
        const bus = buses.find(b => b.number === busNo);
        
        if(!bus){
            return res.status(404).json({
                message: "BusNot Found"
            })
        }

        const reserve = bus.reserveSeats(userID,seats);
        if(reserve){
            res.status(200).json({
                message: "Reservation Successfull"
            })
        }
        else{
            return res.status(400).json({
                message: "Less Seats are available then chosen"
            })
        }

    }
    catch(error){
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}

export const viewReservations = (req,res) => {
    try {
        const { userID } = req.params;
        const userReserve = [];

        buses.forEach(bus => {
            bus.reservations.forEach(reserve => {
                if(reserve.userID === userID){
                    userReserve.push({
                        company : bus.company,
                        busNo: bus.number,
                        src : bus.src,
                        dest : bus.dest,
                        startTime : bus.startTime,
                        endTime : bus.endTime,
                        reserveSeat : reserve.seats,
                        date : reserve.date
                    })
                }
            })
        })

        res.status(200).json(userReserve);

        
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}