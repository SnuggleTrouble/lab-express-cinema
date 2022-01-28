const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log(
        `An error occurred whilst retrieving movies from the database ${error}`
      );
      next(error);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movieDetails", { movie });
    })
    .catch((error) => {
      console.log(
        `An error occurred whilst getting the movie from the database`,
        error
      );
      next(error);
    });
});

module.exports = router;
