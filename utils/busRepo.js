import Bus from "../models/bus.model.js"

const buses = [
    new Bus('Company1','B1','C1','C2','5:00','9:00',['Sunday','Wednesday'],30),
    new Bus('Company2','B2','C3','C2','12:00','19:00',['Monday','Wednesday'],30),
    new Bus('Company3','B3','C2','C4','11:00','13:00',['Tuesday','Wednesday'],20),
    new Bus('Company4','B4','C2','C1','10:00','16:00',['Thursday','Wednesday'],10),
    new Bus('Company5','B5','C4','C3','15:00','20:00',['Friday','Wednesday'],20),
]

export default buses;