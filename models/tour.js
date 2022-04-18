const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  maxGroupSize: Number,
  difficulty: String,
  rating: Number,
  ratingQuantity: Number,
  priceDiscount: Number,
  price: {
    type: Number,
    required: true,
  },
  summery: {
    type: String,
    trim: true,
    required: [true, "A tour must have desciption"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have images"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDate: [Date],
});

module.exports = mongoose.model("Tour", tourSchema);
