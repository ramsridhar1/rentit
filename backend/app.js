const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/rentit");

// Create a schema for the listings
const ListingSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

// Create a model for the listings
const Listing = mongoose.model("Listing", ListingSchema);

// Get all listings
app.get("/api/listings", (req, res) => {
  Listing.find({}, (err, listings) => {
    if (err) {
      res.send(err);
    } else {
      res.json(listings);
    }
  });
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
