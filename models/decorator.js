const Decorator = function (){
    this.stock = [];
    this.paintLitres = 0;

}

Decorator.prototype.addPaintCan = function(paint_can) {

    this.stock.push(paint_can);
    this.paintLitres += paint_can.litres

}

Decorator.prototype.totalLitres = function() {
    let total = 0
    for (var paint of this.stock) {
        total += paint.litres;
    };
    return total; 
};


Decorator.prototype.checkRoom = function(room) {
    if (room.area <= this.totalLitres()) {
        return true;
    } else {
        return false;
    };
};


Decorator.prototype.paintRoom = function(room) {
    if (this.checkRoom(room) === true) {
        room.painted = true;
        return room.painted;
    };
};


module.exports = Decorator;