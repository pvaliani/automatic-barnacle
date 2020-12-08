const Decorator = function (){
    this.stock = [];

}

Decorator.prototype.addPaintCan = function(paint_can) {

    this.stock.push(paint_can);

}

module.exports = Decorator;