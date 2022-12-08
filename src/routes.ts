import express from "express"
import { RiderLocation as RiderLocationController, RiderLocations } from "./controller";
const router = express.Router();

router.use(function(req, res, next) {
  // Middleware
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'hello world' });
});

router.post('/location/:rider_id/now', RiderLocationController )
router.get('/location/:rider_id', RiderLocations)

export default router
