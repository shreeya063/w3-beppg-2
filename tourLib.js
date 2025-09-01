/*
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
  */

let tourArray = [];

let nextId = 1;

function getAll() {
    return tourArray;
}

function addOne(name, info, image, price){
    if(!name || !info || !image || !price) {
        return false;
    }

    const newTour = {
        id: nextId++,
        name,
        info,
        image, 
        price
    };
    tourArray.push(newTour);
    return newTour;
}

function findById(id){
    const numericId = Number(id);
    const tour = tourArray.find(item => item.id === numericId);
    if(tour){
        return tour; 
    }
    return false;
}

function updateOneById(id, updatedData){
    const tour = findById(id);
    if(tour) {
        if(updatedData.name){
            tour.name = updatedData.name
        }
        if(updatedData.info){
            tour.info = updatedData.info
        }
        if(updatedData.image){
            tour.image = updatedData.image
        }
        if(updatedData.price){
            tour.price = updatedData.price
        }
        return tour;
    }
    return false;
}

function deleteOneById(id){
    const tour = findById(id);
    if(tour){
        const initialLength = tourArray.length;
        tourArray = tourArray.filter(tour => tour.id !== Number(id));
        return tourArray.length < initialLength;
    }
    return false;
}


const Tour = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Tour


if (require.main === module) {
 let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
 console.log(addOne("12 Days Tour"," Join us for the Best of Turku!","https://www.course-api.com/images/tours/tour-x.jpeg", "6,77"));
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(2));
 // rest of the tests here
}
