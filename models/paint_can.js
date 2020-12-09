const Paint_Can = function (litres){
    this.litres = litres;

}

// - DON'T NEED THE ELSE IN RETURN FALSE STRICTLY SPEAKING 

Paint_Can.prototype.checkIfEmpty = function () {
    if (this.litres === 0){
        return true
    }else{
        return false
    };

    //  return !this.litres; is another way this could be done

  }

// - ADDED THIS DECREASE PAINT DURING HMK REVIEW

Paint_Can.prototype.decreasePaint = function (litres) {
    this.litres -= litres;
}

Paint_Can.prototype.emptyPaint = function () {
    this.litres =0;

}


module.exports = Paint_Can;