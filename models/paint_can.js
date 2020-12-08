const Paint_Can = function (litres){
    this.litres = litres;

}


Paint_Can.prototype.checkIfEmpty = function () {
    if (this.litres === 0){
        return true
    }else{
        return false
    };

  }


Paint_Can.prototype.emptyPaint = function () {
    this.litres =0;

}


module.exports = Paint_Can;