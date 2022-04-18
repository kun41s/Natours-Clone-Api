const Tour = require("../models/tour");
const APIFeatures = require("../utils/apiFeatures");

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-rating,price";
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    //EXECUTE QUERY
    const apiFeatures = new APIFeatures(Tour.find(), req.query)
      .Filter()
      .Sorting()
      // .LimitingFields()
      .Paginate();
    const tours = await apiFeatures.query;

    //SEND RESONSE
    res.status(200).json({
      status: "success",
      length: tours.length,
      data: { tours },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (error) {
    res.status(404).json({
      status: "Not Found",
      message: error,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (error) {
    res.status(500).json({
      status: "Not Found",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({
        status: "fail",
        message: "Id Not Found",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Not Found",
      message: error,
    });
  }
};
