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

        const actual = paint_can.litres;
        assert.strictEqual(actual, 5)

    });

    it("should be able to check if it is empty", function(){

        const actual = paint_can.checkIfEmpty();
        assert.strictEqual(actual, false)

    });




});
