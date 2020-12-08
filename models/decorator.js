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


module.exports = Decorator;