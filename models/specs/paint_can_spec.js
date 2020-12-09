// import unit test assert function - built-in to node.js

const assert = require('assert');

// import paintCan class

const Paint_Can = require('../paint_can.js');


describe('Paint_Can', function(){

    // create new paint_can object in parent for describe method
    let paint_can;

    // beforeEach allows each test to access the new paint_can object for testing purposes

    beforeEach(function(){

        paint_can = new Paint_Can(5)

    });

    it("should have a number of litres of paint", function(){

        // using the value of 5 from the new paint_can object
        const actual = paint_can.litres;
        assert.strictEqual(actual, 5)

    });

    it("should be able to check if it has started empty", function(){

        const actual = paint_can.checkIfEmpty();
        assert.strictEqual(actual, false)

    });

    it("should be able to empty itself of paint", function(){

        // apply the emptyPaint method to set paint_can to 0 litres then check against the expected value of 0 
        paint_can.emptyPaint();
        const actual = paint_can.litres;
        assert.strictEqual(actual, 0)

    });


});
