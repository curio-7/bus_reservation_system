import buses from "../utils/busRepo.js"


export const searchBus = (req,res) => {
    try{
        const {src,dest,date} = req.body;
        // console.log('Request URL:', req.originalUrl);
        // console.log('Request Query:', req.query);
        console.log(`Searching for buses from ${src} to ${dest} on ${date}`);
        const busesRunning = buses.filter(
            bus => 
                bus.src === src &&
                bus.dest === dest && 
                bus.isRunning(date)
        );
        console.log('Buses found:', busesRunning);
        res.status(200).json(busesRunning);
    }
    catch(error){
        res.status(500).json({
            message: "Server Error",
            error: error
        })
    }
}

