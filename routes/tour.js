const express = require("express");
const tourControllers = require("../controllers/tour");

const router = express.Router();

router.route("/top-5-tours").get(tourControllers.aliasTopTours, tourControllers.getAllTours);

router
  .route("/")
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);

router
  .route("/:id")
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
