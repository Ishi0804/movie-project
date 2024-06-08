const movie = require("../models/movieModal");

const movieCheck = async (req, res, next) => {
    try {
        let findmovie = await movie.find();
        let movieExists = false;
        findmovie.forEach((ele) => {
            if (ele.category === "Movie" || ele.category === "movie" || ele.category === "Movies" || ele.category === "movies") {
                movieExists = true;
            }
        });
        if (movieExists) {
            next();
        } else {
            res.status(404).send("No movies found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

module.exports = { movieCheck};

