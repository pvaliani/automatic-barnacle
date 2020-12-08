const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

const Decorator = function (){
    this.stock = [];

}

Decorator.prototype.addPaintCan = function(paint_can) {

    this.stock.push(paint_can);

}


Decorator.prototype.totalLitres = function() {

    sum = 0;
    let total = this.stock;

    for (var i = 0; i < total.length; i++) {
        sum += total[i]
      }

    return sum;

}

module.exports = Decorator;