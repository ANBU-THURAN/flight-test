const express = require("express")
const router = express.Router()

const flightsController = require("../controller/flights.controller")

router.get("/", flightsController.getAll);
router.delete('/:id', flightsController.deleteById);
router.post("/",flightsController.addFlight);
router.get('/user/:id',flightsController.getFlightsUser)
router.post('/bookFlight',flightsController.bookFlightTicket)
module.exports = router