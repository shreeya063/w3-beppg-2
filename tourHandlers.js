const Tour = require("./tourLib");


const getAllTours = (req, res) => {
    console.log('Hello');
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
    const {name, info, image, price} = req.body;

    const newTour = Tour.addOne(name, info, image, price);

    if(newTour){
        res.json(newTour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};


const getTourById = (req, res) => {
    const tourId = req.params.tourId;
    console.log(tourId);
    const tour = Tour.findById(tourId);

    if(tour){
        res.json(tour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId;
    const {name, info, image, price} = req.body;

    const updatedTour = Tour.updateOneById(tourId, {name, info, image, price});

    if(updatedTour){
        res.json(updatedTour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId;

    const isDeleted = Tour.deleteOneById(tourId);

    if(isDeleted){
        res.json({ message: "Tour deleted successfully"});
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};