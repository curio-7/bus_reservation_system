import {Router} from 'express';
import { searchBus } from '../controllers/bus.controller.js';
import { viewReservations,reserveSeats } from '../controllers/reservation.controller.js';

const router = Router();

router.get("/search",searchBus);
router.post("/reserve",reserveSeats);
router.get("/reservation/:userID",viewReservations);

export default router;
