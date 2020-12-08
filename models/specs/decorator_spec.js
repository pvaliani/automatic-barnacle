// import unit test assert function - built-in to node.js

const assert = require('assert');

// import Decorator and Paint_Can class

const Decorator = require('../decorator.js');

const Paint_Can = require('../paint_can.js')


describe('Decorator', function(){

    let decorator;
    let paint_can;

    beforeEach(function(){

        decorator = new Decorator([]);
        paint_can = new Paint_Can(5);

    });

    it("should start with an empty paint stock", function(){

        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])

    });

    it("should be able to add a can of paint to paint stock", function(){

        decorator.addPaintCan(paint_can);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);


    });

    it('should be able to calculate the total litres in stock', function () {


        let decorator = new Decorator([1,2]);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 3);

    })







});