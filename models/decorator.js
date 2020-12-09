const Decorator = function (){
    // this is an array of paint_can objects - instances of paint_can
    this.stock = [];
    this.paintLitres = 0;

}

Decorator.prototype.addPaintCan = function(paint_can) {

    // push a paint_can into the stock empty list 
    this.stock.push(paint_can);
    this.paintLitres += paint_can.litres

}

Decorator.prototype.totalLitres = function() {

    // loop over all paint cans in the stock. When in the loop grab the paint cans litres value
    // add that to a total - set that total to be 0 before the loop - set scope to let so its local to function

    // ---------------------------------------------------------

    // set local scope total variable to 0

    let total = 0

    // use keyword OF in an array and IN for an object --- *** IMPORTANT *** - IN is for keys in an object in JS - can use let instead of const for paint in the for loop

    // for each paint can in the stock set total to be total = total + paint.litres i.e each object iterations litres property summed up. Then return the total at the end
     
    for (const paint of this.stock) {
        total += paint.litres;
    };
    return total; 
};


Decorator.prototype.checkRoom = function(room) {

    // if the rooms area attribute is less than or equal to the total litres function (instance) then room can be painted i.e true else it is false

    if (room.area <= this.totalLitres()) {
        return true;
    } else {
        return false;
    };
};


Decorator.prototype.paintRoom = function(room) {

    // If the decorator has checked whether there is enough paint i.e checkRoom then room.painted = true i.e the room can be painted as there is the correct stock

    if (this.checkRoom(room) === true) {
        room.painted = true;
        return room.painted;
    };
};

// ------------------ EXTENSIONS SOLNS -----------------------------------------






module.exports = Decorator;